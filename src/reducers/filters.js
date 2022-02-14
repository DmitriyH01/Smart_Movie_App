import { FILTERS } from "../actions/index";
import { getReadyState } from "../utils/store";
import { initialStore } from "./movies";

export const filters = (state = initialStore.filteredMovies, action) => {
  switch (action.type) {
    case FILTERS.SAVE_MOVIES:
      return {
        ...state,
        filteredMovies: getReadyState(action.data),
      };
    default:
      return state;
  }
};
