import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfoInterface } from '../interfaces/userInfoInterface';
import axios from '../axios/config';

export const asyncLoadUserInfo = createAsyncThunk(
  'auth/asyncLoadUserInfo',
  async (token: string) => {
    const resp = await axios.get(
      'auth/token/user-info',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return (resp.status === 200) ? resp.data : undefined;
  },
);

interface authState {
  authJwt: string,
  user: userInfoInterface | undefined,
}

const initialState: authState = {
  authJwt: '',
  user: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setJwt: (state, action: PayloadAction<string>) => ({
      ...state,
      authJwt: action.payload,
    }),
    cleanUserInfo: (state) => ({
      ...state,
      user: undefined,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoadUserInfo.fulfilled, (state, action) => {
      console.log('asyncLoadUserInfo tick');
      return { ...state, user: action.payload };
    });
  },
});

export const { setJwt, cleanUserInfo } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.authJwt;

export default authSlice.reducer;
