import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import Swal from "sweetalert2";

let initialState = {
  employeeInfo: {},
  allEmployees: [],
  employeeAdded: false,
  editEmployee: {},
  loading: false,
  employeesLoading: false,
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
    addEmployeeToDB: (state, action) => {
      state.apiResponse = action.payload;
    },
    // Mange employees section
    setEmployeesLoading: (state, action) => {
      state.employeesLoading = true;
    },
    setEmployees: (state, action) => {
      state.allEmployees = action.payload;
      state.employeesLoading = false;
    },
    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    setAdminStatus: (state, action) => {
      state.admin = action.payload.admin;
    },
    // Delete a employee
    setDeleteEmployee: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.allEmployees.findIndex(
          (employee) => employee._id === action.payload._id
        );
        state.allEmployees.splice(index, 1);
      }
    },
    setEditEmployee: (state, action) => {
      state.editEmployee = state.allEmployees.find(
        (employee) => employee._id === action.payload._id
      );
    },
    setUpdateEmployee: (state, action) => {
      if (action.payload.modifiedCount)
        Swal.fire("Good job!", "Employee Updated Successfully!", "success");
    },
  },
});

export const {
  setEmployee,
  addEmployeeToDB,
  setEmployees,
  setLoading,
  setAuthError,
  setAdminStatus,
  employeeAddedSuccess,
  setEmployeeAdded,
  setDeleteEmployee,
  setEditEmployee,
  setUpdateEmployee,
  setEmployeesLoading,
} = employee.actions;

export default employee.reducer;

// Add new employee to db
export const saveEmployeeToDB = (data) => {
  console.log(data);
  console.log("employee saved");
  apiCallBegan({
    url: "/employees",
    data,
    method: "post",
    onSuccess: addEmployeeToDB.type,
  });
};

// Load Employees form Database
export const loadEmployees = () =>
  apiCallBegan({
    url: "/employees",
    onStart: setEmployeesLoading.type,
    onSuccess: setEmployees.type,
  });

// Delete employee from db
export const deleteEmployeeToDB = (id) =>
  apiCallBegan({
    url: `/employees/${id}`,
    method: "delete",
    onSuccess: setDeleteEmployee.type,
  });

// Update employee to db
export const updateEmployeeToDB = (data) =>
  apiCallBegan({
    url: "/employees",
    data,
    method: "put",
    onSuccess: setUpdateEmployee.type,
  });

// Check an employee role is admin or not
export const checkAdminStatus = (email) =>
  apiCallBegan({
    url: `/employees/${email}`,
    onSuccess: setAdminStatus.type,
  });
