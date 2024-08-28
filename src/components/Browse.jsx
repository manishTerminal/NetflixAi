import React from "react";
import Header from "./Header";
import MovieContainer from "./MovieContainer";
import MovieListContainer from "./MovieListContainer";

function Browse() {
  return (
    <div className="h-screen w-full">
      <Header />
      <MovieContainer />
      <MovieListContainer />
    </div>
  );
}

export default Browse;
