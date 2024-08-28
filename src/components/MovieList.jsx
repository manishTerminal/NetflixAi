import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  if (movie == null) return;

  return (
    <div className="ml-8 my-4">
      <h2 className="font-semiboldbold text-xl">{title}</h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movie.map((item) => (
            <MovieCard key={item.id} posterpath={item?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
