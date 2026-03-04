import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesView = (state: StateSchema) => state.articlesPage?.view;

export const getArticlesIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading;

export const getArticlesError = (state: StateSchema) =>
  state.articlesPage?.error;
