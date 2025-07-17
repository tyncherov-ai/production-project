import { classNames } from 'shared/lib/classNames/classNames';
import './Button.scss';
import { ButtonHTMLAttributes, FC, memo } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'outline' | 'clear';
  size?: 's' | 'm' | 'l';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = 'primary',
    size = 'm',
    disabled = false,
    type = 'button',
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
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
