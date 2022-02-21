import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  employeeInfo: {},
  loading: false,
  error: "",
  apiResponse: {},
  admin: null,
};

const employee = createSlice({
  name: "employee",
  initialState,
  reducers: {
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
    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    addEmployeeToDB: (state, action) => {
      state.apiResponse = action.payload;
    },
    setAdminStatus: (state, action) => {
      state.admin = action.payload.admin;
    },
  },
});

export const {
  setEmployee,
  setLoading,
  setAuthError,
  addEmployeeToDB,
  setAdminStatus,
} = employee.actions;

export default employee.reducer;

// Action Creators
const url = "/employees";

// Add new employee to db for registration using email and password
export const saveEmployeeToDB = (data) =>
  apiCallBegan({
    url,
    data,
    method: "post",
    onSuccess: addEmployeeToDB.type,
  });

// // Update (upsert) employee info to db for Google Login
// export const upsertEmployee = (data) =>
//   apiCallBegan({
//     url,
//     data,
//     method: "put",
//     onSuccess: addEmployeeToDB.type,
//   });

// Check an employee role is admin or not
export const checkAdminStatus = (email) =>
  apiCallBegan({
    url: url + "/" + email,
    onSuccess: setAdminStatus.type,
  });
