import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovies } from "../../actions/movies";
import { hasData, getData } from "../../utils/store";

import { MoviesPosters, Loader } from "../../components";

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.moviesReducer);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (!hasData(movies)) {
    return <Loader />;
  }

  const data = getData(movies, []);

  return <MoviesPosters posters={data} />;
};

export default MoviesContainer;
