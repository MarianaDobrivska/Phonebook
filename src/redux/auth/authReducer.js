import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logInUser, logOutUser } from './authOperations';

import { getCurrentUser } from 'service/connectionsAPI';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isLoading: false,
  error: null,
};

const pending = state => {
  state.isLoading = true;
};
const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, pending)
      .addCase(logInUser.pending, pending)
      .addCase(logOutUser.pending, pending)
      .addCase(getCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(registerUser.rejected, rejected)
      .addCase(logInUser.rejected, rejected)
      .addCase(logOutUser.rejected, rejected)
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.isFetchingCurrentUser = false;
        state.error = payload;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      }),
});

export default authSlice.reducer;
