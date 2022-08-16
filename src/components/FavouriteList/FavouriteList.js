import { useSelector } from 'react-redux';
import ProductItem from '../ProductList/ProductItem/ProductItem';

import styles from './favouriteList.module.scss';

const FavouriteList = () => {
    const { favs } = useSelector(state => state.favourite);

    return (
        <ul className={styles.favouriteList}>
            {favs.map((item, index) => (
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
    )
}

export default FavouriteList;