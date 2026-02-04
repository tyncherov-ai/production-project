import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { fireEvent, screen } from '@testing-library/react';

import { Counter } from './Counter';

describe('Counter component', () => {
  test('renders the component', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });
  test('value after increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const incrementBtn = screen.getByTestId('increment-btn');
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });
  test('value after decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const incrementBtn = screen.getByTestId('decrement-btn');
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
});
