import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  const formData = getProfileForm(getState());
  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>('/profile', formData);
    if (!response.data) {
      throw new Error('No data received');
    }
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
