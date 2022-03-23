import { combineReducers } from "redux";
import employeeReducer from "./employee";
import designationReducer from "./designation";
import supplierReducer from "./supplier";
import customerReducer from "./customer";
import invoiceReducer from "./invoice";
import productReducer from "./products";
import categoryReducer from './category';
import expenseReducer from './expenses';
<<<<<<< HEAD
import loansReducer from "./loans"
=======
import paymentTransactionReducer from "./paymentTransaction";
import loanReducer from "./loans";

>>>>>>> f9562177e3716ffc97fe6b6ecc42a18af61133ca
export default combineReducers({
  employee: employeeReducer,
  designation: designationReducer,
  supplier: supplierReducer,
  customer: customerReducer,
  invoice: invoiceReducer,
  products: productReducer,
  category: categoryReducer,
  expenses: expenseReducer,
<<<<<<< HEAD
  loans: loansReducer,
=======
  payment: paymentTransactionReducer,
  loans: loanReducer,
>>>>>>> f9562177e3716ffc97fe6b6ecc42a18af61133ca
});
