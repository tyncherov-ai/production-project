import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const state = {
      loginForm: {
        password: 'asdfasdf',
      },
    } as StateSchema;
    expect(getLoginPassword(state)).toEqual('asdfasdf');
  });
  test('should work with empty state', () => {
    const state = {} as StateSchema;
    expect(getLoginPassword(state)).toEqual('');
  });
});
