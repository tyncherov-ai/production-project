import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArtilcleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArtilcleListItem/ArticleListItemSkeleton';

import './ArticleList.scss';

interface ArtilcleListProps {
  className?: string;
  isLoading?: boolean;
  view?: ArticleView;
  articles: Article[];
}

export const ArticleList = (props: ArtilcleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL } = props;
  const viewClass =
    view === ArticleView.BIG ? 'article-list--big' : 'article-list--small';

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} />;
  };

  if (isLoading) {
    return (
      <div className={classNames('article-list', {}, [className, viewClass])}>
        {new Array(view === ArticleView.SMALL ? 9 : 3)
          .fill(0)
          .map((_, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
          ))}
      </div>
    );
  }

  return (
    <div className={classNames('article-list', {}, [className, viewClass])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};
