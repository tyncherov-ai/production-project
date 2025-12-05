import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
    label: 'Choose an option',
    options: [
      { value: '1', content: 'Option 1' },
      { value: '2', content: 'Option 2' },
      { value: '3', content: 'Option 3' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
