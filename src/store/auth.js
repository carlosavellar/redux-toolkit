import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticate: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    authLogin(state) {
      state.isAuthenticate = true;
    },
    authLogout(state) {
      state.isAuthenticate = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
