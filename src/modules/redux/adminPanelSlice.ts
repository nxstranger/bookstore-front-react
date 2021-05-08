import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { imagesInterface, bookInterfaceAdmin, bookUpdateDataInterface } from '../interfaces/modelInterfaces';
import axios from '../axios/config';

export const asyncLoadBookById = createAsyncThunk(
  'adminPanel/asyncLoadBookById',
  async (id:string) => {
    const resp = await axios.get(`book/id/${id}`);
    return (resp.status === 200) ? resp.data : undefined;
  },
);

export const asyncDeleteUnpublishedBookById = createAsyncThunk(
  'adminPanel/asyncDeleteUnpublishedBookById',
  async ({ id, token }: { id: string, token: string }) => {
    const resp = await axios.delete(`book/id/${id}`,
      {
        headers: {
          Authorization: token,
        },
      });
    return (resp.status === 200) ? +id : undefined;
  },
);

export const asyncLoadImagesBookId = createAsyncThunk(
  'adminPanel/asyncLoadImagesByBookId',
  async (id:number) => {
    const resp = await axios.get(`images/book/${id}`);
    return (resp.status === 200) ? resp.data : undefined;
  },
);

export const asyncLoadUnpublishedBooks = createAsyncThunk(
  'adminPanel/asyncLoadUnpublishedBooks',
  async (token: string) => {
    const resp = await axios.get(
      'book/unpublished',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return (resp.status === 200) ? resp.data : [];
  },
);

interface adminPanelInterface {
  book: bookInterfaceAdmin | undefined,
  images: imagesInterface[];
  unpublishedBooks : bookInterfaceAdmin[];
}

const initialState: adminPanelInterface = {
  book: undefined,
  images: [],
  unpublishedBooks: [],
};

export const adminPanelSlice = createSlice({
  name: 'adminPanel',
  initialState,
  reducers: {
    editableBook: (state, action: PayloadAction<bookInterfaceAdmin>) => (
      { ...state, book: action.payload }),
    setBookCategory: (state, action: PayloadAction<number>) => {
      if (state.book) {
        const book: bookInterfaceAdmin = { ...state.book };
        book.category = action.payload;
        return { ...state, book };
      }
      return { ...state };
    },
    setBookAuthor: (state, action: PayloadAction<number>) => {
      if (state.book) {
        const book: bookInterfaceAdmin = { ...state.book };
        book.author = action.payload;
        return { ...state, book };
      }
      return { ...state };
    },
    setBookInfo: (state, action: PayloadAction<bookUpdateDataInterface>) => {
      if (state.book) {
        const book: bookInterfaceAdmin = { ...state.book };
        return { ...state, book: { ...book, ...action.payload } };
      }
      return { ...state };
    },
    removeImage: (state, action: PayloadAction<number>) => {
      const images : imagesInterface[] = state.images.filter((obj) => obj.id !== action.payload);
      return { ...state, images };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoadBookById.fulfilled, (
      state,
      action,
    ) => ({ ...state, book: action.payload }));
    builder.addCase(asyncLoadImagesBookId.fulfilled, (
      state,
      action,
    ) => ({ ...state, images: action.payload }));
    builder.addCase(asyncLoadUnpublishedBooks.fulfilled, (
      state,
      action,
    ) => ({ ...state, unpublishedBooks: action.payload }));
    builder.addCase(asyncDeleteUnpublishedBookById.fulfilled, (
      state,
      action,
    ) => (action.payload
      ? {
        ...state,
        unpublishedBooks: state.unpublishedBooks.filter((obj) => +obj.id !== action.payload),
      }
      : { ...state }));
  },
});

export const {
  editableBook,
  setBookCategory,
  setBookAuthor,
  setBookInfo,
  removeImage,
} = adminPanelSlice.actions;

export const getBookImages = (state: RootState) => state.adminPanel.images;

export default adminPanelSlice.reducer;
