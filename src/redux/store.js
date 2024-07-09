import { configureStore } from '@reduxjs/toolkit';
import authApiSlice from '../api/auth/authApiSlice';

const store = configureStore({
  reducer: {
    auth: authApiSlice,
  },
});

export default store;