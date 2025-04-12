import { execSync } from 'child_process';
import prompts from 'prompts';
import simpleGit from 'simple-git';
import chalk from 'chalk';

const git = simpleGit();

const run = cmd => {
  console.log(chalk.blue(`\n$ ${cmd}`));
  execSync(cmd, { stdio: 'inherit' });
};

const getCurrentBranch = async () => {
  const branch = await git.revparse(['--abbrev-ref', 'HEAD']);
  return branch.trim();
};

async function main() {
  const branch = await getCurrentBranch();
  const isMainBranch = branch === 'master';

  console.log(chalk.cyan(`🔍 Current branch: ${branch}`));

  // const { releaseType } = await prompts({
  //   type: 'select',
  //   name: 'releaseType',
  //   message: 'Select release type',
  //   choices: [
  //     { title: 'Patch', value: 'patch' },
  //     { title: 'Minor', value: 'minor' },
  //     { title: 'Major', value: 'major' },
  //     { title: 'Custom (hotfix or prerelease)', value: 'custom' },
  //     { title: 'Cancel', value: 'cancel' },
  //   ],
  // });

  // if (releaseType === 'cancel') {
  //   console.log(chalk.yellow('🛑 Release cancelled.'));
  //   return;
  // }

  if (!isMainBranch) {
    console.error(
      chalk.red(
        `🚫 Only releases are allowed from master branches. Please switch to master branch for release.`
      )
    );
    process.exit(1);
  }

  // Step 1: Create a changeset
  run('pnpm changeset');

  // Step 2: Apply version bump
  run('pnpm changeset version');

  // Step 3: Sync lockfile
  run('pnpm install');

  // Step 4: Build packages
  run('pnpm build');

  // Step 5: Publish changed packages
  run('pnpm changeset publish');

  // Step 6: Commit and Push the published tags
  run('git add .');
  run('git commit -m "chore(release): version bump and changelog"');
  run('git push --follow-tags');

  console.log(chalk.green('\n✅ Release complete!'));
}

main().catch(err => {
  console.error(chalk.red('❌ Release script failed:'), err);
  process.exit(1);
});
