import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../../layout/MainLayout';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import CheckOutPage from '../pages/CheckOutPage';
import SingleProductPage from '../pages/SingleProductPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<HomePage />} />
                <Route
                    path="shop"
                    element={
                    <Suspense fallback={<div>Идёт загрузка магазина...</div>}>
                        <ShopPage />
                    </Suspense>
                    }
                />
                <Route
                    path="checkout"
                    element={
                    <Suspense fallback={<div>Идёт загрузка магазина...</div>}>
                        <SingleProductPage />
                    </Suspense>
                    }
                />
                <Route
                    path="product/:id"
                    element={
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                        <SingleProductPage />
                        </Suspense>
                    }
                    />
            </Route>
        </Routes>
    );
}

export default App;
