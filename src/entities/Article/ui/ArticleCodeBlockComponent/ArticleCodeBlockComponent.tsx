import { memo } from 'react';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <div className={classNames('article-codeblock', {}, [className])}>
        <Code className="article-codeblock__code" text={block.code} />
      </div>
    );
  },
);

ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent';
