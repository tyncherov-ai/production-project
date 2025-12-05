import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('should return profile is loading', () => {
    const state = {
      profile: {
        isLoading: true,
      },
    } as StateSchema;
    expect(getProfileIsLoading(state)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state = {} as StateSchema;
    expect(getProfileIsLoading(state)).toEqual(undefined);
  });
});
