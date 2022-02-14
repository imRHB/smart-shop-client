import React from "react";
import { Route, Routes } from "react-router-dom";
import AddSupplier from "../AddSupplier/AddSupplier";
import CreateProduct from "../CreateProduct/CreateProduct";
import CustomerManagement from "../CustomerManagement/CustomerManagement";
import CustomerStatus from "../CustomerManagement/CustomerStatus/CustomerStatus";
import ExpenseItem from "../Expense/ExpenseItem";
import AddEmployee from "../HRM/AddEmployee/AddEmployee";
import EmployeeManagement from "../HRM/EmployeeManagement/EmployeeManagement";
import ManageProducts from "../ManageProducts/ManageProducts";
import ManageSupplier from "../ManageSupplier/ManageSupplier";
import ProductStock from "../ProductStock/ProductStock";
import StockManagements from "../StockManagement/StockManagements";
import SupplierStock from "../SupplierStock/SupplierStock";
//==============import your component here====================//
// import TestComponent from "../TestComponent/TestComponent";
import TestComponent from "../TestComponent/TestComponent";
//==============import your component here===================//

const NestedRoutes = () => {
  return (
    <>
      {/* Admin Routes */}
      <Routes>
        <Route path="add-product" element={<CreateProduct />}></Route>
        <Route path="manage-product" element={<ManageProducts />}></Route>
        <Route path="manage-customer" element={<CustomerManagement />}></Route>
        <Route path="credit-customer" element={<CustomerStatus />}></Route>
        <Route path="add-supplier" element={<AddSupplier />}></Route>
        <Route path="manage-supplier" element={<ManageSupplier />}></Route>
        <Route path="stock-report" element={<StockManagements />}></Route>
        <Route path="supplier-stock-report" element={<SupplierStock />}></Route>
        <Route path="product-stock-report" element={<ProductStock />}></Route>
        <Route path="add-employee" element={<AddEmployee />}></Route>
        <Route path="manage-employee" element={<EmployeeManagement />}></Route>
        <Route path="expense-item" element={<ExpenseItem />}></Route>

        {/*===================TEST YOUR COMPONENT HERE=====================*/}
        {/* <Route path="expense-item" element={<TestComponent />}></Route> */}
        <Route path="test-component" element={<TestComponent />}></Route>
        {/*===================TEST YOUR COMPONENT HERE====================*/}
      </Routes>
    </>
  );
};

export default NestedRoutes;
