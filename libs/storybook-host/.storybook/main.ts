import type { StorybookConfig } from '@storybook/react-vite';

import rootMain from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,
  core: {
    ...rootMain.core,
    builder: '@storybook/builder-vite',
  },
  stories: [
    // shared
    '../../shared/ui/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    // users
    '../../users/pages/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../users/feature/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [...(rootMain.addons ?? []), '@nx/react/plugins/storybook'],
};

export default config;
