import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider';
import axios, { AxiosInstance } from 'axios';

import { AsyncThunkAction } from '@reduxjs/toolkit';

type actionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<
  Return,
  unknown,
  {
    rejectValue: RejectedValue;
    extra: ThunkExtraArg;
    state: StateSchema;
  }
>;

const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<(action: unknown) => unknown>;
  getState: () => StateSchema;
  actionCreator: actionCreatorType<Return, Arg, RejectedValue>;

  api: jest.Mocked<AxiosInstance>;

  constructor(
    actionCreator: actionCreatorType<Return, Arg, RejectedValue>,
    state?: Partial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
    });

    return result;
  }
}
