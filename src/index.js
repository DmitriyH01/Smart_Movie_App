import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./services/redux";
import "./index.css";
import MainContainer from "./containers/MainContainer";

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById("root")
);
