import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './bookSlice';
import { authSlice } from './authSlice';

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
