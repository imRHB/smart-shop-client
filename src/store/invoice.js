import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

let initialState = {
    allInvoices: [],
    invoiceLoading: false,
    reload: false,
    invoiceAdded: false,
    invoiceDeletedSuccess: false,
    error: "",
    apiResponse: {},
};

const invoice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        // State change for invoice  added
        invoiceAddedSuccess: (state, action) => {
            if (action.payload.insertedId) state.invoiceAdded = true;
        },
        invoiceRequested: (state, action) => {
            state.invoiceLoading = true;
        },
        invoiceRequestedFailed: (state, action) => {
            state.invoiceLoading = false;
        },
        invoiceReceived: (state, action) => {
            state.allInvoice = action.payload;
            state.invoiceLoading = false;
        },
        addInvoiceToDB: (state, action) => {
            state.apiResponse = action.payload;
        },
        setAuthError: (state, action) => {
            state.error = action.payload.error;
        },
        // Delete a invoice
        setDeleteInvoice: (state, action) => {
            if (action.payload.deletedCount > 0) {
                const index = state.allInvoice.findIndex(
                    (invoice) => invoice._id === action.payload._id
                );
                state.allInvoice.splice(index, 1);
                state.invoiceDeletedSuccess = true;
            }
        },

        setReload: (state, action) => {
            state.reload = action.payload.reload;
        },
    },
});

export const {
    invoiceAddedSuccess,
    invoiceRequested,
    invoiceRequestedFailed,
    invoiceReceived,
    addInvoiceToDB,
    setAuthError,
    setDeleteInvoice,
    setReload,
} = invoice.actions;

export default invoice.reducer;

// Add new invoice to db
export const saveInvoiceToDB = (data) =>
    apiCallBegan({
        url: "/orders",
        data,
        method: "post",
        onSuccess: addInvoiceToDB.type,
    });

// Load invoices form Database
export const loadInvoices = () =>
    apiCallBegan({
        url: "/orders",
        onStart: invoiceRequested.type,
        onSuccess: invoiceReceived.type,
        onFailed: invoiceRequestedFailed.type,
    });

// Delete invoice from db
export const deleteInvoiceToDB = (id) =>
    apiCallBegan({
        url: `/invoices/${id}`,
        method: "delete",
        onSuccess: setDeleteInvoice.type,
    });

