import { MOVIES, FILTERS } from "../actions/index";
import { performMovies } from "../utils/api/movies";
import { getLoadingState, getReadyState } from "../utils/store";

export const initialStore = {
  movies: {},
  filteredMovies: {},
};

export const movies = (state = initialStore, action) => {
  switch (action.type) {
    case MOVIES.GET_START:
      return {
        ...state,
        movies: getLoadingState(state.movies),
        filtersMovies: getLoadingState(state.movies),
      };

    case MOVIES.GET_SUCCESS:
      return {
        ...state,
        movies: getReadyState(action.data),
        filtersMovies: getReadyState(performMovies(action.data)),
      };
    case FILTERS.IMB:
      console.log(action.data, "приходит в редьюсер");
      return {
        ...state,
        movies: getReadyState(state.movies),
        filtersMovies: getReadyState(performMovies(action.data)),
      };

    case FILTERS.ALL:
      return {
        ...state,
        movies: getReadyState(state.movies),
        filtersMovies: getReadyState(performMovies(action.data)),
      };

    default:
      return state;
  }
};
