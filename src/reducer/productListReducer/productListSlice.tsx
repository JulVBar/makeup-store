import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { ProductState, ParamsObj } from "./types";

const initialState: ProductState = {
    allProducts: [],
    // isFetching: true,
    piece: {
        start: 0,
        end: 9
    }
}

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (params: ParamsObj ) => {
        const { category, sort, order } = params;
        const url= `https://62f0bd3157311485d135bea7.mockapi.io/products?category=${category}&sortBy=${sort}&order=${order}`;
        const response = await axios.get(url);
        return response.data;
    }
);

const productListSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        // setStartFetching: (state) => {
        //     state.isFetching = true;
        // },
        setPiece: (state, action) => {
            state.piece = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        // .addCase(fetchAllProducts.pending)
        .addCase(fetchAllProducts.pending, (state) => {
            // state.isFetching = true;
        },)
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            // state.isFetching = false;
        },)
        .addCase(fetchAllProducts.rejected, (state) => {},)
        .addDefaultCase(() => {})
    }
});

const {actions, reducer} = productListSlice;

export default reducer;

export const {
    setAllProducts,
    // setStartFetching,
    setPiece
} = actions;

