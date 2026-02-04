import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
  const { rejectWithValue, dispatch, extra, getState } = thunkAPI;

  const userData = getUserAuthData(getState());
  const articleId = getArticleDetailsData(getState())?.id;

  if (!userData || !text || !articleId) {
    return rejectWithValue('No data');
  }

  try {
    const response = await extra.api.post<Comment>('/comments/', {
      text,
      articleId,
      userId: userData.id,
    });
    if (!response.data) {
      throw new Error('No data received');
    }

    dispatch(fetchCommentsByArticleId(articleId));

    return response.data;
  } catch (e) {
    console.error('Send comment error:', e);
    return rejectWithValue('Error during sending comment');
  }
});
