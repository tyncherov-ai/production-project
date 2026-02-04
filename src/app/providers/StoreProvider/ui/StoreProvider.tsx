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

  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate,
  );

  return <Provider store={store}>{children}</Provider>;
};

StoreProvider.displayName = 'StoreProvider';

export default StoreProvider;
