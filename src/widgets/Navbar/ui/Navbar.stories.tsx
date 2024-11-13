import { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

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
};

export const Dark: Story = {
  args: {
    className: '',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
