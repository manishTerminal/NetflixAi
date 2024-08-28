import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovie from "../hooks/usePopularMovie";
import useTvSeriesAiringToday from "../hooks/useTvSeriesAiringToday";
import useTopRatedTvSeries from "../hooks/useTopRatedTvSeries";

const MovieListContainer = () => {
  usePopularMovie();
  useTvSeriesAiringToday();
  useTopRatedTvSeries();
  const nowPlaying = useSelector((store) => store.movie?.nowPlayingMovie);
  const popularMovies = useSelector((store) => store.movie?.popularMovie);
  const tvSeries = useSelector((store) => store.movie?.tvSeriesAiringToday);
  const topRatedTvSeries = useSelector(
    (store) => store.movie?.topRatedTvSeries
  );
  return (
    <div className=" text-white -mt-64 relative">
      <MovieList title={"Now Playing Movies"} movie={nowPlaying} />
      <MovieList title={"Tv Series Airing Today"} movie={tvSeries} />
      <MovieList title={"Top Rated Tv Series"} movie={topRatedTvSeries} />
      <MovieList title={"Popular Movies"} movie={popularMovies} />
      <MovieList title={"School Life Movies"} />
    </div>
  );
};

export default MovieListContainer;
