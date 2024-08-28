import React from "react";
import Header from "./Header";
import MovieContainer from "./MovieContainer";
import MovieListContainer from "./MovieListContainer";

function Browse() {
  return (
    <div className="bg-black">
      <Header />
      <MovieContainer />
      <MovieListContainer />
    </div>
  );
}

export default Browse;
