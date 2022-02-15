import { MOVIES } from "../actions/index";
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
      };

    case MOVIES.GET_SUCCESS:
      return {
        ...state,
        movies: getReadyState(action.data),
        filtersMovies: getReadyState(performMovies(action.data)),
      };

    default:
      return state;
  }
};
