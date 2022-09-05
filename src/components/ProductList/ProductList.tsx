import { useSelector } from 'react-redux';
import { FC } from 'react';
import { productsSelector } from '../../reducer/productListReducer/selectors';
import { filtersSelector } from '../../reducer/filtersReducer/selectors';
import ProductItem from './ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

import './productList.scss';

const ProductList: FC = () => {
    const { allProducts, isFetching, piece, priceFilter } = useSelector(productsSelector);
    const { filteredList } = useSelector(filtersSelector);
    const isFilteredList = filteredList.length > 0;
    const { start, end } = piece;

    return (
        <>
            {isFetching ? <Loader/> : (
                <>
                    <ul className="product-list">
                        {isFilteredList ? (
                            filteredList.filter(item=>(item.price >= priceFilter[0] && item.price <= priceFilter[1])).slice(start, end).map((item) => (
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
                            ))
                        ) : (
                            allProducts.filter(item=>(item.price >= priceFilter[0] && item.price <= priceFilter[1])).slice(start, end).map((item, index) => (
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
                            ))
                        ) }
                    </ul>
                        <Pagination allProducts={allProducts}
                    />
                </>
            )}
        </>
    )
}

export default ProductList;