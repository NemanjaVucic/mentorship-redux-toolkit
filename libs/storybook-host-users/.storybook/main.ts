import type { StorybookConfig } from '@storybook/react-vite';

import rootMain from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,
  core: {
    builder: '@storybook/builder-vite',
  },
  stories: ['../../users/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [...(rootMain.addons ?? []), '@nx/react/plugins/storybook'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
