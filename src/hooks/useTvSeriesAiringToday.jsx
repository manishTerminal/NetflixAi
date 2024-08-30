import { useEffect } from "react";
import { options } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addtvSeriesAiringToday } from "../redux/movieSlice";

const useTvSeriesAiringToday = () => {
  const dispatch = useDispatch();
  try {
    const tvSeriesData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        options
      );
      if (!data.ok) {
        throw new Error("Failed to fetch tv series airing today");
      }
      const json = await data.json();
      dispatch(addtvSeriesAiringToday(json.results));
    };
    useEffect(() => {
      tvSeriesData();
    }, []);
  } catch (error) {
    console.log("failed to fetch tv series airing today", error);
  }
};

export default useTvSeriesAiringToday;
