import { classNames } from 'shared/lib/classNames/classNames';
import './ArticleDetailsPage.scss';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import './ArticleDetailsPage.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  return (
    <div
      className={classNames('page__article-details article-details-page', {}, [
        className,
      ])}
    >
      <div className="article-details-page__container">
        {id && <ArticleDetails id={id} />}
      </div>
    </div>
  );
};

export default memo(ArticleDetailsPage);
