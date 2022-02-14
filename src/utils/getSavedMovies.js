import { useSelector } from "react-redux";

export const getSavedMovies = () => {
  const { movies } = useSelector((state) => state.moviesReducer);
  console.log(movies);
  return movies;
};
