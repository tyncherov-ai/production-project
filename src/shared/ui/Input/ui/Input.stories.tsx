import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
//import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
//import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type text',
    value: '123123',
  },
};
