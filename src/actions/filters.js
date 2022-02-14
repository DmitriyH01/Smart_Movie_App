import { FILTERS } from ".";
import { getSavedMovies } from "../utils/getSavedMovies";

const saveMovies = (data) => ({
  type: FILTERS.SAVE_MOVIES,
  data,
});

export const saveMoviesForSort = () => {
  dispatch(getSavedMovies());
};
