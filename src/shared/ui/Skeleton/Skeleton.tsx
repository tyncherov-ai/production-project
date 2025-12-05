import { classNames } from 'shared/lib/classNames/classNames';
import './Skeleton.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, height, width, border } = props;
  const styles: React.CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return (
    <div
      className={classNames('skeleton', {}, [className])}
      style={styles}
    ></div>
  );
};
