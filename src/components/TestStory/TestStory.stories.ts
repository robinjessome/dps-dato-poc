import type { Meta, StoryObj } from '@storybook/react';

import TestStory from './index';

const meta = {
  // title: 'Test/Storybook',
  component: TestStory,
} satisfies Meta<typeof TestStory>;

export default meta;
type Primary = StoryObj<typeof TestStory>;

export const Primary = {
  args: {
    text: 'Hello World.',
  },
};
