import { classNames } from 'shared/lib/classNames/classNames';
import './Avatar.scss';
import { GoPerson } from 'react-icons/go';
import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
  className?: string;
  src?: string;
  size: number;
  rounded?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, size, rounded = true } = props;
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
      borderRadius: rounded ? '50%' : '8px',
    };
  }, [size, rounded]);

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
