import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../actions/movies";
import { hasData, getData } from "../../utils/store";
import { MoviesPosters, Loader } from "../../components";

const MoviesContainer = () => {
  const dispatch = useDispatch();
  const { filtersMovies } = useSelector((state) => state.moviesReducer);
  console.log(
    filtersMovies,
    "постеры из стора в кино-контейнере запрос в стате"
  );

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (!hasData(filtersMovies)) {
    return <Loader />;
  }

  const data = getData(filtersMovies, []);
  console.log(data, "постеры из стора в кино-контейнере");

  return <MoviesPosters posters={data} />;
};

export default MoviesContainer;
