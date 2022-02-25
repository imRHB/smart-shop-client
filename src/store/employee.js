import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import Swal from "sweetalert2";

const initialState = {
  employeeInfo: {},
  allEmployees: [],
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
    setEmployee: (state, action) => {
      const { email, displayName, photoURL } = action.payload;
      state.employeeInfo.displayName = displayName;
      state.employeeInfo.email = email;
      state.employeeInfo.photoURL = photoURL;
      state.loading = false;
    },
    setEmployees: (state, action) => {
      state.allEmployees = action.payload;
      state.loading = false;
    },
    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    setAdminStatus: (state, action) => {
      state.admin = action.payload.admin;
    },
    // Delete a employee
    deleteEmployee: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.allEmployees.findIndex(
          (employee) => employee._id === action.payload._id
        );
        state.allEmployees.splice(index, 1);
      }
    },
    setUpdateEmployee: (state, action) => {
      if (action.payload.modifiedCount)
        Swal.fire("Good job!", "Employee Updated Successfully!", "success");
    },
  },
});

export const {
  setEmployee,
  setEmployees,
  setLoading,
  setAuthError,
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
export const saveEmployeeToDB = (data) => {
  console.log(data);
  console.log("employee saved");
  apiCallBegan({
    url,
    data,
    method: "post",
    onSuccess: employeeAddedSuccess.type,
  });
};

// Load Employees form Database
export const loadEmployees = () =>
  apiCallBegan({
    url: "/employees",
    onSuccess: setEmployee.type,
  });

// Delete employee from db
export const deleteEmployeeToDB = (id) =>
  apiCallBegan({
    url: url + "/" + id,
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
