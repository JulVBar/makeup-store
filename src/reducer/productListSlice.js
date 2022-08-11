import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    productList: [],
    allProducts: [],
    isFetching: true
}

export const fetchProductList = createAsyncThunk(
    'products/fetchproductList',
    async (params) => {
        const { category, sort, order, page } = params;
        const url = `https://62f0bd3157311485d135bea7.mockapi.io/products?page=${page}&limit=9&category=${category}&sortBy=${sort}&order=${order}`;
        const response = await axios.get(url);
        return response.data;
    }
);

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (category) => {
        const response = await axios.get(`https://62f0bd3157311485d135bea7.mockapi.io/products?category=${category}`);
        return response.data;
    }
);

const productListSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload;
        },
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        setStartFetching: (state) => {
            state.isFetching = true;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductList.pending)
        .addCase(fetchProductList.fulfilled, (state, action) => {
            state.isFetching = false;
            state.productList = action.payload;
            // heroesAdapter.setAll(state, actions.payload);
        },)
        .addCase(fetchProductList.rejected)
        .addCase(fetchAllProducts.pending)
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            // heroesAdapter.setAll(state, actions.payload);
        },)
        .addCase(fetchAllProducts.rejected)
        .addDefaultCase(() => {})
    }
});

const {actions, reducer} = productListSlice;

export default reducer;

export const {
    setProductList,
    setAllProducts,
    setStartFetching,
} = actions;

