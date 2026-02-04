import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return profile data', () => {
    const data = {
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
        data,
      },
    } as StateSchema;
    expect(getProfileData(state)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state = {} as StateSchema;
    expect(getProfileData(state)).toEqual(undefined);
  });
});
