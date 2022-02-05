import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import defaultStore from "../../store";
import thunk from "redux-thunk";
import convertGetMoviesFromApi from "../../utils/convertGetMovies";

const GET_MOVIES = "GET_MOVIES";

const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesFromApi: [convertGetMoviesFromApi(action.payload)], // without state.moviesFromApi because don't need null.
      };

    default:
      return state;
  }
};

export const getMoviesFromApi = (payload) => ({ type: GET_MOVIES, payload });

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
