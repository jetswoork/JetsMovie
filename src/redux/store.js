import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { modalSlice } from "./slices/modal/modalSlice";
import { moviesSlice } from "./slices/movies/moviesSlice";
import { usersSlice } from "./slices/users/usersSlice";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
    users: usersSlice.reducer,
    movies: moviesSlice.reducer,
  },
});
