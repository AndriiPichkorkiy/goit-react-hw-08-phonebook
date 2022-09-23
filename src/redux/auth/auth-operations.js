import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const result = await api.signup(data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (data, thunkAPI) => {
    try {
      const result = await api.signin(data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const result = await api.logout();
    return result.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState();
    if (!auth.token) {
      throw Error('error');
    }
    const result = await api.getCurrent(auth.token);
    return { ...result, token: auth.token };
  } catch (error) {
    return thunkAPI.rejectWithValue({});
  }
});
