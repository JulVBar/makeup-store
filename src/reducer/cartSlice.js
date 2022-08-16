import { createSlice } from "@reduxjs/toolkit";
import { getCartFromStorage } from "../utils/getCartFromStorage";
import { calcTotalPrice } from "../utils/calcTotalPrice";

const initialState = getCartFromStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const findItem = state.items.find((obj) => obj.vendor_code === action.payload.vendor_code)

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                ...action.payload,
                count: 1,
                });
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
            state.totalPrice = calcTotalPrice(state.items);
        },
        minusItem(state, action) {
            const findItem = state.items.find((obj) => obj.vendor_code === action.payload.vendor_code);
        
            if (findItem && findItem.count > 1) {
                findItem.count--;
            }
        
            state.totalPrice = calcTotalPrice(state.items);
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.vendor_code !== action.payload.vendor_code);
            state.totalPrice = calcTotalPrice(state.items);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        selectCartItem(state, action) {
            state.cart.items.find((obj) => obj.vendor_code === action.payload.vendor_code)
        }
    }
});

const {actions, reducer} = cartSlice;

export default reducer;

export const { 
    addItem,
    removeItem,
    minusItem,
    selectCartItem
} = actions;

