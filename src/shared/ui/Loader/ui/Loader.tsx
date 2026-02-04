import { classNames } from 'shared/lib/classNames/classNames';

import './Loader.scss';

interface LoaderProps {
  className?: string;
  size?: number;
  color?: 'primary' | 'white';
}

export const Loader = ({
  className,
  size = 50,
  color = 'primary',
}: LoaderProps) => {
  return (
    <div
      className={classNames('loader', {}, [className, `loader-${color}`])}
      style={
        {
          '--loader-size': `${size}px`,
          width: `${size}px`,
          height: `${size}px`,
        } as React.CSSProperties
      }
    />
  );
};
