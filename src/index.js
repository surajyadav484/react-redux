import React from "react";
import { render } from "react-dom";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
