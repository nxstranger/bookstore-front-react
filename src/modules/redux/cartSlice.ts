import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../axios/config';

export const asyncCreateOrderPosition = createAsyncThunk(
  'cart/asyncCreateOrderPosition',
  async (bookId) => {
    const result = await axios.get('book');
    console.log(bookId, result.status);
    return [];
  },
);

export const asyncDeleteOrderPosition = createAsyncThunk(
  'cart/asyncDeleteOrderPosition',
  async (bookId) => {
    const result = await axios.post('', bookId);
    console.log(result.status);
    return [];
  },
);

export const asyncIncreaseCountOrderPosition = createAsyncThunk(
  'cart/asyncIncreaseCountOrderPosition',
  async (bookId) => {
    const result = await axios.post('', bookId);
    console.log(result.status);
    return [];
  },
);

export const asyncDecreaseCountOrderPosition = createAsyncThunk(
  'cart/asyncDecreaseCountOrderPosition',
  async (bookId) => {
    const result = await axios.post('', bookId);
    console.log(result.status);
    return [];
  },
);

interface CartInterface {
  bookId: number,
  count: number,
}

interface CartSliceInterface {
  cart: CartInterface[]
}

const initialState: CartSliceInterface = {
  cart: [],
};

export const contentSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // saveCategories: (state, action: PayloadAction<categoriesInterface[]>) => {
    //   action.payload.map((obj) => state.categories.push(obj));
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncCreateOrderPosition.fulfilled, (state, action) => {
      console.log('asyncLoadCat tick');
      const data = action.payload;
      return { ...state, cart: data };
    });
  },
});

export default contentSlice.reducer;
