import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    popularMovie: null,
    tvSeriesAiringToday: null,
    topRatedTvSeries: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addtvSeriesAiringToday: (state, action) => {
      state.tvSeriesAiringToday = action.payload;
    },
    addTopRatedTvSeries: (state, action) => {
      state.topRatedTvSeries = action.payload;
    },
  },
});

export const {
  addMovie,
  addPopularMovie,
  addtvSeriesAiringToday,
  addTopRatedTvSeries,
} = movieSlice.actions;
export default movieSlice.reducer;
