import { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof NotFoundPage> = {
  title: 'widgets/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

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
