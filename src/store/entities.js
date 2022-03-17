import { combineReducers } from "redux";
import employeeReducer from "./employee";
import designationReducer from "./designation";
import supplierReducer from "./supplier";
import customerReducer from "./customer";
import invoiceReducer from "./invoice";
import productReducer from "./products";
import categoryReducer from './category';
import expenseReducer from './expenses';

export default combineReducers({
  employee: employeeReducer,
  designation: designationReducer,
  supplier: supplierReducer,
  customer: customerReducer,
  invoice: invoiceReducer,
  products: productReducer,
  category: categoryReducer,
  expenses: expenseReducer,
});
