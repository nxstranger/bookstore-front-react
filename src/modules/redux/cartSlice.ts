import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../axios/config';
import { cartInterface } from '../interfaces/modelInterfaces';

interface cartThunkInterface{
  jwt: string,
  bookId: number,
  count?: number
}

export const asyncCreateCartPosition = createAsyncThunk('cart/asyncCreateCartPosition',
  async ({ jwt, bookId }: cartThunkInterface) => {
    const result = await axios.post(
      '/cart/', { bookId },
      {
        headers: {
          Authorization: jwt,
        },
      },
    );
    console.log(bookId, result.status);
  });

export const asyncLoadCart = createAsyncThunk <
  cartInterface[],
  string
  >('cart/asyncLoadCart', async (jwt: string) => {
    const result = await axios.get(
      '/cart/',
      {
        headers: {
          Authorization: jwt,
        },
      },
    );
    console.log(result.status);
    return result.status === 200 ? result.data : [];
  });

export const asyncDeleteCartPosition = createAsyncThunk(
  'cart/asyncDeleteCartPosition',
  async ({ jwt, bookId }: cartThunkInterface) => {
    const result = await axios.delete('/cart',
      {
        headers: {
          Authorization: jwt,
        },
        data: { bookId },
      });
    console.log(result.status);
    return result.status === 204 ? +bookId : null;
  },
);

export const asyncUpdateCartCount = createAsyncThunk(
  'cart/asyncUpdateCartCount',
  async ({ jwt, bookId, count }: cartThunkInterface) => {
    if ((!count) || !Number.isInteger(count) || +count < 1 || +count > 5) {
      return null;
    }
    const result = await axios.put(
      'cart/',
      {
        bookId,
        count,
      },
      {
        headers: {
          Authorization: jwt,
        },
      },
    );
    console.log(result.status);
    return result.status === 200 ? { bookId, count } : null;
  },
);

interface CartSliceInterface {
  cart: cartInterface[]
}

const initialState: CartSliceInterface = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // saveCategories: (state, action: PayloadAction<categoriesInterface[]>) => {
    //   action.payload.map((obj) => state.categories.push(obj));
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoadCart.fulfilled, (state, action) => {
      console.log('asyncLoadCart tick');
      const data = action.payload;
      data.sort((obj1, obj2) => obj1.bookId - obj2.bookId);
      return { ...state, cart: data };
    });
    builder.addCase(asyncDeleteCartPosition.fulfilled, (state, action) => {
      console.log('asyncDeleteCartPosition tick');
      const data = action.payload
        ? state.cart.filter((obj) => obj.Book.id !== action.payload) : state.cart;
      data.sort((obj1, obj2) => obj1.bookId - obj2.bookId);
      return { ...state, cart: data };
    });
    builder.addCase(asyncUpdateCartCount.fulfilled, (state, action) => {
      console.log('asyncUpdateCartCount tick');
      const data = (action.payload && action.payload.bookId && action.payload.count)
        // @ts-ignore
        ? state.cart.map((obj) => ((obj.Book.id === +action.payload?.bookId)
          // @ts-ignore
          ? { ...obj, count: +action.payload?.count } : obj))
        : state.cart;
      data.sort((obj1, obj2) => obj1.bookId - obj2.bookId);
      return { ...state, cart: data };
    });
  },
});

export default cartSlice.reducer;
