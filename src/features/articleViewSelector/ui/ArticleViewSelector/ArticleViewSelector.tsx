import { memo } from 'react';
import { ArticleView } from 'entities/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';

import { viewTypes } from '../../model/viewTypes';

import './ArticleViewSelector.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  return (
    <div className={classNames('article-view-selector', {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={'clear'}
          size="s"
          className={classNames(
            'article-view-selector__button',
            {
              'article-view-selector__button--active': viewType.view === view,
            },
            [],
          )}
          onClick={() => onViewClick?.(viewType.view)}
        >
          <viewType.icon size={20} />
        </Button>
      ))}
    </div>
  );
};

export default memo(ArticleViewSelector);
