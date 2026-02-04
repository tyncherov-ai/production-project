import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Meta, StoryObj } from '@storybook/react-webpack5';

import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Default: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      addCommentForm: { text: 'test comment' },
    }),
  ],
};
export const Dark: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      addCommentForm: { text: 'test comment' },
    }),
    ThemeDecorator(Theme.DARK),
  ],
};
export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      addCommentForm: {
        error: 'Some error',
      },
    }),
  ],
};
export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      addCommentForm: { text: 'test comment', isLoading: true },
    }),
  ],
};
