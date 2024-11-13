import { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof MainPage> = {
  title: 'widgets/MainPage',
  component: MainPage,
  argTypes: {
    className: { control: 'text' },
  },
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
