import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.errorMessage = undefined;
    },
    onLogin: (state) => {
      state.status = "authenticated";
      state.errorMessage = undefined;
    },
    onLogout: (state, payload) => {
      state.status = "not-authenticated";
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
