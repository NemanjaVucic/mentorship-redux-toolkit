import type { Meta, StoryObj } from '@storybook/react';

import { Image } from './Image';

const meta: Meta = {
  title: 'Shared/UI/Image',
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://gravatar.com/avatar/a660965badee47d34bccd6114d24f1ef?s=400&d=robohash&r=x',
    height: 400,
    width: 300,
  },
};
