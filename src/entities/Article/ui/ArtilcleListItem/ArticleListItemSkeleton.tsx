import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui';

import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = ({
  className,
  view,
}: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {
    return (
      <div
        className={classNames(
          'article-list__item article-item article-item--big',
          {},
          [className],
        )}
      >
        <div className="article-item__image">
          <Skeleton width={420} height={280} fluid />
        </div>
        <div className="article-item__content">
          <div className="article-item__head">
            <div className="article-item__author">
              <Skeleton width={40} height={40} border="50%" />
              <div className="article-item__author-meta">
                <Skeleton width={60} height={20} />
              </div>
            </div>
            <div className="article-item__type">
              <Skeleton width={112} height={26} />
            </div>
          </div>

          <Skeleton
            className="article-item__title"
            width={'100%'}
            height={28}
          />
          <Skeleton
            className="article-item__excerpt"
            width={'100%'}
            height={40}
          />
          <div className="article-item__footer">
            <div className="article-item__info">
              <Skeleton width={53} height={27} border="999px" />
              <Skeleton width={69} height={27} border="999px" />
            </div>
            <Skeleton
              className="article-item__open-link"
              width={140}
              height={35}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={classNames(
        'article-list__item article-item article-item--small',
        {},
        [className],
      )}
    >
      <div className="article-item__image">
        <Skeleton width={410} height={230} fluid />
      </div>
      <div className="article-item__content">
        <Skeleton className="article-item__type" width={112} height={27} />
        <Skeleton className="article-item__title" width={'100%'} height={18} />
        <div className="article-item__info">
          <Skeleton width={53} height={27} border="999px" />
          <Skeleton width={69} height={27} border="999px" />
        </div>
      </div>
    </div>
  );
};
