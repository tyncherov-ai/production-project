import { classNames } from 'shared/lib/classNames/classNames';
import './Counter.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div
      data-testid="counter"
      className={classNames('counter', {}, [className])}
    >
      <button data-testid="decrement-btn" onClick={decrement}>
        -
      </button>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <button data-testid="increment-btn" onClick={increment}>
        +
      </button>
    </div>
  );
};
