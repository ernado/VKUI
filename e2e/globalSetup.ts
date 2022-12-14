// import { useDocker } from './detectEnv';
// import { startDocker } from './docker';
// import { setupWebpack } from './setupWebpack';

async function globalSetup() {
  // await setupWebpack();
  // if (useDocker) {
  //   console.log('Starting docker...');
  //   await startDocker();
  //   console.log('Running E2E tests in docker');
  // }
  // const host = useDocker ? 'host.docker.internal' : 'localhost';
  // const browser = await browser.launch();
  // const page = await browser.newPage();
  // await page.goto(`http://${host}:9001`);
}

// eslint-disable-next-line import/no-default-export
export default globalSetup;
