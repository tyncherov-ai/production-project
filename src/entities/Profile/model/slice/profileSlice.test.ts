import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';

import { profileActions, profileReducer } from './profileSlice';

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

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: Partial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });
  test('test cancel edit', () => {
    const state: Partial<ProfileSchema> = {
      data,
      form: {
        username: '',
      },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({ readonly: true, validateErrorrs: undefined, data, form: data });
  });
  test('test update profile', () => {
    const state: Partial<ProfileSchema> = {
      form: {
        username: 'qwer',
      },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'qwerqwer' }),
      ),
    ).toEqual({ form: { username: 'qwerqwer' } });
  });
  test('test update service pending', () => {
    const state: Partial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.pending('', undefined),
      ),
    ).toEqual({ isLoading: true, validateErrors: undefined });
  });
  test('test update service fullfiled', () => {
    const state: Partial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '', undefined),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
