import { classNames } from 'shared/lib/classNames/classNames';
import './Input.scss';
import { InputHTMLAttributes, memo } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    type = 'text',
    onChange,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(e);
    e.target.placeholder = '';
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
    e.target.placeholder = placeholder || '';
  };

  return (
    <input
      type={type}
      className={classNames('input', {}, [className])}
      value={value}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      placeholder={placeholder}
      autoComplete="off"
      readOnly={readOnly}
      {...otherProps}
    />
  );
});

Input.displayName = 'Input';
