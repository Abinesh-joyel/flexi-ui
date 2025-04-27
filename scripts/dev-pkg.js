// super simple CLI for running package dev
import { execSync } from 'child_process';
import prompts from 'prompts';
import chalk from 'chalk';

const packageMap = {
  listbox: '@glide-ui/react-listbox',
  tabs: '@glide-ui/react-tabs',
  // you can add more packages easily here
};

async function main() {
  console.log(chalk.cyan('🛠  Which package do you want to run?\n'));

  const response = await prompts({
    type: 'select',
    name: 'package',
    message: 'Pick a package to dev 🚀',
    choices: Object.keys(packageMap).map(key => ({
      title: chalk.greenBright(key),
      value: key,
    })),
  });

  const pkg = response.package;

  if (!pkg) {
    console.log(chalk.red('❌ No package selected. Exiting.'));
    process.exit(1);
  }

  const fullPackageName = packageMap[pkg];

  const command = `pnpm --filter ${fullPackageName} dev`;

  console.log(chalk.yellowBright(`\n🚀 Running: ${command}\n`));

  execSync(command, { stdio: 'inherit' });
}

main();
