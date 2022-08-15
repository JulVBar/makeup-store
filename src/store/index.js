import { configureStore } from '@reduxjs/toolkit';
import products from '../reducer/productListSlice';
import filters from '../reducer/filtersSlice';
import cart from '../reducer/cartSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {products, filters, cart},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;