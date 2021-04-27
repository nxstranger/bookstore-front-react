import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { roleInterface, userInfoInterface } from '../interfaces/modelInterfaces';
import axios from '../axios/config';

export const asyncLoadUserInfo = createAsyncThunk(
  'content/asyncLoadUserInfo', async (token: string) => {
    const resp = await axios.get(
      'auth/token/user-info',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    if (resp.status === 200) {
      return resp.data;
    }
    return undefined;
  },
);

export const asyncLoadUserRole = createAsyncThunk(
  'content/asyncLoadUserRole', async (token: string) => {
    const resp = await axios.get(
      'auth/token/user-role',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    if (resp.status === 200) {
      return resp.data;
    }
    return undefined;
  },
);

interface updateUserInterface {
  values: userInfoInterface,
  token: string,
}

export const asyncUpdateUserInfo = createAsyncThunk(
  'auth/asyncUpdateUserInfo',
  async ({ values, token } : updateUserInterface) => {
    const updateData = {
      name: values.name,
      email: values.email,
      dateOfBirthday: values.dateOfBirthday,
    };
    const resp = await axios.put(
      `users/${values.id}`,
      updateData,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    if (resp.status === 200) {
      return values;
    }
    return undefined;
  },
);

interface authState {
  authJwt: string,
  user?: userInfoInterface,
  role?: roleInterface
}

const initialState: authState = {
  authJwt: '',
  user: undefined,
  role: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setJwt: (state, action: PayloadAction<string>) => ({
      ...state,
      authJwt: action.payload,
    }),
    // cleanUserInfo: (state) => ({
    //   ...state,
    //   user: undefined,
    //   role: undefined,
    // }),
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoadUserInfo.fulfilled, (state, action) => {
      console.log('asyncLoadUserInfo fulfilled tick');
      return action.payload ? { ...state, user: action.payload } : { ...state, authJwt: '' };
    });
    builder.addCase(asyncLoadUserInfo.rejected, (state) => {
      console.log('asyncLoadUserInfo rejected tick');
      localStorage.removeItem('RefreshToken');
      localStorage.removeItem('AccessToken');
      return { ...state, authJwt: '' };
    });
    builder.addCase(asyncUpdateUserInfo.fulfilled, (state, action) => {
      console.log('asyncLoadUserInfo tick');
      return { ...state, user: action.payload };
    });
    builder.addCase(asyncLoadUserRole.fulfilled, (state, action) => {
      console.log('asyncLoadUserRole tick');
      return { ...state, role: action.payload };
    });
  },
});

export const { setJwt } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.authJwt;

export default authSlice.reducer;
