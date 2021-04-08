import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { bookInterfaceAdmin, bookUpdateDataInterface } from '../interfaces/bookInterface';
import axios from '../axios/config';

export const asyncLoadBookById = createAsyncThunk(
  'adminPanel/asyncLoadBookById',
  async (id:string) => {
    const resp = await axios.get(`book/id/${id}`);
    return (resp.status === 200) ? resp.data : undefined;
  },
);

interface adminPanelInterface {
  book: bookInterfaceAdmin | undefined,
}

const initialState: adminPanelInterface = {
  book: undefined,
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
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoadBookById.fulfilled, (state, action) => {
      console.log('asyncLoadBook tick');
      return { ...state, book: action.payload };
    });
  },
});

export const {
  editableBook,
  setBookCategory,
  setBookAuthor,
  setBookInfo,
} = adminPanelSlice.actions;

export const selectAdminPanel = (state: RootState) => state.adminPanel;

export default adminPanelSlice.reducer;
