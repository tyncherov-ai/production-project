import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('should return profile error', () => {
    const state = {
      profile: {
        error: 'errr',
      },
    } as StateSchema;
    expect(getProfileError(state)).toEqual('errr');
  });
  test('should work with empty state', () => {
    const state = {} as StateSchema;
    expect(getProfileError(state)).toEqual(undefined);
  });
});
