import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localstorage';

interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  { rejectValue: string }
>(
  'login/loginByUsername',
  async (authData: loginByUsernameProps, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>(
        'http://localhost:8000/login',
        authData,
      );

      if (!response.data) {
        throw new Error('No data received');
      }

      localStorage.setItem(
        LOCAL_STORAGE_USER_KEY,
        JSON.stringify(response.data),
      );

      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(i18n.t('Incorrect username or password'));
    }
  },
);
