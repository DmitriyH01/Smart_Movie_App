import { FILTERS } from "../actions/index";
import { getLoadingState, getReadyState } from "../utils/store";
// import { movies } from "./movies";
import { initialStore } from "./movies";
import { performMovies } from "../utils/api/movies";

// const initialStore = {
//   filteredMovies: {},
// };

export const filters = (state = initialStore.filteredMovies, action) => {
  switch (action.type) {
    case FILTERS.SAVE_MOVIES:
      return {
        ...state,
        // filteredMovies: getReadyState(state.movies),
        filteredMovies: getReadyState(performMovies(action.data)),
      };
    default:
      return state;
  }
};

// const performSortMovies = (data) => {};
