import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    productList: [],
    isFetching: true
}

export const fetchProductList = createAsyncThunk(
    // название среза
    'products/fetchproductList',
    async (url) => {
        // const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_type=bronzer');
        const response = await axios.get(url);
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
        setStartFetching: (state) => {
            state.isFetching = true;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductList.pending, state => {state.loadingStatus = 'loading'})
        .addCase(fetchProductList.fulfilled, (state, action) => {
            state.isFetching = false;
            state.productList = action.payload;
            // heroesAdapter.setAll(state, actions.payload);
        },)
        .addCase(fetchProductList.rejected, state => {
            state.isFetching = true;
        },)
        .addDefaultCase(() => {})
    }
});

const {actions, reducer} = productListSlice;

export default reducer;

export const {
    setProductList,
    setStartFetching
} = actions;

