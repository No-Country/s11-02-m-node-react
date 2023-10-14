import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
     name: 'auth',
     initialState: {
          isUserAuthenticated: false,
     },
     reducers: {
          login: (state) => {
               state.isUserAuthenticated = true;
          },
          logout: (state) => {
               state.isUserAuthenticated = false;
          },
     },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
