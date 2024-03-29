import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(inialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add suport for Redux dev tools
  return createStore(
    rootReducer,
    inialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) //this middleware will warn us if we try to mutate the state
  );
}
