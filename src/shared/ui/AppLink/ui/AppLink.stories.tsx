import { Meta, StoryObj } from '@storybook/react';
import AppLink, { AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
  title: 'widgets/AppLink',
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
