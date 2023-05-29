import type { StorybookConfig } from '@storybook/react-vite';

export const rootConfig: StorybookConfig = {
  // Required
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // Optional
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-styling',
    'storybook-addon-designs',
    'storybook-color-picker',
    'storybook-multilevel-sort',
    'msw-storybook-addon', // need to execute `pnpm dlx msw init apps/users/public/` to generate service worker for MSW
  ],
  docs: {
    autodocs: 'tag',
  },
  // uncomment the property below if you want to apply some vite config globally
  // viteFinal: async (config, { configType }) => {
  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  //   return config;
  // },
};
export default rootConfig;
