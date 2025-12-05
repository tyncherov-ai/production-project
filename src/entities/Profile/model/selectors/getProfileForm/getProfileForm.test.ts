import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileForm.test', () => {
  test('should return profile form data', () => {
    const form = {
      username: 'admin',
      age: 22,
      country: Country.UZ,
      lastname: 'Smith',
      firstname: 'John',
      city: 'Tashkent',
      currency: Currency.USD,
      avatar:
        'https://assets.leetcode.com/users/tyncherov_v/avatar_1757059977.png',
    };
    const state = {
      profile: {
        form,
      },
    } as StateSchema;
    expect(getProfileForm(state)).toEqual(form);
  });
  test('should work with empty state', () => {
    const state = {} as StateSchema;
    expect(getProfileForm(state)).toEqual(undefined);
  });
});
