import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/ui/Loader';

import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'outline' | 'clear';
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
  isLoading?: boolean;
  loaderSize?: number;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = 'primary',
    size = 'm',
    disabled = false,
    type = 'button',
    isLoading = false,
    loaderSize = 16,
    ...otherProps
  } = props;

  return (
    <button
      type={type}
      className={classNames('button', { disabled }, [
        className,
        `button--${theme}`,
        `button--${size}`,
      ])}
      disabled={disabled || isLoading}
      {...otherProps}
    >
      {isLoading ? <Loader size={loaderSize} color="white" /> : children}
    </button>
  );
});

Button.displayName = 'Button';
