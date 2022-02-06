import { MOVIES } from '.';
import { MainURL, ApiKey, PopularMovies } from '../constant/urls';

const getMoviesStart = () => ({
  type: MOVIES.GET_START,
});

const getMoviesSuccess = (data) => ({
  type: MOVIES.GET_SUCCESS,
  data,
});

export const getMovies = () => (dispatch) => {
  dispatch(getMoviesStart());

  const url = `${MainURL}${PopularMovies}${ApiKey}`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then(({ results }) => {
      dispatch(getMoviesSuccess(results));
    })
    .catch((err) => {
      console.error(err.message);
    });
};
