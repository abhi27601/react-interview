import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reporeducer from "../reducers/repositoriesReducer";

export const store = createStore(
  combineReducers({
    repositories: reporeducer
  }),
  {},
  applyMiddleware(thunk)
);
