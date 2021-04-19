import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categoriesInterface } from '../interfaces/categoriesInterface';
import axios from '../axios/config';
import { RootState } from './store';
import { bookInterface } from '../interfaces/bookInterface';
import { authorInterface } from '../interfaces/authorInterface';

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
    const resp = await axios.post('/category',
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

// export const asyncDeleteAuthor = createAsyncThunk<
//   authorInterface[],
//   someObj,
//   { state: RootState }
//   >('content/asyncDeleteAuthor', async ({ token, bookId }, thunkAPI) => {
//     const resp = await axios.delete(`/author/${bookId}`,
//       {
//         headers: {
//           Authorization: token,
//         },
//       });
//     console.log(resp.status);
//     const { authors } = thunkAPI.getState().content;
//     const filtered :authorInterface[] = authors.filter(
//       (obj : authorInterface) => {
//         console.log(typeof (obj.id));
//         console.log(typeof bookId);
//         console.log((+obj.id) !== bookId);
//         return (+obj.id) !== bookId;
//       },
//     );
//     console.log('authors AT');
//     console.log(authors);
//     console.log('filtered');
//     console.log(filtered);
//     return (resp.status === 204) ? filtered : authors;
//   });

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
    builder.addCase(asyncLoadCategories.fulfilled, (state, action) => {
      console.log('asyncLoadCat tick');
      return { ...state, categories: action.payload };
    });
    builder.addCase(asyncDeleteCategory.fulfilled, (state, action) => {
      console.log('asyncDeleteCategory tick');
      const categoriesArray = action.payload
        ? state.categories.filter((obj) => obj.id !== action.payload) : state.categories;
      return { ...state, categories: categoriesArray };
    });
    builder.addCase(asyncCreateCategory.fulfilled, (state, action) => {
      console.log('asyncCreateCategory tick');
      const categoriesArray = action.payload
        ? [...state.categories, action.payload] : state.categories;
      return { ...state, categories: categoriesArray };
    });
    builder.addCase(asyncLoadAuthors.fulfilled, (state, action) => {
      console.log('asyncLoadAuthors tick');
      return { ...state, authors: action.payload };
    });
    builder.addCase(asyncDeleteAuthor.fulfilled, (state, action) => {
      console.log('asyncDeleteAuthor tick');
      const authorsArray = action.payload
        ? state.authors.filter((obj) => obj.id !== action.payload) : state.authors;
      return { ...state, authors: authorsArray };
    });
    builder.addCase(asyncCreateAuthor.fulfilled, (state, action) => {
      console.log('asyncCreateAuthor tick');
      const authorsArray = action.payload ? [...state.authors, action.payload] : state.authors;
      return { ...state, authors: authorsArray };
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
