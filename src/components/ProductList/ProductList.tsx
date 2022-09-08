import { useSelector } from 'react-redux';
import { FC } from 'react';
import { productsSelector } from '../../reducer/productListReducer/selectors';
import { filtersSelector } from '../../reducer/filtersReducer/selectors';
import ProductItem from './ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import './productList.scss';

const ProductList: FC = () => {
    const { allProducts, isFetching } = useSelector(productsSelector);
    const { filteredList, priceFilter, piece } = useSelector(filtersSelector);
    const isFilteredList = filteredList.length > 0;
    const filteredProducts = filteredList.filter(item=>(item.price >= priceFilter[0] && item.price <= priceFilter[1]));
    const fetchedProducts = allProducts.filter(item=>(item.price >= priceFilter[0] && item.price <= priceFilter[1]));
    const isEmptyList = !(isFilteredList ? filteredProducts.length : fetchedProducts.length);
    const { start, end } = piece;

    return (
        <>
            {isFetching ? <Loader/> : (
                <>
                    {isEmptyList ? (<div className="empty-product-list">No filtered results</div>) : (
                        <ul className="product-list" id="product-list">
                            {isFilteredList ? (
                                filteredProducts
                                .slice(start, end)
                                .map((item) => (
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
                                fetchedProducts
                                .slice(start, end)
                                .map((item) => (
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
                            )}
                        </ul>
                    )}
                    <Pagination allProducts={allProducts} />
                </>
            )}
        </>
    )
}

export default ProductList;