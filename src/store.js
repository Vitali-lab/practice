import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
  userReduser,
  usersReduser,
  postReduser,
  postsReduser,
  appReduser,
} from "./redusers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  app: appReduser,
  user: userReduser,
  users: usersReduser,
  post: postReduser,
  posts: postsReduser,
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
