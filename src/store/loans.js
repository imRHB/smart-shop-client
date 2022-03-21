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
    setReload
} = loans.actions;

export default loans.reducer;


export const saveloansToDb = (data) => apiCallBegan({
    url: '/loans',
    data,
    method: 'post',
    onSuccess: addloansToDb.type,
});

