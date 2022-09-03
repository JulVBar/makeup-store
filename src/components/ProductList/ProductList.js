import { useSelector } from 'react-redux';
import { productsSelector } from '../../reducer/productListReducer/selectors';
import { filtersSelector } from '../../reducer/filtersReducer/selectors';
import ProductItem from './ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

import './productList.scss';

const ProductList = () => {
    const { allProducts, isFetching, piece } = useSelector(productsSelector);
    const { filteredList } = useSelector(filtersSelector);
    const isFilteredList = filteredList.length > 0;
    const { start, end } = piece;

    return (
        <>
            {isFetching ? <Loader/> : (
                <>
                    <ul className="product-list">
                        {isFilteredList ? (
                            isFilteredList && filteredList.slice(start, end).map((item, index) => (
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
                            allProducts.slice(start, end).map((item, index) => (
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