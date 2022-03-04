import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import Swal from "sweetalert2";

let initialState = {
  allCustomer: [],
  customerLoading: false,
  reload: false,
  customerAdded: false,
  customerDeletedSuccess: false,
  editCustomer: {},
  error: "",
  apiResponse: {},
};

const customer = createSlice({
  name: "customer",
  initialState,
  reducers: {
    // State change for successfully customer added
    customerAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.customerAdded = true;
    },
    customerRequested: (state, action) => {
      state.customerLoading = true;
    },
    customerRequestedFailed: (state, action) => {
      state.customerLoading = false;
    },
    customerReceived: (state, action) => {
      state.allCustomer = action.payload;
      state.customerLoading = false;
    },
    addCustomerToDB: (state, action) => {
      state.apiResponse = action.payload;
    },
    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    // Delete a customer
    setDeleteCustomer: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.allCustomer.findIndex(
          (customer) => customer._id === action.payload._id
        );
        state.allCustomer.splice(index, 1);
        state.customerDeletedSuccess = true;
      }
    },
    setEditCustomer: (state, action) => {
      state.editCustomer = state.allCustomer.find(
        (customer) => customer._id === action.payload._id
      );
    },
    setUpdateCustomer: (state, action) => {
      if (action.payload.modifiedCount)
        Swal.fire("Good job!", "Customer Updated Successfully!", "success");
    },
    setReload: (state, action) => {
      state.reload = action.payload.reload;
    },
  },
});

export const {
  customerAddedSuccess,
  customerRequested,
  customerRequestedFailed,
  customerReceived,
  addCustomerToDB,
  setAuthError,
  setDeleteCustomer,
  setEditCustomer,
  setUpdateCustomer,
  setReload,
} = customer.actions;

export default customer.reducer;

// Add new customer to db
export const saveCustomerToDB = (data) =>
  apiCallBegan({
    url: "/customers",
    data,
    method: "post",
    onSuccess: addCustomerToDB.type,
  });

// Load Customers form Database
export const loadCustomers = () =>
  apiCallBegan({
    url: "/customers",
    onStart: customerRequested.type,
    onSuccess: customerReceived.type,
    onFailed: customerRequestedFailed.type,
  });

// Delete customer from db
export const deleteSupplierToDB = (id) =>
  apiCallBegan({
    url: `/customers/${id}`,
    method: "delete",
    onSuccess: setDeleteCustomer.type,
  });

// Update customer to db
export const updateCustomerToDB = (data) =>
  apiCallBegan({
    url: "/customers",
    data,
    method: "put",
    onSuccess: setUpdateCustomer.type,
  });
