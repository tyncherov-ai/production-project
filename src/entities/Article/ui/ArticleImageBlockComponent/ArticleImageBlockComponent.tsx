import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';

import './ArticleImageBlockComponent.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <div className={classNames('article-imageblock', {}, [className])}>
        <img
          src={block.src}
          alt={block.title}
          className="article-imageblock__img"
        />
      </div>
    );
  },
);

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
