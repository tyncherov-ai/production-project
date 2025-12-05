import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<Profile>('/profile');
    if (!response.data) {
      throw new Error('No data received');
    }
    return response.data;
  } catch {
    return rejectWithValue('Error during fetching profile data');
  }
});
