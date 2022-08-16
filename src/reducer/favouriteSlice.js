import { createSlice } from "@reduxjs/toolkit";
import { getFavFromStorage } from "../utils/getFavFromStorage";

const initialState = getFavFromStorage();

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addOrRemoveItemFromFav: (state, action) => {
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

