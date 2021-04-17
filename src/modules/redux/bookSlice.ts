import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { bookInterface } from '../interfaces/bookInterface';
import axios from '../axios/config';

export const asyncLoadBooks = createAsyncThunk(
  'books/asyncLoadBooks',
  async (identifier: string) => {
    const resp = await axios.get(`/book/detail/${identifier}`);
    return (resp.status === 200) ? resp.data : undefined;
  },
);

interface BookState {
  books: bookInterface[],
}

const initialState: BookState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'books',
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
