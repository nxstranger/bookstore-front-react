import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categoriesInterface } from '../interfaces/categoriesInterface';
import axios from '../axios/config';
import { RootState } from './store';
import { bookInterface } from '../interfaces/bookInterface';

export const asyncLoadCategories = createAsyncThunk(
  'content/asyncCategoryLoad',
  async () => {
    const resp = await axios.get('categories/');
    return (resp.status === 200) ? resp.data : [];
  },
);

export const asyncLoadBookInfo = createAsyncThunk(
  'content/asyncLoadBookInfo',
  async (identifier: string) => {
    const resp = await axios.get(`/book/detail/${identifier}`);
    return (resp.status === 200) ? resp.data : undefined;
  },
);

interface CategoriesStateInterface {
  categories: categoriesInterface[],
  book: bookInterface | undefined,
}

const initialState: CategoriesStateInterface = {
  categories: [],
  book: undefined,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    saveCategories: (state, action: PayloadAction<categoriesInterface[]>) => {
      action.payload.map((obj) => state.categories.push(obj));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoadCategories.fulfilled, (state, action) => {
      console.log('asyncLoadCat tick');
      return { ...state, categories: action.payload };
    });
    builder.addCase(asyncLoadBookInfo.fulfilled, (state, action) => {
      console.log('asyncLoadBookInfo tick');
      return { ...state, book: action.payload };
    });
  },
});

export const { saveCategories } = contentSlice.actions;

export const getAllCategories = (state: RootState) => state.content.categories;

export default contentSlice.reducer;
