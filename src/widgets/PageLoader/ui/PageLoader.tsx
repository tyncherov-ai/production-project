import { classNames } from 'shared/lib/classNames/classNames';
import './PageLoader.scss';
import { Loader } from 'shared/ui/Loader';

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
