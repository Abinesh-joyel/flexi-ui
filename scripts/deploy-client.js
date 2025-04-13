// deploy-gh-pages.js
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const DIST_DIR = path.join(__dirname, 'apps/glide-ui-client/dist');
const BRANCH = 'gh-pages';
const TEMP_DIR = '.gh-pages-temp';

if (!fs.existsSync(DIST_DIR)) {
  console.error('❌ Build directory not found. Make sure to build first.');
  process.exit(1);
}

console.log('🚀 Deploying to GitHub Pages...');

try {
  execSync(`rm -rf ${TEMP_DIR}`);
  execSync(
    `git clone -b ${BRANCH} --single-branch $(git config --get remote.origin.url) ${TEMP_DIR}`
  );
  execSync(`rm -rf ${TEMP_DIR}/*`);
  execSync(`cp -r ${DIST_DIR}/* ${TEMP_DIR}`);
  execSync(
    `cd ${TEMP_DIR} && git add . && git commit -m "deploy: update GitHub Pages" && git push`
  );
  execSync(`rm -rf ${TEMP_DIR}`);
  console.log('✅ Deployed successfully to GitHub Pages!');
} catch (err) {
  console.error('❌ Deployment failed:', err.message);
  process.exit(1);
}
