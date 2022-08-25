import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortParams: {
        name: 'Default sorting',
        sort: '',
        order: 'asc',
    },
    category: '',
    page: 1,
    filtersBrand: [],
    filtersType: [],
    filteredList: []
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
        setFilterBrand: (state, action) => {
            state.filtersBrand = action.payload;
        },
        setFilterType: (state, action) => {
            state.filtersType = action.payload;
        },
        setFilteredList: (state, action) => {
            if (state.sortParams.name === 'Sort by price: low to high') {
            state.filteredList = action.payload.sort((a, b) => a.price - b.price);}
            if (state.sortParams.name === 'Sort by price: high to low') {
                state.filteredList = action.payload.sort((a, b) => b.price - a.price);}
            if (state.sortParams.name === 'Sort by popularity') {
                state.filteredList = action.payload.sort((a, b) => a.raiting - b.raiting);}
            if (state.sortParams.name === 'Default sorting') {
                state.filteredList = action.payload.sort((a, b) => a.id - b.id);}
        },
        setSortByPriceToHigh: (state) => {
            state.filteredList = state.filteredList.sort((a, b) => a.price - b.price);
        },
        setSortByPriceToLow: (state) => {
            state.filteredList = state.filteredList.sort((a, b) => b.price - a.price);
        },
        setSortByRaiting: (state) => {
            state.filteredList = state.filteredList.sort((a, b) => a.raiting - b.raiting);
        },
        setSortByDefault: (state) => {
            state.filteredList = state.filteredList.sort((a, b) => a.id - b.id);
        },
    }
});

function sort() {
    
}

const {actions, reducer} = filterSlice;

export default reducer;

export const {
    setCategory,
    setSortParams,
    setPage,
    setFirstPage,
    setFilterBrand,
    setFilterType,
    setFilteredList,
    setSortByPriceToHigh,
    setSortByPriceToLow,
    setSortByRaiting,
    setSortByDefault
} = actions;

