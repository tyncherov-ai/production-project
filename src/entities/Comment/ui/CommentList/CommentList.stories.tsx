import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    comments: [
      {
        id: '1',
        text: 'Очень интересная статья',
        user: {
          id: '1',
          username: 'user1',
        },
      },
      {
        id: '2',
        text: 'Очень интересная статья',
        user: {
          id: '2',
          username: 'user2',
        },
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof CommentList>;

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
