import React, { useEffect } from "react";
import TitleContainer from "./TitleContainer";
import TrailerContainer from "./TrailerContainer";
import { options } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../redux/movieSlice";

const MovieContainer = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.movie);

  const nowPlayingData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      options
    );

    const json = await data.json();
    dispatch(addMovie(json.results));
  };

  useEffect(() => {
    nowPlayingData();
  }, []);

  if (selector.nowPlayingMovie == null) return;

  return (
    <div className="overflow-hidden ">
      <TitleContainer
        title={selector?.nowPlayingMovie[13]?.original_title}
        description={selector?.nowPlayingMovie[13]?.overview}
      />
      <TrailerContainer id={selector?.nowPlayingMovie[13]?.id} />
    </div>
  );
};

export default MovieContainer;
