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
  page: number,
  pageCount: number
}

const initialState: BookState = {
  books: [],
  ordering: '',
  queryFilter: {},
  page: 0,
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
    builder.addCase(asyncLoadBooks.fulfilled, (state, action) => {
      console.log('asyncLoadBooks tick');
      return {
        ...state,
        pageCount: action.payload.count,
        books: action.payload.data,
      };
    });
    builder.addCase(asyncLoadBooks.rejected, (state) => {
      console.log('asyncLoadBooks tick');
      return {
        ...state,
        pageCount: 0,
        books: [],
      };
    });
  },
});

export const { setFilterQuery, setPage, setOrdering } = booksSlice.actions;

export const selectBooks = (state: RootState) => state.books;

// export const getQueryString = (state: RootState) => {
//   let query = '';
//   const values = state.books.queryFilter;
//   // console.log('values');
//   // console.log(values);
//   const { page, ordering } = state.books;
//   if (values && values.authorId) query += `author_id=${values.authorId}&`;
//   if (values && values.category) query += `category=${values.category}&`;
//   if (values && values.priceFrom) query += `price_from=${values.priceFrom}&`;
//   if (values && values.priceTo) query += `price_to=${values.priceTo}&`;
//   if (page) query += `page=${page}&`;
//   if (ordering) query += `ordering=${ordering}&`;
//   if (query) {
//     query = `/?${query.slice(0, -1)}`;
//   }
//   return query;
// };

export default booksSlice.reducer;
