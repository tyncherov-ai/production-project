import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return password', () => {
    const state = {
      loginForm: {
        username: 'asdfasdf',
      },
    } as StateSchema;
    expect(getLoginUsername(state)).toEqual('asdfasdf');
  });
  test('should work with empty state', () => {
    const state = {} as StateSchema;
    expect(getLoginUsername(state)).toEqual('');
  });
});
