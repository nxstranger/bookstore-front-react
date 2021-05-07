import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../axios/config';
import { cartInterface, orderInterface } from '../interfaces/modelInterfaces';

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
    console.log(result);
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
    return result.status === 200 ? { bookId, count } : null;
  },
);

export const asyncMakeOrder = createAsyncThunk(
  'cart/asyncMakeOrder',
  async (jwt: string) => {
    const result = await axios.post('/order',
      {},
      {
        headers: {
          Authorization: jwt,
        },
      });
    return result.status === 201;
  },
);

export const asyncLoadOrders = createAsyncThunk(
  'cart/asyncLoadOrders',
  async (jwt: string) => {
    const result = await axios.get('/order',
      {
        headers: {
          Authorization: jwt,
        },
      });
    return result.status === 200 ? result.data : [];
  },
);

interface CartSliceInterface {
  cart: cartInterface[]
  orders: orderInterface[],
}

const initialState: CartSliceInterface = {
  cart: [],
  orders: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(asyncMakeOrder.fulfilled, (
      state,
      action,
    ) => (action.payload ? { ...state, cart: [] } : { ...state }));
    builder.addCase(asyncLoadOrders.fulfilled, (
      state,
      action,
    ) => ({ ...state, orders: action.payload }));
    builder.addCase(asyncLoadCart.fulfilled, (state, action) => {
      const data = action.payload;
      data.sort((obj1, obj2) => obj1.bookId - obj2.bookId);
      return { ...state, cart: data };
    });
    builder.addCase(asyncDeleteCartPosition.fulfilled, (state, action) => {
      const data = action.payload
        ? state.cart.filter((obj) => obj.Book.id !== action.payload) : state.cart;
      data.sort((obj1, obj2) => obj1.bookId - obj2.bookId);
      return { ...state, cart: data };
    });
    builder.addCase(asyncUpdateCartCount.fulfilled, (state, action) => {
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
