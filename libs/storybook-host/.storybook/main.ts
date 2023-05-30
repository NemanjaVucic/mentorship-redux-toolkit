import type { StorybookConfig } from '@storybook/react-vite';

import rootMain from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,
  core: {
    ...rootMain.core,
  },
  stories: [
    // shared
    '../../shared/ui/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // users
    '../../users/pages/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../users/features/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [...(rootMain.addons ?? [])],
};

export default config;
