import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import Swal from "sweetalert2";

let initialState = {
  allDesignation: [],
  designationLoading: false,
  reload: false,
  designationAdded: false,
  designationDeleted: false,
  editDesignation: {},
  error: "",
  apiResponse: {},
};

const designation = createSlice({
  name: "designation",
  initialState,
  reducers: {
    // State change for successfully designation added
    designationAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.designationAdded = true;
    },
    designationRequested: (state, action) => {
      state.designationLoading = true;
    },
    designationRequestedFailed: (state, action) => {
      state.designationLoading = false;
    },
    designationReceived: (state, action) => {
      state.allDesignation = action.payload;
      state.designationLoading = false;
    },
    addDesignationToDB: (state, action) => {
      state.apiResponse = action.payload;
    },
    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    // Delete a designation
    setDeleteDesignation: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.allDesignation.findIndex(
          (designation) => designation._id === action.payload._id
        );
        state.allDesignation.splice(index, 1);
        state.designationDeletedSuccess = true;
      }
    },
    setEditDesignation: (state, action) => {
      state.editDesignation = state.allDesignation.find(
        (designation) => designation._id === action.payload._id
      );
    },
    setUpdateDesignation: (state, action) => {
      if (action.payload.modifiedCount)
        Swal.fire("Good job!", "Designation Updated Successfully!", "success");
    },
    setReload: (state, action) => {
      state.reload = action.payload.reload;
    },
  },
});

export const {
  designationAddedSuccess,
  designationRequested,
  designationRequestedFailed,
  designationReceived,
  addDesignationToDB,
  setAuthError,
  setDeleteDesignation,
  setEditDesignation,
  setUpdateDesignation,
  setReload,
} = designation.actions;

export default designation.reducer;

// Add new designation to db
export const saveDesignationToDB = (data) =>
  apiCallBegan({
    url: "/designations",
    data,
    method: "post",
    onSuccess: addDesignationToDB.type,
  });

// Load Designations form Database
export const loadDesignations = () =>
  apiCallBegan({
    url: "/designations",
    onStart: designationRequested.type,
    onSuccess: designationReceived.type,
    onFailed: designationRequestedFailed.type,
  });

// Delete designation from db
export const deleteDesignationToDB = (id) =>
  apiCallBegan({
    url: `/designations/${id}`,
    method: "delete",
    onSuccess: setDeleteDesignation.type,
  });

// Update designation to db
export const updateDesignationToDB = (data) =>
  apiCallBegan({
    url: "/designations",
    data,
    method: "put",
    onSuccess: setUpdateDesignation.type,
  });
