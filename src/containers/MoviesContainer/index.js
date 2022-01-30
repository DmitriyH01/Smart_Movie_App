import { MainURL, ApiKey, PopularMovies } from "../../constant/URLs";
import connectToApi from "../../connection/connectApi";
import { useDispatch, useSelector } from "react-redux";

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesFromApi);
  console.log(movies);
  return <ul>{movies}</ul>;
};

export default MoviesContainer;
