import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

let initialState = {
    allPayment: [],
    paymentLoading: false,
    reload: false,
    paymentAdded: false,
    paymentDeletedSuccess: false,
    error: "",
    apiResponse: {},
};

const payment = createSlice({
    name: "payment",
    initialState,
    reducers: {
        // State change for payment  added
        paymentAddedSuccess: (state, action) => {
            if (action.payload.insertedId) state.paymentAdded = true;
        },
        paymentRequested: (state, action) => {
            state.paymentLoading = true;
        },
        paymentRequestedFailed: (state, action) => {
            state.paymentLoading = false;
        },
        paymentReceived: (state, action) => {
            state.allPayment = action.payload;
            state.paymentLoading = false;
        },
        addPaymentToDB: (state, action) => {
            state.apiResponse = action.payload;
        },
        setAuthError: (state, action) => {
            state.error = action.payload.error;
        },
        // Delete a payment
        setDeletePayment: (state, action) => {
            if (action.payload.deletedCount > 0) {
                const index = state.allPayment.findIndex(
                    (payment) => payment._id === action.payload._id
                );
                state.allPayment.splice(index, 1);
                state.paymentDeletedSuccess = true;
            }
        },

        setReload: (state, action) => {
            state.reload = action.payload.reload;
        },
    },
});

export const {
    paymentAddedSuccess,
    paymentRequested,
    paymentRequestedFailed,
    paymentReceived,
    addPaymentToDB,
    setAuthError,
    setDeletePayment,
    setReload,
} = payment.actions;

export default payment.reducer;

// Add new payment to db
export const savepaymentToDB = (data) =>
    apiCallBegan({
        url: "/orders",
        data,
        method: "post",
        onSuccess: addPaymentToDB.type,
    });

// Load payments form Database
export const loadPayments = () =>
    apiCallBegan({
        url: "/orders",
        onStart: paymentRequested.type,
        onSuccess: paymentReceived.type,
        onFailed: paymentRequestedFailed.type,
    });

// Delete payment from db
export const deletePayment = (id) =>
    apiCallBegan({
        url: `/orders/${id}`,
        method: "delete",
        onSuccess: setDeletePayment.type,
    });

