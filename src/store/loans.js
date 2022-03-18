import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

let initialState = {
    allLoan: [],
    loanLoading: false,
    reload: false,
    editLoan: {},
    loanAdded: false,
    loanDeletedSuccess: false,
    error: "",
    apiResponse: {},
};

const loan = createSlice({
    name: "loan",
    initialState,
    reducers: {
        // State change for loan  added
        loanAddedSuccess: (state, action) => {
            if (action.payload.insertedId) state.loanAdded = true;
        },
        loanRequested: (state, action) => {
            state.loanLoading = true;
        },
        loanRequestedFailed: (state, action) => {
            state.loanLoading = false;
        },
        loanReceived: (state, action) => {
            state.allLoan = action.payload;
            state.loanLoading = false;
        },
        addLoanToDB: (state, action) => {
            state.apiResponse = action.payload;
        },
        setAuthError: (state, action) => {
            state.error = action.payload.error;
        },
        // Delete a loan
        setDeleteLoan: (state, action) => {
            if (action.payload.deletedCount > 0) {
                const index = state.allLoan.findIndex(
                    (loan) => loan._id === action.payload._id
                );
                state.allLoan.splice(index, 1);
                state.loanDeletedSuccess = true;
            }
        },
        setEditLoan: (state, action) => {
            state.editLoan = state.allLoans.find(
                (loan) => loan._id === action.payload._id
            );
        },
        setReload: (state, action) => {
            state.reload = action.payload.reload;
        },
    },
});

export const {
    loanAddedSuccess,
    loanRequested,
    loanRequestedFailed,
    loanReceived,
    addLoanToDB,
    setAuthError,
    setDeleteLoan,
    setEditLoan,
    setReload,
} = loan.actions;

export default loan.reducer;

// Add new loan to db
export const saveloanToDB = (data) =>
    apiCallBegan({
        url: "/orders",
        data,
        method: "post",
        onSuccess: addLoanToDB.type,
    });

// Load loans form Database
export const loadLoans = () =>
    apiCallBegan({
        url: "/orders",
        onStart: loanRequested.type,
        onSuccess: loanReceived.type,
        onFailed: loanRequestedFailed.type,
    });

// Delete loan from db
export const deleteLoan = (id) =>
    apiCallBegan({
        url: `/orders/${id}`,
        method: "delete",
        onSuccess: setDeleteLoan.type,
    });

