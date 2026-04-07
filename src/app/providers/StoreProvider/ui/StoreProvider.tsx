import React from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: Partial<StateSchema>;
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  console.log('StoreProvider render');

  return <Provider store={store}>{children}</Provider>;
};

StoreProvider.displayName = 'StoreProvider';

export default StoreProvider;
