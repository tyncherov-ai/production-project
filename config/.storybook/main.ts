import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
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
    config?.module?.rules?.push(buildCssLoader(true));
    return config;
  },
};
export default config;
