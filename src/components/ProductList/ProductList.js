import { useSelector } from 'react-redux';
import ProductItem from './ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

import './productList.scss';

const ProductList = () => {
    const { allProducts, isFetching, piece } = useSelector(state => state.products);
    const { filteredList } = useSelector(state => state.filters);
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