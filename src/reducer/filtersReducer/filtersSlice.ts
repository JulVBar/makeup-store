import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "./types";
import { ProductItemType} from "../productListReducer/types";

const initialState: FiltersState  = {
    sortParams: {
        name: 'Default sorting',
        sort: '',
        order: 'asc',
    },
    category: '',
    page: 1,
    filtersBrand: [],
    filtersType: [],
    filteredList: [],
    // priceFilter: [0, 100],
    isFiltered: false,
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSortParams: (state, action: PayloadAction<Record<string, string>>) => {
            state.sortParams = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setCategoryReset: (state) => {
            state.category = initialState.category;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setFirstPage: (state) => {
            state.page = initialState.page;
        },
        setFilterBrand: (state, action: PayloadAction<Array<string>>) => {
            state.filtersBrand = action.payload;
        },
        setFilterType: (state, action: PayloadAction<Array<string>>) => {
            state.filtersType = action.payload;
        },
        setFilteredList: (state, action: PayloadAction<ProductItemType[]>) => {
            // if (state.sortParams.name === 'Sort by price: low to high') {
            //     state.filteredList = action.payload.filter(item=>(item.price >= state.priceFilter[0] && item.price <= state.priceFilter[1])).sort((a, b) => a.price - b.price);}
            // if (state.sortParams.name === 'Sort by price: high to low') {
            //     state.filteredList = action.payload.filter(item=>(item.price >= state.priceFilter[0] && item.price <= state.priceFilter[1])).sort((a, b) => b.price - a.price);}
            // if (state.sortParams.name === 'Sort by popularity') {
            //     state.filteredList = action.payload.filter(item=>(item.price >= state.priceFilter[0] && item.price <= state.priceFilter[1])).sort((a, b) => a.raiting - b.raiting);}
            // if (state.sortParams.name === 'Default sorting') {
            //     state.filteredList = action.payload.filter(item=>(item.price >= state.priceFilter[0] && item.price <= state.priceFilter[1])).sort((a, b) => a.id - b.id);}

                if (state.sortParams.name === 'Sort by price: low to high') {
                    state.filteredList = action.payload.sort((a, b) => a.price - b.price);}
                if (state.sortParams.name === 'Sort by price: high to low') {
                    state.filteredList = action.payload.sort((a, b) => b.price - a.price);}
                if (state.sortParams.name === 'Sort by popularity') {
                    state.filteredList = action.payload.sort((a, b) => a.raiting - b.raiting);}
                if (state.sortParams.name === 'Default sorting') {
                    state.filteredList = action.payload.sort((a, b) => a.id - b.id);}

            state.isFiltered = true;
        },
        setFilteredListReset: (state) => {
            state.filteredList = initialState.filteredList;
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
        // setPriceFilter: (state, action: PayloadAction<number[]>) => {
        //     state.priceFilter = action.payload;
        // },
    }
});

const {actions, reducer} = filterSlice;

export default reducer;

export const {
    setCategory,
    setCategoryReset,
    setSortParams,
    setPage,
    setFirstPage,
    setFilterBrand,
    setFilterType,
    setFilteredList,
    setFilteredListReset,
    setSortByPriceToHigh,
    setSortByPriceToLow,
    setSortByRaiting,
    setSortByDefault,
    // setPriceFilter
} = actions;

