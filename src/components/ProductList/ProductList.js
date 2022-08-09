import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../reducer/productListSlice';
import ProductItem from './ProductItem/ProductItem';
import Skeleton from './ProductItem/Skeleton';
import Loader from '../Loader/Loader';

import './productList.scss';

const ProductList = () => {

    const { productList, isFetching } = useSelector(state => state.products);
    const { category, sort, order } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const url = `https://62f0bd3157311485d135bea7.mockapi.io/products?category=${category}&sortBy=${sort}&order=${order}`;
    
    useEffect(() => {
        dispatch(fetchProductList(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, isFetching])

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
        </>
        
    )
}

export default ProductList;