import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Meta, StoryObj } from '@storybook/react-webpack5';

import PageLoader from './PageLoader';

const meta: Meta<typeof PageLoader> = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof PageLoader>;

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
