import { combineReducers } from "redux";
import employeeReducer from "./employee";

export default combineReducers({
  employee: employeeReducer,
});
