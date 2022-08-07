import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    productList: [],
    loadingStatus: 'done'
}

export const fetchProductList = createAsyncThunk(
    // название среза
    'products/fetchproductList',
    async () => {
        const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_type=bronzer');
        console.log(response.data)
        return response.data
    }
);

const productListSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductList.pending, state => {state.loadingStatus = 'loading'})
        .addCase(fetchProductList.fulfilled, (state, action) => {
            state.loadingStatus = 'done';
            state.productList = action.payload;
            // heroesAdapter.setAll(state, actions.payload);
        },)
        .addCase(fetchProductList.rejected, state => {
            state.loadingStatus = 'error';
        },)
        .addDefaultCase(() => {})
    }
});

const {actions, reducer} = productListSlice;

export default reducer;

export const {
    setProductList
} = actions;

