import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: Partial<LoginSchema> = { username: 'asdf' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('asdfasdf')),
    ).toEqual({ username: 'asdfasdf' });
  });
  test('test set password', () => {
    const state: Partial<LoginSchema> = { password: '12345' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('123456')),
    ).toEqual({ password: '123456' });
  });
});
