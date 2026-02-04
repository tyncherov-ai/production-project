import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Meta, StoryObj } from '@storybook/react-webpack5';

import Sidebar from './Sidebar';

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
        _inited: true,
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
  decorators: [StoreDecorator({ user: { _inited: true } })],
};
