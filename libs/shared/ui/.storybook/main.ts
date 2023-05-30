import type { StorybookConfig } from '@storybook/react-vite';
// import { mergeConfig } from 'vite';

import rootMain from '../../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,
  core: {
    ...rootMain.core,
  },
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...(rootMain.addons ?? [])],
  // async viteFinal(config, { configType }) {
  //   if (configType === 'DEVELOPMENT') {
  //     // Your development configuration goes here
  //   }
  //   if (configType === 'PRODUCTION') {
  //     // Your production configuration goes here.
  //   }
  //   return mergeConfig(config, {
  //     // Your environment configuration here
  //   });
  // },
};

export default config;
