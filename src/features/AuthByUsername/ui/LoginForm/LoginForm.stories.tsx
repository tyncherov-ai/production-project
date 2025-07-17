import { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: 'asdf', isLoading: false },
    }),
  ],
};
export const Dark: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: 'asdf', isLoading: false },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};
export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: 'asdf',
        isLoading: false,
        error: 'Incorrect username or password',
      },
    }),
  ],
};
export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: 'asdf', isLoading: true },
    }),
  ],
};
