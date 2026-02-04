import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    theme: 'primary',
    size: 'm',
    disabled: false,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Click me',
    theme: 'primary',
    size: 'm',
    disabled: false,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
  args: {
    children: 'Click me',
    theme: 'secondary',
    size: 'm',
    disabled: false,
  },
};
export const SecondaryDark: Story = {
  args: {
    children: 'Click me',
    theme: 'secondary',
    size: 'm',
    disabled: false,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    children: 'Click me',
    theme: 'outline',
    size: 'm',
    disabled: false,
  },
};
export const OutlineDark: Story = {
  args: {
    children: 'Click me',
    theme: 'outline',
    size: 'm',
    disabled: false,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
  args: {
    children: 'Click me',
    theme: 'clear',
    size: 'm',
    disabled: false,
  },
};
export const ClearDark: Story = {
  args: {
    children: 'Click me',
    theme: 'clear',
    size: 'm',
    disabled: false,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Disabled: Story = {
  args: {
    children: 'Click me',
    theme: 'primary',
    size: 'm',
    disabled: true,
  },
};
