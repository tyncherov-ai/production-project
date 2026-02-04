import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    to: '/',
  },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    className: '',
    children: 'text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    className: '',
    children: 'text',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
  args: {
    className: '',
    children: 'text',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  args: {
    className: '',
    children: 'text',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
