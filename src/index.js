import "./App.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./services/redux";
import "./index.css";
import Movies from "./containers/Movies";
import HeaderContainer from "./containers/HeaderContainer";

ReactDOM.render(
  <Provider store={store}>
    <Movies />
    {/* <HeaderContainer /> */}
  </Provider>,
  document.getElementById("root")
);
