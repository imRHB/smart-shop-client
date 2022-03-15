import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import Swal from "sweetalert2";

let initialState = {
    allProduct: [],
    productLoading: false,
    reload: false,
    productAdded: false,
    productDeletedSuccess: false,
    singleProduct: {},
    error: "",
    apiResponse: {},
};

const product = createSlice({
    name: "product",
    initialState,
    reducers: {
        // State change for successfully product added
        productAddedSuccess: (state, action) => {
            if (action.payload.insertedId) state.productAdded = true;
        },
        productRequested: (state, action) => {
            state.productLoading = true;
        },
        productRequestedFailed: (state, action) => {
            state.productLoading = false;
        },
        productReceived: (state, action) => {
            state.allProduct = action.payload;
            state.productLoading = false;
        },
        addProductToDB: (state, action) => {
            state.apiResponse = action.payload;
        },
        setAuthError: (state, action) => {
            state.error = action.payload.error;
        },

        setSingleProduct: (state, action) => {
            state.singleProduct = state.allProduct.find(
                (product) => product._id === action.payload._id
            );
        },

        setUpdateProduct: (state, action) => {
            if (action.payload.modifiedCount)
                Swal.fire("Good job!", "product Updated Successfully!", "success");
        },
        setReload: (state, action) => {
            state.reload = action.payload.reload;
        },
    },
});

export const {
    productAddedSuccess,
    productRequested,
    productRequestedFailed,
    productReceived,
    addProductToDB,
    setAuthError,
    setDeleteProduct,
    setSingleProduct,
    setUpdateProduct,
    setReload,
} = product.actions;

export default product.reducer;


// Load product form Database
export const loadProducts = () =>
    apiCallBegan({
        url: "/products",
        onStart: productRequested.type,
        onSuccess: productReceived.type,
        onFailed: productRequestedFailed.type,
    });

