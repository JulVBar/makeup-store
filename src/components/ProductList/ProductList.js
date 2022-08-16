import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList, fetchAllProducts } from '../../reducer/productListSlice';
import ProductItem from './ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

import './productList.scss';

const ProductList = () => {
    const { allProducts, productList, isFetching } = useSelector(state => state.products);
    const { category, sortParams, page } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const params = { ...sortParams, page, category };
    
    useEffect(() => {
        dispatch(fetchProductList(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetching, page]);

    useEffect(() => {
        dispatch(fetchAllProducts(category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
        {isFetching ? <Loader/> : (
            <ul className="product-list">
                {productList.map((item, index) => (
                    <ProductItem
                        key={item.id}
                        product={item}
                        id={item.id}
                        name={item.name}
                        image_link={item.image_link}
                        brand={item.brand}
                        productColors={item.product_colors}
                        price={item.price}
                    />
                ))}
            </ul>
            )}
            <Pagination
                allProducts={allProducts}
            />
        </>
    )
}

export default ProductList;