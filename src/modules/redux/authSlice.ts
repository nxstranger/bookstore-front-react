import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface authState {
  isAuth: boolean,
}

const initialState: authState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isAuth: action.payload,
    }),
  },
});

export const { setIsAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
