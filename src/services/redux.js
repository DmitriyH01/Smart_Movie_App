import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { filtersReducer, moviesReducer } from "../reducers";

const mainReducer = combineReducers({
  moviesReducer,
  filtersReducer,
});

export const store = createStore(
  moviesReducer,
  // mainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
