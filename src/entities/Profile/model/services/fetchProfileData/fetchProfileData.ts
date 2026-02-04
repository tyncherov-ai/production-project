import { ThunkConfig } from 'app/providers/StoreProvider';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileID, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<Profile>(`/profiles/${profileID}`);
    if (!response.data) {
      throw new Error('No data received');
    }
    return response.data;
  } catch {
    return rejectWithValue('Error during fetching profile data');
  }
});
