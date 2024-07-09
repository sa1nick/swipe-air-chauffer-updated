import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

import { Login, SingupwithNumber } from '../endPoints';

const initialState = {
  signUpEmail: {
    data: null,
    loading: false,
    error: null,
  },
  signUpNumber: {
    data: null,
    loading: false,
    error: null,
  },
};

const handleApiCall = (actionType, dataKey) => (builder) => {
  builder
    .addCase(actionType.pending, (state) => {
      state[dataKey].loading = true;
      state[dataKey].error = null;
    })
    .addCase(actionType.fulfilled, (state, action) => {
      state[dataKey].loading = false;
      state[dataKey].data = action.payload;
    })
    .addCase(actionType.rejected, (state, action) => {
      state[dataKey].loading = false;
      state[dataKey].error = action.error.message;
    });
};

export const signUpWithEmail = createAsyncThunk(
  'authApiSlice/signUpWithEmail',
  async (params) => {
    const response = await axiosInstance.post(Login, params);
    return response.data;
  }
);

export const signUpWithNumber = createAsyncThunk(
  'authApiSlice/signUpWithNumber',
  async (params) => {
    console.log('params: ', params)
    const response = await axiosInstance.post(SingupwithNumber, params);
    console.log('resp: ', response)
    return response.data;
  }
);

const authApiSlice = createSlice({
  name: 'authApiSlice',
  initialState: {
    data: null,
    logisticsUserTypesData: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(signUpWithNumber.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
      state.error = null;
    })
    .addCase(signUpWithNumber.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    })
  },
});

export default authApiSlice.reducer;