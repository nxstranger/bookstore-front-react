import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { bookInterface } from '../interfaces/modelInterfaces';
import axios from '../axios/config';
import { filterInterface } from '../interfaces/filterInterface';

export const asyncLoadBooks = createAsyncThunk(
  'books/asyncLoadBooks',
  async (query: string) => {
    const resp = await axios.get(`/book/${query}`);
    return (resp.status === 200) ? resp.data : undefined;
  },
);

interface BookState {
  books: bookInterface[],
  ordering: '' | 'authorASC' | 'authorDESC' | 'priceASC' | 'priceDESC',
  queryFilter: filterInterface,
  page: number,
}

const initialState: BookState = {
  books: [],
  ordering: '',
  queryFilter: {},
  page: 0,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    saveBooks: (state, action: PayloadAction<bookInterface[]>) => {
      action.payload.map((obj) => state.books.push(obj));
    },
  },
});

export const { saveBooks } = booksSlice.actions;

export const selectBooks = (state: RootState) => state.books;

export default booksSlice.reducer;
