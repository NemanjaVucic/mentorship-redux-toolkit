import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

import rootMain from '../../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,
  core: {
    ...rootMain.core,
    builder: '@storybook/builder-vite',
  },
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...(rootMain.addons ?? []), '@nx/react/plugins/storybook'],
  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      // Your environment configuration here
    });
  },
};

export default config;
