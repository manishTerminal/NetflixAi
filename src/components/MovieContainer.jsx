import React from "react";
import TitleContainer from "./TitleContainer";
import TrailerContainer from "./TrailerContainer";
import { useSelector } from "react-redux";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";

const MovieContainer = () => {
  const trailer = useSelector((store) => store.movie.nowPlayingMovie);

  useNowPlayingMovie();

  if (trailer == null) return;

  return (
    <div className="overflow-hidden ">
      <TitleContainer
        title={trailer[13]?.original_title}
        description={trailer[13]?.overview}
      />
      <TrailerContainer id={trailer[13]?.id} />
    </div>
  );
};

export default MovieContainer;
