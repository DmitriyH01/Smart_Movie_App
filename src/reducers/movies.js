import { MOVIES } from '../actions/index';
import { performMovies } from '../utils/api/movies';
import { getLoadingState, getReadyState } from '../utils/store';

const initialStore = {
  movies: {},
};

const movies = (state = initialStore, action) => {
  switch (action.type) {
    case MOVIES.GET_START:
      return {
        ...state,
        movies: getLoadingState(state.movies),
      };

    case MOVIES.GET_SUCCESS:
      return {
        ...state,
        movies: getReadyState(performMovies(action.data)),
      };

    default:
      return state;
  }
};

export default movies;
