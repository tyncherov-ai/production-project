import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';

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

describe('updateProfileData.test', () => {
  test('success update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
        isLoading: false,
        readonly: false,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
        isLoading: false,
        readonly: false,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });
  test('validate error update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
        isLoading: false,
        readonly: false,
      },
    });

    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
