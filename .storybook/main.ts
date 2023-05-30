import type { StorybookConfig } from '@storybook/react-vite';
import * as path from 'path';

import { mergeConfig } from 'vite';

export const rootConfig: StorybookConfig = {
  // Required
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
    // '@nx/react/plugins/storybook'
  ],
  docs: {
    autodocs: 'tag',
  },
  // uncomment the property below if you want to apply some vite config globally
  viteFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    return mergeConfig(config, {
      resolve: {
        alias: {
          '@mentorship/shared/ui': path.resolve('libs', 'shared', 'ui', 'src'),
          '@mentorship/shared/utils': path.resolve('libs', 'shared', 'utils', 'src'),
          '@mentorship/shared/variables': path.resolve('libs', 'shared', 'variables', 'src'),
          '@mentorship/users/data-access': path.resolve('libs', 'users', 'data-access', 'src'),
          '@mentorship/users/features': path.resolve('libs', 'users', 'features', 'src'),
          '@mentorship/users/pages': path.resolve('libs', 'users', 'pages', 'src'),
          '@mentorship/users/server': path.resolve('libs', 'users', 'server', 'src'),
        },
      },
    });
  },
};
export default rootConfig;
