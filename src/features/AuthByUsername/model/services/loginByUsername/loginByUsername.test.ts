import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userData = { username: 'asdf', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: 'asdf',
      password: '12345',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userData),
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: 'asdf',
      password: '12345',
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Error during login');
  });

  //   let dispatch: Dispatch;
  //   let getState: () => StateSchema;

  //   beforeEach(() => {
  //     dispatch = jest.fn();
  //     getState = jest.fn();
  //   });

  //   test('success login', async () => {
  //     const userData = { username: 'asdf', id: '1' };
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
  //     const action = loginByUsername({ username: 'asdf', password: '12345' });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
  //     expect(dispatch).toHaveBeenCalledTimes(3);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe('fulfilled');
  //     expect(result.payload).toEqual(userData);
  //   });

  //   test('error login', async () => {
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //     const action = loginByUsername({ username: 'asdf', password: '12345' });
  //     const result = await action(dispatch, getState, undefined);

  //     expect(dispatch).toHaveBeenCalledTimes(2);
  //     expect(mockedAxios.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe('rejected');
  //     expect(result.payload).toEqual('Error during login');
  //   });
});
