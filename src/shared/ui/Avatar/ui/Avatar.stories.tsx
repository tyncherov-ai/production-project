import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
    size: 120,
    src: 'https://assets.leetcode.com/users/tyncherov_v/avatar_1757059977.png',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
