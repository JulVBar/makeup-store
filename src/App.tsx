import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Preloader from './components/Preloader/Preloader';
import MainLayout from './layout/MainLayout';
import { FC } from 'react';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const ShopPage = lazy(() => import('./components/pages/ShopPage'));
const FavouritePage = lazy(() => import('./components/pages/FavouritePage'));
const SingleProductPage = lazy(() => import('./components/pages/SingleProductPage'));
const CheckOutPage = lazy(() => import('./components/pages/CheckOutPage'));
const CartPage = lazy(() => import('./components/pages/CartPage'));

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route
                    path=""
                    element={
                    <Suspense fallback={<Preloader/>}>
                        <HomePage />
                    </Suspense>
                    }
                />
                <Route
                    path="shop"
                    element={
                    <Suspense fallback={<Preloader/>}>
                        <ShopPage />
                    </Suspense>
                    }
                />
                <Route
                    path="favourite"
                    element={
                    <Suspense fallback={<Preloader/>}>
                        <FavouritePage />
                    </Suspense>
                    }
                />
                <Route
                    path="cart"
                    element={
                    <Suspense fallback={<Preloader/>}>
                        <CartPage />
                    </Suspense>
                    }
                />
                <Route
                    path="checkout"
                    element={
                    <Suspense fallback={<Preloader/>}>
                        <CheckOutPage />
                    </Suspense>
                    }
                />
                <Route
                    path="product/:id"
                    element={
                        <Suspense fallback={<Preloader/>}>
                            <SingleProductPage />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
