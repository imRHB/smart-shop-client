import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import Swal from "sweetalert2";

let initialState = {
  allSupplier: [],
  supplierLoading: false,
  reload: false,
  supplierAdded: false,
  supplierDeleted: false,
  editSupplier: {},
  error: "",
  apiResponse: {},
};

const supplier = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    // State change for successfully supplier added
    supplierAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.supplierAdded = true;
    },
    supplierRequested: (state, action) => {
      state.supplierLoading = true;
    },
    supplierRequestedFailed: (state, action) => {
      state.supplierLoading = false;
    },
    supplierReceived: (state, action) => {
      state.allSupplier = action.payload;
      state.supplierLoading = false;
    },
    addSupplierToDB: (state, action) => {
      state.apiResponse = action.payload;
    },
    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    // Delete a supplier
    setDeleteSupplier: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.allSupplier.findIndex(
          (supplier) => supplier._id === action.payload._id
        );
        state.allSupplier.splice(index, 1);
      }
    },
    setEditSupplier: (state, action) => {
      state.editSupplier = state.allSupplier.find(
        (supplier) => supplier._id === action.payload._id
      );
    },
    setUpdateSupplier: (state, action) => {
      if (action.payload.modifiedCount)
        Swal.fire("Good job!", "Supplier Updated Successfully!", "success");
    },
    setReload: (state, action) => {
      state.reload = action.payload.reload;
    },
  },
});

export const {
  supplierAddedSuccess,
  supplierRequested,
  supplierRequestedFailed,
  supplierReceived,
  addSupplierToDB,
  setAuthError,
  setDeleteSupplier,
  setEditSupplier,
  setUpdateSupplier,
  setReload,
} = supplier.actions;

export default supplier.reducer;

// Add new supplier to db
export const saveSupplierToDB = (data) =>
  apiCallBegan({
    url: "/suppliers",
    data,
    method: "post",
    onSuccess: addSupplierToDB.type,
  });

// Load Supplier form Database
export const loadSuppliers = () =>
  apiCallBegan({
    url: "/suppliers",
    onStart: supplierRequested.type,
    onSuccess: supplierReceived.type,
    onFailed: supplierRequestedFailed.type,
  });

// Delete supplier from db
export const deleteSupplierToDB = (id) =>
  apiCallBegan({
    url: `/suppliers/${id}`,
    method: "delete",
    onSuccess: setDeleteSupplier.type,
  });

// Update supplier to db
export const updateSupplierToDB = (data) =>
  apiCallBegan({
    url: "/suppliers",
    data,
    method: "put",
    onSuccess: setUpdateSupplier.type,
  });
