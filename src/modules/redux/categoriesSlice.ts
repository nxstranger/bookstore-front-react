import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoriesInterface } from '../interfaces/categoriesInterface';
import axios from '../axios/config';
import { RootState } from './store';

export const asyncLoadCategories = createAsyncThunk(
  'categories/asyncCategoryLoad',
  async () => {
    const resp = await axios.get('categories/');
    return (resp.status === 200) ? resp.data : [];
  },
);

interface CategoriesStateInterface {
  categories: CategoriesInterface[],
}

const initialState: CategoriesStateInterface = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    saveCategories: (state, action: PayloadAction<CategoriesInterface[]>) => {
      action.payload.map((obj) => state.categories.push(obj));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoadCategories.fulfilled, (state, action) => {
      console.log('asyncLoadCat tick');
      return { ...state, categories: action.payload };
    });
  },
});

export const { saveCategories } = categoriesSlice.actions;

export const getAllCategories = (state: RootState) => state.categories.categories;

export default categoriesSlice.reducer;
