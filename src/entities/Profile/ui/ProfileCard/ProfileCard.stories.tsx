import { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.UZ,
      lastname: 'Smith',
      firstname: 'John',
      city: 'Tashkent',
      currency: Currency.USD,
      avatar:
        'https://assets.leetcode.com/users/tyncherov_v/avatar_1757059977.png',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: 'true',
  },
};
