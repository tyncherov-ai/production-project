import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = ({
  className,
}: ArticleTextBlockComponentProps) => {
  return <div className={classNames('', {}, [className])}></div>;
};
