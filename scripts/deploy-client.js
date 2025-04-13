import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Recreate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Constants
const DIST_DIR = join(__dirname, '../apps/glide-ui-client/dist');
const TEMP_DIR = join(__dirname, '.gh-pages-temp');
const BRANCH = 'gh-pages';
const run = cmd => {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
};

try {
  // Get the remote URL of the current Git repo
  const remoteUrl = execSync('git config --get remote.origin.url')
    .toString()
    .trim();
  // 1. Clean up old temp directory
  run(`rm -rf ${TEMP_DIR}`);

  // 2. Clone gh-pages branch into temp directory
  run(`git clone -b ${BRANCH} --single-branch ${remoteUrl} ${TEMP_DIR}`);

  // 3. Clear the old contents
  run(`rm -rf ${TEMP_DIR}/*`);

  // 4. Build and Copy new dist contents
  run('pnpm -F glide-ui-client build');
  run(`cp -r ${DIST_DIR}/* ${TEMP_DIR}`);

  // 5. Commit and push
  run(
    `cd ${TEMP_DIR} && git add . && git commit -m "deploy: update GitHub Pages" && git push`
  );

  // 6. Clean up
  run(`rm -rf ${TEMP_DIR}`);

  console.log('\n✅ Deployment successful!');
} catch (err) {
  console.error('❌ Deployment failed:', err.message);
  process.exit(1);
}
