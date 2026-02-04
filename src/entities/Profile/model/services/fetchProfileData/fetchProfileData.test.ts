import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
  test('success fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.reject(new Error()));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Error during fetching profile data');
  });
});
