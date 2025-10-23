import { classNames } from 'shared/lib/classNames/classNames';
import './ArticleDetailsPage.scss';
import { memo } from 'react';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  return (
    <div
      className={classNames('page__article-details article-details', {}, [
        className,
      ])}
    >
      <div className="article-details__container"></div>
    </div>
  );
};

export default memo(ArticleDetailsPage);
