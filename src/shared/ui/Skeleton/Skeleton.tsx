import { classNames } from 'shared/lib/classNames/classNames';

import './Skeleton.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  fluid?: boolean;
  border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, height, width, border, fluid = false } = props;
  let styles: React.CSSProperties = {};
  if (fluid) {
    styles = {
      maxWidth: width,
      maxHeight: height,
      borderRadius: border,
    };
  } else {
    styles = {
      width,
      height,
      borderRadius: border,
    };
  }
  return (
    <div
      className={classNames('skeleton', {}, [className])}
      style={styles}
    ></div>
  );
};
