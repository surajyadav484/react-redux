import { combineReducers } from "redux";

import courses from "./courseReducers.js";

const rootReducer = combineReducers({
  courses, //short hand property used otherwise we can use {courses:courses}
});

export default rootReducer;
