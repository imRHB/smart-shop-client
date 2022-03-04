import { combineReducers } from "redux";
import employeeReducer from "./employee";
import designationReducer from "./designation";
import supplierReducer from "./supplier";
import customerReducer from "./customer";

export default combineReducers({
  employee: employeeReducer,
  designation: designationReducer,
  supplier: supplierReducer,
  customer: customerReducer,
});
