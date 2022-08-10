import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList, fetchAllProducts } from '../../reducer/productListSlice';
import { setProductsOnPage } from '../../reducer/filtersSlice';
import ProductItem from './ProductItem/ProductItem';
import Skeleton from './ProductItem/Skeleton';
import Loader from '../Loader/Loader';

import './productList.scss';

const ProductList = () => {
    const { productList, isFetching } = useSelector(state => state.products);
    const { category, sortParams, productsOnPage } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const params = { ...sortParams, productsOnPage, category };

    useEffect(() => {
        dispatch(fetchProductList(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetching, productsOnPage]);

    useEffect(() => {
        dispatch(fetchAllProducts(category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onLoadingMore = useCallback(
        () => {
            const newLimit = productsOnPage + 3;
            dispatch(setProductsOnPage(newLimit));
        },
    [productsOnPage],);

    return (
        <>
        {isFetching ? <Loader/> : (
            <ul className="product-list">
                {productList.map((item, index) => (isFetching ? <Skeleton key={item.id}/> : (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image_link={item.image_link}
                        brand={item.brand}
                        price={item.price}
                    />)
                ))}
            </ul>
            )}
            <div className="product-list-load-more">
                <button 
                    className="button-green"
                    onClick={onLoadingMore}
                >
                        Load More
                </button>
            </div>
        </>
        
    )
}

export default ProductList;