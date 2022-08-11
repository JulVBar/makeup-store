import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortParams: {
        name: 'Default sorting',
        sort: '',
        order: 'asc',
    },
    category: '',
    page: 1,
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSortParams: (state, action) => {
            state.sortParams = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setFirstPage: (state) => {
            state.page = initialState.page;
        },
    }
});

const {actions, reducer} = filterSlice;

export default reducer;

export const {
    setCategory,
    setSortParams,
    setPage,
    setFirstPage,
} = actions;

