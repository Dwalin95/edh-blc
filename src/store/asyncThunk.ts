import { createAsyncThunk, AsyncThunkPayloadCreator } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from './index';

type ThunkAPIConfig = {
  state: RootState;
  dispatch: AppDispatch;
};

/**
 * @description This function is a wrapper around createAsyncThunk that catches errors and returns them as rejected values.
 */
export const createAppAsyncThunk = <ThunkReturnValue, ThunkArgs>(
  type: string,
  thunk: AsyncThunkPayloadCreator<Promise<ThunkReturnValue>, ThunkArgs, ThunkAPIConfig>,
) => {
  return createAsyncThunk<ThunkReturnValue, ThunkArgs, ThunkAPIConfig>(type, async (args, thunkApi) => {
    try {
      return await thunk(args, thunkApi);
    } catch (error) {
      return thunkApi.rejectWithValue((error as Error).message); 
    }
  });
};
