import { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AboutPage> = {
  title: 'widgets/AboutPage',
  component: AboutPage,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

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
