import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
  popularTv: [],
  popularMovies: [],
  upcoming: [],
  mostValued: [],
  trends: [],
  moviesFound: [],
  video: [],
  similar: [],
  more: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    listPopularTv: (state, action) => {
      state.popularTv = action.payload;
    },
    listPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    listUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    listMostValued: (state, action) => {
      state.mostValued = action.payload;
    },
    movieId: (state, action) => {
      state.movie = action.payload;
    },
    listTrends: (state, action) => {
      state.trends = action.payload;
    },
    updateMovie: (state, action) => {
      state.moviesFound = action.payload;
    },
    updateVideo: (state, action) => {
      state.video = action.payload;
    },
    listSimilar: (state, action) => {
      state.similar = action.payload;
    },
    listMore: (state, action) => {
      state.more = action.payload;
    },
  },
});

export const {
  listMore,
  listMostValued,
  listPopularMovies,
  listPopularTv,
  listTrends,
  listUpcoming,
  listSimilar,
  movieId,
  updateMovie,
  updateVideo,
} = moviesSlice.actions;
