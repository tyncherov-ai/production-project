/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import './ArticlesPage.scss';
import { memo } from 'react';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div className={classNames('page__articles articles', {}, [className])}>
      <div className="articles__container">Articles Page</div>
    </div>
  );
};

export default memo(ArticlesPage);
