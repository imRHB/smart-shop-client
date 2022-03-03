import { combineReducers } from "redux";
import employeeReducer from "./employee";
import designationReducer from "./designation";

export default combineReducers({
  employee: employeeReducer,
  designation: designationReducer,
});
