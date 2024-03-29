import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorsReducers(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
