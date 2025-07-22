import { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    className: '',
  },
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: 'asdf', isLoading: false },
    }),
  ],
};

export const Dark: Story = {
  args: {
    className: '',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      loginForm: { username: '123', password: 'asdf', isLoading: false },
    }),
  ],
};
