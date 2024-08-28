import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ title }) => {
  const selector = useSelector((store) => store.movie);
  console.log(selector.nowPlayingMovie);

  if (selector.nowPlayingMovie == null) return;

  return (
    <div className="ml-8 my-4">
      <h2 className="font-semiboldbold text-xl">{title}</h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {selector?.nowPlayingMovie.map((movie) => (
            <MovieCard key={movie.id} posterpath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
