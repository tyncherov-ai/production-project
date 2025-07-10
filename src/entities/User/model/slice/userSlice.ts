import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

const userReducer = userSlice.reducer;

export const { actions: userActions } = userSlice;
export default userReducer;
