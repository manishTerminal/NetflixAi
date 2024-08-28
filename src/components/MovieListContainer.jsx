import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieListContainer = () => {
  return (
    <div className=" text-white -mt-64 relative">
      <MovieList title={"Now Playing Movies"}/>
      <MovieList title={"Trending Movies"}/>
      <MovieList title={"Documenteries"}/>
      <MovieList title={"Upcomming Movies"}/>
      <MovieList title={"School Life Movies"}/>
    </div>
  );
};

export default MovieListContainer;
