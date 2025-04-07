import { execSync } from 'child_process';
import inquirer from 'inquirer';

function isLatestCommitTagged() {
  try {
    const tags = execSync('git tag --points-at HEAD').toString().trim();
    return tags.length > 0;
  } catch (e) {
    return false;
  }
}

async function release() {
  try {
    const currentBranch = execSync('git rev-parse --abbrev-ref HEAD')
      .toString()
      .trim();

    const { versionType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'versionType',
        message: 'Select release type:',
        choices: ['patch', 'minor', 'major', 'custom'],
      },
    ]);

    // Only enforce master branch for standard releases
    if (versionType !== 'custom' && currentBranch !== 'master') {
      console.error(
        "❌ Standard releases can only be done from the 'master' branch."
      );
      process.exit(1);
    }

    // Check for any changes
    // const changes = execSync('git status --porcelain').toString().trim();
    if (isLatestCommitTagged()) {
      console.error('❌ No changes detected. Nothing to release.');
      process.exit(1);
    }

    let versionArg = `--release-as ${versionType}`;
    if (versionType === 'custom') {
      const { customVersion } = await inquirer.prompt([
        {
          type: 'input',
          name: 'customVersion',
          message: 'Enter custom version (e.g., 1.2.3-hotfix.1):',
          validate: input =>
            /^\d+\.\d+\.\d+(-[a-z]+\.\d+)?$/.test(input)
              ? true
              : 'Enter a valid semver version (e.g. 1.2.3-hotfix.1)',
        },
      ]);
      versionArg = `--release-as ${customVersion}`;
    }

    console.log(`🚀 Releasing version using: ${versionArg}`);

    execSync(`yarn run version -- ${versionArg}`, { stdio: 'inherit' });
    execSync('git push --follow-tags origin', { stdio: 'inherit' });

    const latestTag = execSync('git describe --tags --abbrev=0')
      .toString()
      .trim();

    execSync(
      `gh release create ${latestTag} --title "${latestTag}" --notes "Release ${latestTag}"`,
      {
        stdio: 'inherit',
      }
    );

    execSync('npm publish', { stdio: 'inherit' });

    console.log(`🎉 Release ${latestTag} published successfully!`);
  } catch (err) {
    console.error('❌ Release failed:', err.message || err);
  }
}

release();
