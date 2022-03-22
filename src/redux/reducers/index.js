import { combineReducers } from "redux";

import courses from "./courseReducers.js";
import authors from "./authorsReducers.js";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses, //short hand property used otherwise we can use {courses:courses}
  authors,
  apiCallsInProgress,
});

export default rootReducer;
