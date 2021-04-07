import { configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './bookSlice';
import { authSlice } from './authSlice';
import { categoriesSlice } from './categoriesSlice';
import { adminPanelSlice } from './adminPanelSlice';

export const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
    auth: authSlice.reducer,
    categories: categoriesSlice.reducer,
    adminPanel: adminPanelSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
