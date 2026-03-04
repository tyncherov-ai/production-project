import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import './Select.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, onChange, readonly } = props;

  const optionList = useMemo(() => {
    return options?.map((option) => (
      <option
        className="select__option"
        value={option.value}
        key={option.value}
      >
        {option.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames('select', {}, [className])}>
      {label && <span className="select__label">{label}</span>}
      <select
        value={value}
        onChange={onChangeHandler}
        className="select__element"
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
});

Select.displayName = 'Select';
