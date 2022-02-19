import "./App.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./services/redux";
import "./index.css";
import Movies from "./containers/Movies";
import Filters from "./containers/Filters";

ReactDOM.render(
  <Provider store={store}>
    <Filters />
    <Movies />
  </Provider>,
  document.getElementById("root")
);
