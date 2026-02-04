import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

import { createAsyncThunk } from '@reduxjs/toolkit';

interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (authData: loginByUsernameProps, thunkAPI) => {
  const { rejectWithValue, dispatch, extra } = thunkAPI;
  try {
    const response = await extra.api.post<User>('/login', authData);
    if (!response.data) {
      throw new Error('No data received');
    }

    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (e) {
    console.error('Login failed:', e);
    return rejectWithValue('Error during login');
  }
});
