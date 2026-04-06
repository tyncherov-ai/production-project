import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { getArticlesPageLimit } from '../../selectors/articles';

interface FetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  const { page = 1 } = props;
  const limit = getArticlesPageLimit(getState());
  try {
    const response = await extra.api.get<Article[]>('/articles/', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
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
