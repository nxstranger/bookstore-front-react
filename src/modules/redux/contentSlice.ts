import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categoriesInterface, bookInterface, authorInterface } from '../interfaces/modelInterfaces';
import axios from '../axios/config';
import { RootState } from './store';

export const asyncLoadBookInfo = createAsyncThunk(
  'content/asyncLoadBookInfo',
  async (identifier: string) => {
    const resp = await axios.get(`/book/detail/${identifier}`);
    return (resp.status === 200) ? resp.data : undefined;
  },
);

export const asyncLoadCategories = createAsyncThunk(
  'content/asyncCategoryLoad',
  async () => {
    const resp = await axios.get('categories/');
    return (resp.status === 200) ? resp.data : [];
  },
);

export const asyncDeleteCategory = createAsyncThunk(
  'content/asyncDeleteCategory',
  async ({ token, categoryId }: {token: string, categoryId: number}) => {
    const resp = await axios.delete(`/category/${categoryId}`,
      {
        headers: {
          Authorization: token,
        },
      });
    return (resp.status === 204) ? +categoryId : undefined;
  },
);

export const asyncCreateCategory = createAsyncThunk(
  'content/asyncCreateCategory',
  async ({ token, title, slug }: {token: string, title: string, slug: string}) => {
    const resp = await axios.post('/categories',
      { title, slug },
      {
        headers: {
          Authorization: token,
        },
      });
    return (resp.status === 201) ? resp.data : undefined;
  },
);

export const asyncLoadAuthors = createAsyncThunk(
  'content/asyncLoadAuthors',
  async () => {
    const resp = await axios.get('author/');
    return (resp.status === 200) ? resp.data : [];
  },
);

export const asyncDeleteAuthor = createAsyncThunk(
  'content/asyncDeleteAuthor',
  async ({ token, authorId }: {token: string, authorId: number}) => {
    const resp = await axios.delete(`/author/${authorId}`,
      {
        headers: {
          Authorization: token,
        },
      });
    return (resp.status === 204) ? +authorId : undefined;
  },
);

export const asyncCreateAuthor = createAsyncThunk(
  'content/asyncCreateAuthor',
  async ({ token, name }: {token: string, name: string}) => {
    const resp = await axios.post('/author',
      { name },
      {
        headers: {
          Authorization: token,
        },
      });
    return (resp.status === 201) ? resp.data : undefined;
  },
);

interface CategoriesStateInterface {
  authors: authorInterface[],
  categories: categoriesInterface[],
  book: bookInterface | undefined,
}

const initialState: CategoriesStateInterface = {
  authors: [],
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
    builder.addCase(asyncLoadCategories.fulfilled, (
      state,
      action,
    ) => ({ ...state, categories: action.payload }));
    builder.addCase(asyncDeleteCategory.fulfilled, (state, action) => {
      const categoriesArray = action.payload
        ? state.categories.filter((obj) => obj.id !== action.payload) : state.categories;
      return { ...state, categories: categoriesArray };
    });
    builder.addCase(asyncCreateCategory.fulfilled, (state, action) => {
      const categoriesArray = action.payload
        ? [...state.categories, action.payload] : state.categories;
      return { ...state, categories: categoriesArray };
    });
    builder.addCase(asyncLoadAuthors.fulfilled, (
      state,
      action,
    ) => ({ ...state, authors: action.payload }));
    builder.addCase(asyncDeleteAuthor.fulfilled, (state, action) => {
      const authorsArray = action.payload
        ? state.authors.filter((obj) => obj.id !== action.payload) : state.authors;
      return { ...state, authors: authorsArray };
    });
    builder.addCase(asyncCreateAuthor.fulfilled, (state, action) => {
      const authorsArray = action.payload ? [...state.authors, action.payload] : state.authors;
      return { ...state, authors: authorsArray };
    });
    builder.addCase(asyncLoadBookInfo.fulfilled, (
      state,
      action,
    ) => ({ ...state, book: action.payload }));
  },
});

export const { saveCategories } = contentSlice.actions;

export const getAllCategories = (state: RootState) => state.content.categories;

export default contentSlice.reducer;
