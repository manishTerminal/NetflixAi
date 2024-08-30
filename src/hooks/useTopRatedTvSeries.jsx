import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/Constants";
import { addTopRatedTvSeries } from "../redux/movieSlice";

const useTopRatedTvSeries = () => {
  const dispatch = useDispatch();
  try {
    const getTopRatedTv = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        options
      );
      if (!data.ok) {
        throw new Error("Failed to fetch top rated tv series");
      }
      const json = await data.json();
      dispatch(addTopRatedTvSeries(json.results));
    };
    useEffect(() => {
      getTopRatedTv();
    }, []);
  } catch (error) {
    console.log("failed to fetch top rated tv series", error);
  }
};

export default useTopRatedTvSeries;
