import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { bookInterface } from '../interfaces/bookInterface';

interface BookState {
  books: bookInterface[],
}

const initialState: BookState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    saveBooks: (state, action: PayloadAction<bookInterface[]>) => {
      action.payload.map((obj) => state.books.push(obj));
    },
  },
});

export const { saveBooks } = bookSlice.actions;

export const selectBooks = (state: RootState) => state.books;

export default bookSlice.reducer;
