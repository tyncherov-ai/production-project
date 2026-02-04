import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { CommentItem } from './CommentItem';

const meta: Meta<typeof CommentItem> = {
  title: 'entities/CommentItem',
  component: CommentItem,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    comment: {
      id: '1',
      text: 'Очень интересная статья',
      user: {
        id: '1',
        username: 'user1',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CommentItem>;

export const Default: Story = {
  decorators: [],
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
