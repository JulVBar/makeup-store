import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortParams: {
        name: 'Default sorting',
        sort: '',
        order: 'asc',
    },
    category: '',
    productsOnPage: 9
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
        setProductsOnPage: (state, action) => {
            state.productsOnPage = action.payload;
        },
        setInitialProductsOnPage: (state) => {
            state.productsOnPage = initialState.productsOnPage;
        },
    }
});

const {actions, reducer} = filterSlice;

export default reducer;

export const {
    setCategory,
    setSortParams,
    setProductsOnPage,
    setInitialProductsOnPage,
} = actions;

