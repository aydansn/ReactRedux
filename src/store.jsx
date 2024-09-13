import { legacy_createStore as createStore } from "redux";
import allReducers from "./reducers/main";
export const store = createStore(allReducers);