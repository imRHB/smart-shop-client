import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageTransaction from "../Accounts/ManageTransaction/ManageTransaction";
import Payment from "../Accounts/Payment/Payment";
import AddExpense from "../AddExpense/AddExpense";
import AddSupplier from "../AddSupplier/AddSupplier";
import CreateProduct from "../CreateProduct/CreateProduct";
import CustomerManagement from "../CustomerManagement/CustomerManagement";
import CustomerStatus from "../CustomerManagement/CustomerStatus/CustomerStatus";
import UpdateCustomer from "../CustomerManagement/UpdateCustomer/UpdateCustomer";
import ExpenseItem from "../Expense/ExpenseItem";
import AddEmployee from "../HRM/AddEmployee/AddEmployee";
import Designation from "../HRM/Designation/Designation";
import EmployeeManagement from "../HRM/EmployeeManagement/EmployeeManagement";
import ManageProducts from "../ManageProducts/ManageProducts";
import ManageSupplier from "../ManageSupplier/ManageSupplier";
import AddOfficePerson from "../OfficeLoan/AddOfficePerson/AddOfficePerson";
import ManageOfficeLoan from "../OfficeLoan/ManageOfficeLoan/ManageOfficeLoan";
import AddLoan from "../PersonalLoan/AddLoan/AddLoan";
import AddPerson from "../PersonalLoan/AddPerson/AddPerson";
import ManagePerson from "../PersonalLoan/ManagePerson/ManagePerson";
import ProductStock from "../ProductStock/ProductStock";
import ProductSalesReport from "../Report/ProductSalesReport/ProductSalesReport";
import ProfitReportInvoice from "../Report/ProfitReportInvoice/ProfitReportInvoice";
import PurchaseReport from "../Report/PurchaseReport/PurchaseReport";
import SalesReport from "../Report/SalesReport/SalesReport";
import TodaysReport from "../Report/TodaysReport/TodaysReport";
import AddInvoice from "../Sell/AddInvoice/AddInvoice";
import ManageInvoice from "../Sell/ManageInvoice/ManageInvoice";
import PosInvoice from "../Sell/PosInvoice/PosInvoice";
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
        {/*============ Sell Department All Routes Start ==============*/}
        <Route path="add-new-invoice" element={<AddInvoice />}></Route>
        <Route path="manage-invoice" element={<ManageInvoice />}></Route>
        <Route path="pos" element={<PosInvoice />}></Route>
        {/*============ Sell Department All Routes End ==============*/}

        {/*============ Product Department All Routes Start ==============*/}
        <Route path="add-product" element={<CreateProduct />}></Route>
        <Route path="manage-product" element={<ManageProducts />}></Route>
        {/*============ Product Department All Routes End ==============*/}

        {/*============ Customer Department All Routes Start ==============*/}
        <Route path="add-customer" element={<UpdateCustomer />}></Route>
        <Route path="manage-customer" element={<CustomerManagement />}></Route>
        <Route path="credit-customer" element={<CustomerStatus />}></Route>
        {/*============ Customer Department All Routes End ==============*/}

        {/*============ Supplier Department All Routes Start ==============*/}
        <Route path="add-supplier" element={<AddSupplier />}></Route>
        <Route path="manage-supplier" element={<ManageSupplier />}></Route>
        {/*============ Supplier Department All Routes End ==============*/}

        {/*============ Accounts Department All Routes Start ==============*/}
        <Route path="payment" element={<Payment />}></Route>
        <Route path="manage-transition" element={<ManageTransaction />}></Route>
        {/*============ Accounts Department All Routes End ==============*/}

        {/*============ Stock Department All Routes Start ==============*/}
        <Route path="stock-report" element={<StockManagements />}></Route>
        <Route path="supplier-stock-report" element={<SupplierStock />}></Route>
        <Route path="product-stock-report" element={<ProductStock />}></Route>
        {/*============ Stock Department All Routes End ==============*/}

        {/*============ Report Department All Routes Start ==============*/}
        <Route path="purchase-report" element={<PurchaseReport />}></Route>
        <Route
          path="sales-report-product"
          element={<ProductSalesReport />}
        ></Route>
        <Route
          path="profit-report-invoice"
          element={<ProfitReportInvoice />}
        ></Route>
        <Route path="today-report" element={<TodaysReport />}></Route>
        <Route path="sales-report" element={<SalesReport />}></Route>
        {/*============ Report Department All Routes End ==============*/}

        {/*============ HRM Department All Routes Start ==============*/}
        <Route path="designation" element={<Designation />}></Route>
        <Route path="add-employee" element={<AddEmployee />}></Route>
        <Route path="manage-employee" element={<EmployeeManagement />}></Route>
        {/*============ HRM Department All Routes End ==============*/}

        {/*============ Office Loan Department All Routes Start ==============*/}
        <Route path="add-office-person" element={<AddOfficePerson />}></Route>
        <Route path="manage-office-loan" element={<ManageOfficeLoan />}></Route>
        {/*============ Office Loan Department All Routes End ==============*/}

        {/*============ Expense Department All Routes Start ==============*/}
        <Route path="expense-item" element={<ExpenseItem />}></Route>
        <Route path="add-expense" element={<AddExpense />}></Route>
        {/*============ Expense Department All Routes End ==============*/}

        {/*============ Personal Loan Department All Routes Start ==============*/}
        <Route path="add-person" element={<AddPerson />}></Route>
        <Route path="manage-person" element={<ManagePerson />}></Route>
        <Route path="add-personal-loan" element={<AddLoan />}></Route>
        {/*============ Personal Loan Department All Routes End ==============*/}

        {/*===================TEST YOUR COMPONENT HERE=====================*/}
        {/* <Route path="expense-item" element={<TestComponent />}></Route> */}
        <Route path="test-component" element={<TestComponent />}></Route>
        {/*===================TEST YOUR COMPONENT HERE====================*/}
      </Routes>
    </>
  );
};

export default NestedRoutes;
