import FiltersWrapper from "../../components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../utils/store";

const FiltersContainer = () => {
  const dispatch = useDispatch();
  const { filtersMovies } = useSelector((state) => state.moviesReducer);
  const posters = getData(filtersMovies, []);

  return <FiltersWrapper posters={posters} dispatch={dispatch} />;
};

export default FiltersContainer;
