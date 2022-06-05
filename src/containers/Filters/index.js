import FilterByImb from "../../components/Filters/FiltersByImb";
import FilterByName from "../../components/Filters/FiltersByName";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, setFilteredValues } from "../../utils/store";

const FiltersContainer = () => {
  const dispatch = useDispatch();
  const setFilters = (values, filterType) => {
    dispatch(setFilteredValues(values, filterType));
  };

  const { filtersMovies } = useSelector((state) => state.moviesReducer);
  const posters = getData(filtersMovies, []);

  return (
    <Fragment>
      <FilterByImb posters={posters} setFilters={setFilters} />
      <FilterByName posters={posters} setFilters={setFilters} />
    </Fragment>
  );
};

export default FiltersContainer;
