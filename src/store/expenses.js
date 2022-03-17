import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

let initialState = {
    expenseItems: [],
    expenseItemLoading: false,
    reload: false,
    expenseItemAdded: false,
    expenseItemDeletedSuccess: false,
    error: '',
    apiResponse: {},
};

const expense = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        expenseItemAddedSuccess: (state, action) => {
            if (action.payload.insertedId) {
                state.expenseItemAdded = true;
            }
        },
        expenseItemReuested: (state, action) => {
            state.expenseItemLoading = true;
        },
        expenseItemReuestFailed: (state, action) => {
            state.expenseItemLoading = false;
        },
        expenseItemReceived: (state, action) => {
            state.expenseItems = action.payload;
            state.expenseItemLoading = false;
        },
        addExpenseItemToDb: (state, action) => {
            state.apiResponse = action.payload;
        },
        setAuthError: (state, action) => {
            state.error = action.payload.error;
        },
        setDeleteExpenseItem: (state, action) => {
            if (action.payload.deletedCount > 0) {
                const index = state.expenseItems.findIndex((expense) => expense._id === action.payload._id);
                state.expenseItems.splice(index, 1);
                state.expenseItemDeletedSuccess = true;
            }
        },
        setReload: (state, action) => {
            state.reload = action.payload.reload;
        },
    },
});

export const {
    expenseItemAddedSuccess,
    expenseItemReuested,
    expenseItemReuestFailed,
    expenseItemReceived,
    addExpenseItemToDb,
    setAuthError,
    setDeleteExpenseItem,
    setReload
} = expense.actions;

export default expense.reducer;


export const saveExpenseItemToDb = (data) => apiCallBegan({
    url: '/expense-items',
    data,
    method: 'post',
    onSuccess: addExpenseItemToDb.type,
});

export const loadExpenseItems = () => apiCallBegan({
    url: '/expense-items',
    onStart: expenseItemReuested.type,
    onSuccess: expenseItemReceived.type,
    onFailed: expenseItemReuestFailed.type,
});

export const deleteExpenseItemFromDb = (id) => apiCallBegan({
    url: `/expense-items/${id}`,
    method: 'delete',
    onSuccess: setDeleteExpenseItem.type,
});