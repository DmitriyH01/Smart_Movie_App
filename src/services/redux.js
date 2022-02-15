import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { moviesReducer } from "../reducers";

const mainReducer = combineReducers({
  moviesReducer,
  // filtersReducer,
});

export const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
