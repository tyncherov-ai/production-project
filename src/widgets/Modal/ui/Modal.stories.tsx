import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Meta, StoryObj } from '@storybook/react-webpack5';

import Modal from './Modal';

import 'app/styles/index.scss'; // Подключение глобальных стилей

const meta: Meta<typeof Modal> = {
  title: 'widgets/Modal',
  component: Modal,
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
    isOpen: { control: 'boolean' },
  },
  args: {
    isOpen: true,
    portal: false,
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    className: '',
    children: 'This is a modal content',
  },
};

export const Dark: Story = {
  args: {
    className: '',
    children: 'This is a modal content in dark theme',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
