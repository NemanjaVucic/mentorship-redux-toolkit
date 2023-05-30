import type { Meta, StoryObj } from '@storybook/react';

import { HomePage } from './HomePage';

const meta = {
  title: 'Users/Pages/HomePage',
  component: HomePage,
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
