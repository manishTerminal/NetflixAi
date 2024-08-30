import { useDispatch } from "react-redux";
import { options } from "../utils/Constants";
import { addMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  try {
    const nowPlayingData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        options
      );
      if (!data.ok) {
        throw new Error("Failed to fetch now playing movie");
      }
      const json = await data.json();
      dispatch(addMovie(json.results));
    };

    useEffect(() => {
      nowPlayingData();
    }, []);
  } catch (error) {
    console.log("failed to fetch now playing movie", error);
  }
};
export default useNowPlayingMovie;
