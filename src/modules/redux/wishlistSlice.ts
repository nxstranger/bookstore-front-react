import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const checkWishlist = (array: any[]) => {
  if (!array.length) return true;
  if (array.length > 10) return false;
  let rez = true;
  array.forEach((obj: any) => {
    if (!(obj && (typeof obj === 'number') && obj % 1 === 0)) rez = false;
  });
  return rez;
};

export const asyncLoadWishlist = createAsyncThunk(
  'wishlist/asyncLoadWishlist',
  async () => {
    const localWishlist = await localStorage.getItem('Wishlist');
    if (localWishlist) {
      try {
        const parsedWishlist = JSON.parse(localWishlist);
        if (parsedWishlist
          && Array.isArray(parsedWishlist) && checkWishlist(parsedWishlist)) return parsedWishlist;
      } catch (err) {
        localStorage.setItem('Wishlist', '[]');
        return [];
      }
    }
    return [];
  },
);

interface wishlistState {
  wishedBooks: number[],
}

const initialState: wishlistState = {
  wishedBooks: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWishedBook: (state, action: PayloadAction<number>) => {
      if (action.payload && !state.wishedBooks.includes(+action.payload)) {
        const wishlistArr = [...state.wishedBooks];
        wishlistArr.push(+action.payload);
        return { ...state, wishedBooks: wishlistArr };
      }
      return { ...state };
    },
    removeWishedBook: (state, action: PayloadAction<number>) => ({
      ...state,
      wishedBooks: state.wishedBooks.filter((bookId) => bookId !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoadWishlist.fulfilled, (
      state,
      action,
    ) => ({ ...state, wishedBooks: action.payload }));
  },
});

export const { addWishedBook, removeWishedBook } = wishlistSlice.actions;

export default wishlistSlice.reducer;
