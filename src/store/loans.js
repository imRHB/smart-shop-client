import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

let initialState = {
    loan: [],
    categoryLoading: false,
    reload: false,
    loansAdded: false,
    loansDeletedSuccess: false,
    error: '',
    apiResponse: {},
};

const loans = createSlice({
    name: 'loans',
    initialState,
    reducers: {
        loansAddedSuccess: (state, action) => {
            if (action.payload.insertedId) {
                state.loansAdded = true;
            }
        },
        loansReuested: (state, action) => {
            state.loansLoading = true;
        },
        loansReuestFailed: (state, action) => {
            state.loansLoading = false;
        },
        loansReceived: (state, action) => {
            state.loan = action.payload;
            state.loansLoading = false;
        },
        addloansToDb: (state, action) => {
            state.apiResponse = action.payload;
        },
        setAuthError: (state, action) => {
            state.error = action.payload.error;
        },
        setDeleteloans: (state, action) => {
            if (action.payload.deletedCount > 0) {
                const index = state.loan.findIndex((loans) => loans._id === action.payload._id);
                state.loan.splice(index, 1);
                state.loansDeletedSuccess = true;
            }
        },
        setReload: (state, action) => {
            state.reload = action.payload.reload;
        },
    },
});

export const {
    loansAddedSuccess,
    loansReuested,
    loansReuestFailed,
    loansReceived,
    addloansToDb,
    setAuthError,
    setDeleteloans,
    setReload
} = loans.actions;

export default loans.reducer;


export const saveloansToDb = (data) => apiCallBegan({
    url: '/loans',
    data,
    method: 'post',
    onSuccess: addloansToDb.type,
});

export const loadloan = () => apiCallBegan({
    url: '/loans',
    onStart: loansReuested.type,
    onSuccess: loansReceived.type,
    onFailed: loansReuestFailed.type,
});

export const deleteloansFromDb = (id) => apiCallBegan({
    url: `/loans/${id}`,
    method: 'delete',
    onSuccess: setDeleteloans.type,
});