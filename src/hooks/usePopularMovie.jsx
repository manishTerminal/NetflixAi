import { useDispatch } from "react-redux";
import { options } from "../utils/Constants";
import { addPopularMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  try {
    const nowPlayingData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      if (!data.ok) {
        throw new Error("Failed to fetch popular movie");
      }
      const json = await data.json();
      dispatch(addPopularMovie(json.results));
    };

    useEffect(() => {
      nowPlayingData();
    }, []);
  } catch (error) {
    console.log("failed to fetch popular movie", error);
  }
};
export default usePopularMovie;
