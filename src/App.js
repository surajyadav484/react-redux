import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutPage from "./Comoponet/about/About.jsx";
import Header from "./Comoponet/common/Header.jsx";
import CoursePage from "./Comoponet/courses/CoursesPage.jsx";
import ManageCourse from "./Comoponet/courses/ManageCourse.jsx";
import HomePage from "./Comoponet/home/HomePage.jsx";
import PageNotFound from "./Comoponet/PageNotFound.jsx";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Route path="/course/:slug" component={ManageCourse} />
        <Route path="/course" component={ManageCourse} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
