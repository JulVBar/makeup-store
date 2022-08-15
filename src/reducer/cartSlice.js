import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../utils/getCartFromLS";
import { calcTotalPrice } from "../utils/calcTotalPrice";

const initialState = getCartFromLS();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const findItem = state.items.find((obj) => (obj.id === action.payload.id && obj.pickedUpColor.colour_name === action.payload.pickedUpColor.colour_name));

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                ...action.payload,
                count: 1,
                });
            }
            state.totalPrice = calcTotalPrice(state.items);
        },
        minusItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
        
            if (findItem) {
                findItem.count--;
            }
        
            state.totalPrice = calcTotalPrice(state.items);
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = calcTotalPrice(state.items);
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },
        selectCartItemById(state, action) {
            state.cart.items.find((obj) => obj.id === action.payload.id && obj.pickedUpColor.colour_name === action.payload.pickedUpColor.colour_name)
        }
    }
});

const {actions, reducer} = cartSlice;

export default reducer;

export const { 
    addItem,
    removeItem,
    minusItem,
    clearItems,
    selectCartItemById
} = actions;

