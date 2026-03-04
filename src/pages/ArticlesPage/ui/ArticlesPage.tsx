import { memo, useEffect } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'features/articleViewSelector';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import {
  getArticlesError,
  getArticlesIsLoading,
  getArticlesView,
} from '../model/selectors/articles';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
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
  const isLoading = useSelector(getArticlesIsLoading);
  const view = useSelector(getArticlesView);
  const error = useSelector(getArticlesError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticlesList());
      dispatch(articlesPageActions.initState());
    }
  }, [dispatch]);

  const onChangeView = (newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView));
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('page__articles articles', {}, [className])}>
        <div className="articles__container">
          <ArticleViewSelector
            className="articles__view-selector"
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
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
