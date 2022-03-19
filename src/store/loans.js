import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { apiCallBegan } from "./api";

let initialState = {
    allLoan: [],
    loanLoading: false,
    reload: false,
    loanAdded: false,
    editLoan: {},
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
            state.editLoan = state.allLoan.find(
                (loan) => loan._id === action.payload._id
            );
        },
        setUpdateLoan: (state, action) => {
            if (action.payload.modifiedCount)
                Swal.fire("Congratulations!", "Loan Approved Successfully!", "success");
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
    setUpdateLoan,
    setEditLoan,
    setReload,
} = loan.actions;

export default loan.reducer;

// Add new loan to db
export const saveloanToDB = (data) =>
    apiCallBegan({
        url: "/loans",
        data,
        method: "post",
        onSuccess: addLoanToDB.type,
    });

// Load loans form Database
export const loadLoans = () =>
    apiCallBegan({
        url: "/loans",
        onStart: loanRequested.type,
        onSuccess: loanReceived.type,
        onFailed: loanRequestedFailed.type,
    });

// Delete loan from db
export const deleteLoan = (id) =>
    apiCallBegan({
        url: `/loans/${id}`,
        method: "delete",
        onSuccess: setDeleteLoan.type,
    });

// Update loan status to DB
export const updateLoanToDB = (data) =>
    apiCallBegan({
        url: "/loans",
        data,
        method: "put",
        onSuccess: setUpdateLoan.type,
    });