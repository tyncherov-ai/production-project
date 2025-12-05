import StoreProvider from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
  ThunkExtraArg,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ThunkExtraArg,
  AppDispatch,
  ReduxStoreWithManager,
  ThunkConfig,
};
