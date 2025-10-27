import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = ({
  className,
}: ArticleImageBlockComponentProps) => {
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames('', {}, [className])}>
      ArticleImageBlockComponent
    </div>
  );
};
