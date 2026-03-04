import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui';

import './PageLoader.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames('page-loader', {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;
