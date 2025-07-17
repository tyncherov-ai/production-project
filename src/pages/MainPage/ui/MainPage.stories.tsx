import { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    className: { control: 'text' },
  },
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: 'asdf', isLoading: false },
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Default: Story = {
  args: {
    className: '',
  },
};

export const Dark: Story = {
  args: {
    className: '',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
