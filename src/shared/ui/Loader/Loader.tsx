import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return <div className={classNames('loader', {}, [className])} />;
};

export default Loader;
