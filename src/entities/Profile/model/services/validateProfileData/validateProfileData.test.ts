import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { ValidateProfileError } from '../../types/profile';

import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.UZ,
  lastname: 'Smith',
  firstname: 'John',
  city: 'Tashkent',
  currency: Currency.USD,
  avatar: 'https://assets.leetcode.com/users/tyncherov_v/avatar_1757059977.png',
};

jest.mock('axios');

describe('validateProfileData.test', () => {
  test('success validate profile data', async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('without firstname and lastname', async () => {
    const result = validateProfileData({
      ...data,
      firstname: '',
      lastname: '',
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('without age', async () => {
    const result = validateProfileData({ ...data, age: 0 });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without country', async () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });
  test('incorrect all data', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_USERNAME,
    ]);
  });
});
