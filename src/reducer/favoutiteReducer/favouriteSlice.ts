import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFavFromStorage } from "../../utils/getFavFromStorage";
import { FavouriteState } from "./types";
import { ProductItemType } from "../productListReducer/types";

const initialState: FavouriteState = getFavFromStorage();

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addOrRemoveItemFromFav: (state, action: PayloadAction<ProductItemType>) => {
            const findItem = state.favs.find((obj) => obj.id === action.payload.id);

            if (!findItem) {
                state.favs.push(action.payload);
            } else {
                state.favs = state.favs.filter((obj) => obj.id !== action.payload.id);
            }
            
            localStorage.setItem('favourite', JSON.stringify(state.favs));
        },
        clearFav(state) {
            state.favs = [];
            localStorage.removeItem('favourite');
            window.scrollTo(0,0);
        }
    }
});

const {actions, reducer} = favouriteSlice;

export default reducer;

export const { 
    addOrRemoveItemFromFav,
    clearFav,
} = actions;

