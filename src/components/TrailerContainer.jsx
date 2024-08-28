import React, { useEffect, useState } from "react";
import { options } from "../utils/Constants";

const TrailerContainer = ({ id }) => {
  const [trailer, setTrailer] = useState(null);
  const getTrailerData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      options
    );

    const json = await data.json();
  
    const trailer = json.results.filter(
      (item) => item.name == "Official Trailer"
    );
    setTrailer(trailer[0].key);
  };

  useEffect(() => {
    getTrailerData();
  }, []);

 

  return (
    
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    
  );
};

export default TrailerContainer;
