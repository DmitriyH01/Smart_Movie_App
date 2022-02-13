import { FILTERS } from ".";

const saveMovies = (data) => ({
  type: FILTERS.SAVE_MOVIES,
  data,
});

// export const saveMoviesForSort = (dispatch) => {
//   dispatch(saveMovies());
// };
