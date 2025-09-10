import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosInstance } from 'axios';

type actionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<
  Return,
  Arg,
  {
    rejectValue: RejectedValue;
  }
>;

const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<(action: unknown) => unknown>;
  getState: () => StateSchema;
  actionCreator: actionCreatorType<Return, Arg, RejectedValue>;

  api: jest.Mocked<AxiosInstance>;
  navigate: jest.MockedFn<(to: string) => void>;

  constructor(actionCreator: actionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}
