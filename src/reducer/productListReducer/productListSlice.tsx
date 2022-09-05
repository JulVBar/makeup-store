import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { ProductState, ProductItemType, PieceItem } from "./types";

const initialState: ProductState = {
    allProducts: [],
    isFetching: true,
    piece: {
        start: 0,
        end: 9
    },
    priceFilter: [0, 100],
}

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (params: Record<string, string> ) => {
        const { category, sort, order } = params;
        const url= `https://62f0bd3157311485d135bea7.mockapi.io/products?category=${category}&sortBy=${sort}&order=${order}`;
        const { data } = await axios.get<ProductItemType[]>(url);
        return data as ProductItemType[];
    }
);

const productListSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAllProducts: (state, action: PayloadAction<ProductItemType[]>) => {
            state.allProducts = action.payload;
        },
        setPiece: (state, action: PayloadAction<PieceItem>) => {
            state.piece = action.payload;
        },
        setPriceFilter: (state, action: PayloadAction<number[]>) => {
            state.priceFilter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        // .addCase(fetchAllProducts.pending)
        .addCase(fetchAllProducts.pending, (state) => {
            state.isFetching = true;
        },)
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.isFetching = false;
        },)
        .addCase(fetchAllProducts.rejected, (state) => {
            state.isFetching = false;
        },)
        .addDefaultCase(() => {})
    }
});

const {actions, reducer} = productListSlice;

export default reducer;

export const {
    setAllProducts,
    setPiece,
    setPriceFilter
} = actions;

