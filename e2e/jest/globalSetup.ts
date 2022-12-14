import type { Config as JestConfig } from '@jest/types';
import baseSetup from 'jest-playwright-preset/setup';
import { useDocker } from '../detectEnv';
import { startDocker } from '../docker';
import { devServer, setupWebpack } from '../setupWebpack';

module.exports = async function setup(jestConfig: JestConfig.GlobalConfig) {
  // do not re-run webpack in watch mode
  // https://github.com/facebook/jest/issues/6800
  if (devServer) {
    // hack into middleware to wait for build to pass
    return new Promise((ok) => (devServer as any).middleware.waitUntilValid(ok));
  }

  await setupWebpack();
  if (useDocker) {
    console.log('Starting dockerized chrome...');
    await startDocker();
    console.log('Running E2E tests in docker');
  }
  await baseSetup(jestConfig);
};
