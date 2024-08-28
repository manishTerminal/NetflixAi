import { useDispatch } from "react-redux";
import { options } from "../utils/Constants";
import { addMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
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
};
export default useNowPlayingMovie;
