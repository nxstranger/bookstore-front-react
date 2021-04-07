import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface authState {
  isAuth: boolean,
  authJwt: string,
}

const initialState: authState = {
  isAuth: false,
  authJwt: '',
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
