import * as React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";

import configureStore from "./core/store/configureStore";
import App from "./web/App";

import "./styles.css";

const store = configureStore();
const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
