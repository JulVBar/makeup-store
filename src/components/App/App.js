import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Preloader from '../Preloader/Preloader';
import MainLayout from '../../layout/MainLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ShopPage = lazy(() => import('../pages/ShopPage'));
const SingleProductPage = lazy(() => import('../pages/SingleProductPage'));
const CheckOutPage = lazy(() => import('../pages/CheckOutPage'));

function App() {
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
