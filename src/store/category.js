import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

let initialState = {
    categories: [],
    categoryLoading: false,
    reload: false,
    categoryAdded: false,
    categoryDeletedSuccess: false,
    error: '',
    apiResponse: {},
};

const category = createSlice({
    name: 'category',
    initialState,
    reducers: {
        categoryAddedSuccess: (state, action) => {
            if (action.payload.insertedId) {
                state.categoryAdded = true;
            }
        },
        categoryReuested: (state, action) => {
            state.categoryLoading = true;
        },
        categoryReuestFailed: (state, action) => {
            state.categoryLoading = false;
        },
        categoryReceived: (state, action) => {
            state.categories = action.payload;
            state.categoryLoading = false;
        },
        addCategoryToDb: (state, action) => {
            state.apiResponse = action.payload;
        },
        setAuthError: (state, action) => {
            state.error = action.payload.error;
        },
        setDeleteCategory: (state, action) => {
            if (action.payload.deletedCount > 0) {
                const index = state.categories.findIndex((category) => category._id === action.payload._id);
                state.categories.splice(index, 1);
                state.categoryDeletedSuccess = true;
            }
        },
        setReload: (state, action) => {
            state.reload = action.payload.reload;
        },
    },
});

export const {
    categoryAddedSuccess,
    categoryReuested,
    categoryReuestFailed,
    categoryReceived,
    addCategoryToDb,
    setAuthError,
    setDeleteCategory,
    setReload
} = category.actions;

export default category.reducer;


export const saveCategoryToDb = (data) => apiCallBegan({
    url: '/category',
    data,
    method: 'post',
    onSuccess: addCategoryToDb.type,
});

export const loadCategories = () => apiCallBegan({
    url: '/category',
    onStart: categoryReuested.type,
    onSuccess: categoryReceived.type,
    onFailed: categoryReuestFailed.type,
});

export const deleteCategoryFromDb = (id) => apiCallBegan({
    url: `/category/${id}`,
    method: 'delete',
    onSuccess: setDeleteCategory.type,
});