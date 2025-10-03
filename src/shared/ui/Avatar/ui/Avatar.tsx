import { classNames } from 'shared/lib/classNames/classNames';
import './Avatar.scss';
import { GoPerson } from 'react-icons/go';
import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
  className?: string;
  src?: string;
  size: number;
}

export const Avatar = ({ className, src, size }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return (
    <div className={classNames('avatar', {}, [className])} style={styles}>
      {src ? (
        <img src={src} alt="Avatar" />
      ) : (
        <GoPerson
          className="avatar-placeholder"
          style={{ fontSize: size / 3 }}
        />
      )}
    </div>
  );
};
