import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import axios from '../axios/config';
import { bookInterface } from '../interfaces/modelInterfaces';
import { filterInterface } from '../interfaces/filterInterface';

interface loadBooksParam {
  queryString?: string,
  catSlug?: string
  page?: number,
  order?: '' | 'authorASC' | 'authorDESC' | 'priceASC' | 'priceDESC'
}

export const asyncLoadBooks = createAsyncThunk(
  'books/asyncLoadBooks',
  async ({ queryString, catSlug }: loadBooksParam) => {
    const address = catSlug ? `book/category/${catSlug}` : '/book/';
    const resp = await axios.get(`${address}${queryString}`);
    return (resp.status === 200) ? resp.data : undefined;
  },
);

interface BookState {
  books: bookInterface[],
  ordering: '' | 'authorASC' | 'authorDESC' | 'priceASC' | 'priceDESC',
  queryFilter: filterInterface,
  pageCount: number
}

const initialState: BookState = {
  books: [],
  ordering: '',
  queryFilter: {},
  pageCount: 0,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setFilterQuery: (
      state,
      action: PayloadAction<filterInterface>,
    ) => ({ ...state, queryFilter: action.payload }),
    setPage: (
      state,
      action: PayloadAction<number>,
    ) => ({ ...state, page: action.payload }),
    setOrdering: (
      state,
      action: PayloadAction<'' | 'authorASC' | 'authorDESC' | 'priceASC' | 'priceDESC'>,
    ) => ({ ...state, ordering: action.payload, page: 0 }),
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoadBooks.fulfilled, (
      state, action,
    ) => ({
      ...state,
      pageCount: action.payload.count,
      books: action.payload.data,
    }));
    builder.addCase(asyncLoadBooks.rejected, (state) => ({
      ...state,
      pageCount: 0,
      books: [],
    }));
  },
});

export const { setFilterQuery, setPage, setOrdering } = booksSlice.actions;

export const selectBooks = (state: RootState) => state.books;

export default booksSlice.reducer;
