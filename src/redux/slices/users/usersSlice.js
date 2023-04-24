import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  author: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateAuthor: (state, action) => {
      state.author = action.payload;
    },
    clearUser: (state) => {
      state.user = {};
    },
  },
});

export const { updateAuthor, updateUser, clearUser } = usersSlice.actions;
