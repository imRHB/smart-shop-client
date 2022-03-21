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
        setDeleteProduct: (state, action) => {
            if (action.payload.deletedCount > 0) {
                const index = state.allProduct.findIndex((product) => product._id === action.payload._id);
                state.allProduct.splice(index, 1);
                state.productDeletedSuccess = true;
            }
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


export const saveProductToDb = (data) => apiCallBegan({
    url: '/products',
    data,
    method: 'post',
    onSuccess: addProductToDB.type,
});

// Load product form Database
export const loadProducts = () =>
    apiCallBegan({
        url: "/products",
        onStart: productRequested.type,
        onSuccess: productReceived.type,
        onFailed: productRequestedFailed.type,
    });

export const selectedProduct = (id) =>
    apiCallBegan({
        url: `/details/${id}`,
        onSuccess: setSingleProduct.type,
    });

export const deleteProductFromDb = (id) => apiCallBegan({
    url: `/products/${id}`,
    method: 'delete',
    onSuccess: setDeleteProduct.type,
});

