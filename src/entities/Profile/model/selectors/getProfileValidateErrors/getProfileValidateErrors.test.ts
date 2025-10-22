import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors.test', () => {
  test('should return profile validate errors', () => {
    const state = {
      profile: {
        validateError: [ValidateProfileError.INCORRECT_USER_DATA],
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
