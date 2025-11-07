import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './ArticleTextBlockComponent.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    return (
      <div className={classNames('article-textblock', {}, [className])}>
        {block.title && (
          <h2 className="article-textblock__title">{block.title}</h2>
        )}
        {block.paragraphs.map((paragraph, index) => (
          <p key={index} className="article-textblock__paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    );
  },
);

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
