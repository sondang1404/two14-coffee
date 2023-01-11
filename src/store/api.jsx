import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendRequest } from './sendRequest';

export const getAllCoffee = createAsyncThunk(
  'api/get-all-coffee',
  (payload, thunkAPI) => {
    const url = `/get-all-coffee`;
    return sendRequest(url, payload, thunkAPI, 'get');
  }
);
