import { useDispatch } from "react-redux";
import { options } from "../utils/Constants";
import { addPopularMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const nowPlayingData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    nowPlayingData();
  }, []);
};
export default usePopularMovie;
