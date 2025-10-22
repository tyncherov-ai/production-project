import { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    className: { control: 'text' },
  },
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
        isLoading: false,
        readonly: false,
      },
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
