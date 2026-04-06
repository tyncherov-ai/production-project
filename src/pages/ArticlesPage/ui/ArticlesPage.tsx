import { memo, useCallback, useEffect } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'features/articleViewSelector';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Page } from 'shared/ui';

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articles';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from '../model/slices/articlesPageSlice';

import './ArticlesPage.scss';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  }, [dispatch]);

  const onChangeView = (newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView));
  };

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames('page-articles', {}, [className])}
      >
        <div className="page-articles__container">
          <ArticleViewSelector
            className="page-articles__view-selector"
            view={view}
            onViewClick={onChangeView}
          />
          <ArticleList
            view={view}
            articles={articles}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
