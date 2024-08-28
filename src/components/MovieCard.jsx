import React from "react";
import { IMAGE_URL } from "../utils/Constants";

const MovieCard = ({ posterpath }) => {
  return (
    <div className="w-36 m-2">
      <img src={IMAGE_URL + posterpath} />
    </div>
  );
};

export default MovieCard;
