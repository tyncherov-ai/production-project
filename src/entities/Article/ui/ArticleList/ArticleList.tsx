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
  error?: string | undefined;
}

export const ArticleList = (props: ArtilcleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL } = props;
  const viewClass =
    view === ArticleView.BIG ? 'article-list--big' : 'article-list--small';

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} />;
  };

  return (
    <div className={classNames('article-list', {}, [className, viewClass])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading &&
        new Array(view === ArticleView.SMALL ? 6 : 2)
          .fill(0)
          .map((_, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
          ))}
    </div>
  );
};
