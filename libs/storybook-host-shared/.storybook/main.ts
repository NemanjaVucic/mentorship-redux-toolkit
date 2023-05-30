import type { StorybookConfig } from '@storybook/react-vite';

import rootMain from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,
  core: {
    ...rootMain.core,
  },
  stories: ['../../shared/ui/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [...(rootMain.addons ?? [])],
};

export default config;
