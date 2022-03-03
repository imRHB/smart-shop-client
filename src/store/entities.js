import { combineReducers } from "redux";
import employeeReducer from "./employee";
import designationReducer from "./designation";
import supplierReducer from "./supplier";

export default combineReducers({
  employee: employeeReducer,
  designation: designationReducer,
  supplier: supplierReducer,
});
