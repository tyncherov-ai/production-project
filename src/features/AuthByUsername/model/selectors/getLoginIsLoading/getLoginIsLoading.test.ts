import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
  test('should return true', () => {
    const state = {
      loginForm: {
        isLoading: true,
      },
    } as StateSchema;
    expect(getLoginIsLoading(state)).toEqual(true);
  });
  test('should work with empty state', () => {
    const state = {} as StateSchema;
    expect(getLoginIsLoading(state)).toEqual(false);
  });
});
