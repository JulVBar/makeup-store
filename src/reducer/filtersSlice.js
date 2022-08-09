import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortName: 'Default sorting',
    sort: '',
    order: 'asc',
    category: '',
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSortName: (state, action) => {
            state.sortName = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        }
    }
});

const {actions, reducer} = filterSlice;

export default reducer;

export const {
    setSortName,
    setSort,
    setOrder,
    setCategory
} = actions;

