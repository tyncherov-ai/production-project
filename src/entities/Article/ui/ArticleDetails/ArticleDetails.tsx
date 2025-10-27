/* eslint-disable i18next/no-literal-string */
import { memo, useEffect } from 'react';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const article = useSelector(getArticleDetailsData);
  const isLoading = true;
  // const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (error) {
    content = (
      <p className="article-details__error">
        {t('An error occurred while loading the article details')}
      </p>
    );
  } else if (isLoading) {
    content = (
      <div className="article-details__skeletons">
        <Skeleton width={200} height={200} border="50%" />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </div>
    );
  } else if (article) {
    content = <div> ArticleDetails</div>;
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      {content}
    </DynamicModuleLoader>
  );
});

ArticleDetails.displayName = 'ArticleDetails';
