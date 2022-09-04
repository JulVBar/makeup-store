import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import products from '../reducer/productListReducer/productListSlice';
import filters from '../reducer/filtersReducer/filtersSlice';
import cart from '../reducer/cartReducer/cartSlice';
import favourite from '../reducer/favoutiteReducer/favouriteSlice';

// const stringMiddleware = () => (next) => (action) => {
//     if (typeof action === 'string') {
//         return next({
//             type: action
//         })
//     }
//     return next(action)
// };

const store = configureStore({
    reducer: {products, filters, cart, favourite},
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    // devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;