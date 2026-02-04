import { StateSchema } from 'app/providers/StoreProvider';

import { ValidateProfileError } from '../../types/profile';

import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('should return profile validate errors', () => {
    const state = {
      profile: {
        validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
      },
    } as StateSchema;
    expect(getProfileValidateErrors(state)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
  test('should work with empty state', () => {
    const state = {} as StateSchema;
    expect(getProfileValidateErrors(state)).toEqual(undefined);
  });
});
