import React from "react";
import { render } from "react-dom";
import App from "./App.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
