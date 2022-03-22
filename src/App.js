import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutPage from "./Comoponet/about/About.jsx";
import Header from "./Comoponet/common/Header.jsx";
import CoursePage from "./Comoponet/courses/CoursesPage.jsx";
import ManageCourse from "./Comoponet/courses/ManageCourse.jsx";
import HomePage from "./Comoponet/home/HomePage.jsx";
import PageNotFound from "./Comoponet/PageNotFound.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
