import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;

  try {
    const response = await extra.api.get<Article[]>('/articles/', {
      params: {
        _expand: 'user',
      },
    });
    if (!response.data) {
      throw new Error('No data received');
    }
    return response.data;
  } catch {
    return rejectWithValue('Error during fetching articles');
  }
});
