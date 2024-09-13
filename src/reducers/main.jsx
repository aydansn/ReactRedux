import { combineReducers } from "redux";
import counterReducer from "./counterReducer"; //STATE
import isLoggedReducer from "./isLoggedReducer";
const allReducers = combineReducers({
  counterState: counterReducer,
  isLoggedState: isLoggedReducer,
});
export default allReducers;
