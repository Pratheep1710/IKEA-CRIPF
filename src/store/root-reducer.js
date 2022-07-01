import { combineReducers } from "redux";


import Reducers from "./Reducers";
export const rootReducer = combineReducers({
  fetchAll : Reducers,
});
