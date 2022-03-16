import React from "react";
import { Route } from "react-router-dom";
import AboutPage from "./Comoponet/about/About.jsx";
import HomePage from "./Comoponet/home/HomePage.jsx";

function App() {
  return (
    <div className="container-fluid">
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
