import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import Swal from "sweetalert2";

const initialState = {
  employeeInfo: [],
  employeeAdded: false,
  loading: false,
  error: "",
  apiResponse: {},
  admin: null,
};

const employee = createSlice({
  name: "employee",
  initialState,
  reducers: {
    // State change for successfully employee added
    employeeAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.employeeAdded = true;
    },
    setEmployeeAdded: (state, action) => {
      state.employeeAdded = action.payload.status;
    },
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    setAllEmployees: (state, action) => {
      state.employeeInfo = action.payload;
      // const { email, displayName } = action.payload;
      // state.employeeInfo.displayName = displayName;
      // state.employeeInfo.email = email;
      state.loading = false;
    },
    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    setAdminStatus: (state, action) => {
      state.admin = action.payload.admin;
    },
    addEmployeeToDB: (state, action) => {
      state.apiResponse = action.payload;
    },
    // Delete a employee
    deleteEmployee: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.employeeInfo.findIndex(
          (employee) => employee._id === action.payload._id
        );
        state.employeeInfo.splice(index, 1);
      }
    },
    setUpdateEmployee: (state, action) => {
      if (action.payload.modifiedCount)
        Swal.fire("Good job!", "Employee Updated Successfully!", "success");
    },
  },
});

export const {
  setAllEmployees,
  setLoading,
  setAuthError,
  addEmployeeToDB,
  setAdminStatus,
  employeeAddedSuccess,
  setEmployeeAdded,
  deleteEmployee,
  setUpdateEmployee,
} = employee.actions;

export default employee.reducer;

// Action Creators
const url = "/employees";

// Add new employee to db
export const saveEmployeeToDB = (data) =>
  apiCallBegan({
    url,
    data,
    method: "post",
    onSuccess: employeeAddedSuccess.type,
  });

// Load Employees form Database
export const loadEmployees = () =>
  apiCallBegan({
    url: "/employees",
    onSuccess: setAllEmployees.type,
  });

// Delete employee from db
export const deleteEmployeeToDB = (data) =>
  apiCallBegan({
    url,
    data,
    method: "delete",
    onSuccess: deleteEmployee.type,
  });

// Update employee to db
export const updateEmployeeToDB = (data) =>
  apiCallBegan({
    url,
    data,
    method: "put",
    onSuccess: setUpdateEmployee.type,
  });

// Check an employee role is admin or not
export const checkAdminStatus = (email) =>
  apiCallBegan({
    url: url + "/" + email,
    onSuccess: setAdminStatus.type,
  });
