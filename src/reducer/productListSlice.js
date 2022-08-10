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
        // const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_type=bronzer');
        const { category, sort, order, productsOnPage } = params;
        const url = `https://62f0bd3157311485d135bea7.mockapi.io/products?page=1&limit=${productsOnPage}&category=${category}&sortBy=${sort}&order=${order}`;
        
        const response = await axios.get(url);
        // console.log(response.data)
        return response.data;
    }
);

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (category) => {
        const response = await axios.get(`https://62f0bd3157311485d135bea7.mockapi.io/products?category=${category}`);
        // console.log(response.data)
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

