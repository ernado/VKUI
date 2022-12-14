// import { useDocker } from './detectEnv';
// import { stopDocker } from './docker';

async function globalTeardown() {
  // await (global as any)['__DEV_SERVER__'].stop();
  // if (useDocker) {
  //   await stopDocker();
  // }
}

// eslint-disable-next-line import/no-default-export
export default globalTeardown;
