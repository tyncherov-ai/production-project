import { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
  title: 'widgets/Loader',
  component: Loader,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

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
