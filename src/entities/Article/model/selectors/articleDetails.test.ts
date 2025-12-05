import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails.test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    };
    const state = {
      articleDetails: {
        data,
      },
    } as StateSchema;
    expect(getArticleDetailsData(state)).toEqual(data);
  });
  test('should work with empty state data', () => {
    const state = {} as StateSchema;
    expect(getArticleDetailsData(state)).toEqual(undefined);
  });
  test('should return error', () => {
    const state = {
      articleDetails: {
        error: 'error',
      },
    } as StateSchema;
    expect(getArticleDetailsError(state)).toEqual('error');
  });
  test('should work with empty state error', () => {
    const state = {} as StateSchema;
    expect(getArticleDetailsError(state)).toEqual(undefined);
  });
  test('should return isLoading', () => {
    const state = {
      articleDetails: {
        isLoading: true,
      },
    } as StateSchema;
    expect(getArticleDetailsIsLoading(state)).toEqual(true);
  });
  test('should work with empty state isLoading', () => {
    const state = {} as StateSchema;
    expect(getArticleDetailsIsLoading(state)).toEqual(undefined);
  });
});
