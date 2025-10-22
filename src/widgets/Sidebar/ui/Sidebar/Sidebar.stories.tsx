import { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
    className: { control: 'text' },
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          username: 'qwer',
          id: '3',
        },
      },
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const NoAuth: Story = {
  decorators: [StoreDecorator({ user: {} })],
};
