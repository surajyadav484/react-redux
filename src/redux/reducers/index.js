import { combineReducers } from "redux";

import courses from "./courseReducers.js";
import authors from "./authorsReducers.js";

const rootReducer = combineReducers({
  courses, //short hand property used otherwise we can use {courses:courses}
  authors,
});

export default rootReducer;
