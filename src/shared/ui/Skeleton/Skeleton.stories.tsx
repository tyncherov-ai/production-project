import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
    width: '100%',
    height: 200,
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Circle: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
};

export const CircleDark: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
