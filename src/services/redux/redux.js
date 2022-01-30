import { ReactDOM } from "react-dom";
import { createStore } from "redux";
import defaultStore from "../../store";

// action = { type: "", payload: "" };

const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, moviesFromApi: state.moviesFromApi + action.payload };

    default:
      state;
  }
};

const store = createStore(reducer);

export default store;
