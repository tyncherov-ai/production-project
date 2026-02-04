import { fileURLToPath } from 'node:url';
import path, { dirname } from 'path';
import webpack from 'webpack';

import type { StorybookConfig } from '@storybook/react-webpack5';

import { buildCssLoader } from '../build/loaders/buildCssLoader.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  staticDirs: ['../../public'],
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  webpackFinal: async (config) => {
    config?.resolve?.modules?.push(path.resolve(__dirname, '../../src'));
    config?.resolve?.extensions?.push('.ts', '.tsx');
    config?.module?.rules?.push(
      buildCssLoader(true, path.resolve(__dirname, '../../src')),
    );
    if (config.resolve) {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@styles': path.resolve(__dirname, '../../src/app/styles'),
        entities: path.resolve(__dirname, '../../src/entities'),
        shared: path.resolve(__dirname, '../../src/shared'),
        features: path.resolve(__dirname, '../../src/features'),
        widgets: path.resolve(__dirname, '../../src/widgets'),
        app: path.resolve(__dirname, '../../src/app'),
      };
    }
    config.plugins?.push(
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
      }),
    );
    return config;
  },
};
export default config;
