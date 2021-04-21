import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './booksSlice';
import { authSlice } from './authSlice';
import { contentSlice } from './contentSlice';
import { adminPanelSlice } from './adminPanelSlice';

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    auth: authSlice.reducer,
    content: contentSlice.reducer,
    adminPanel: adminPanelSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
