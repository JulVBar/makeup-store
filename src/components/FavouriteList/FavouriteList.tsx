import { useSelector } from 'react-redux';
import { FC } from 'react';
import ProductItem from '../ProductList/ProductItem/ProductItem';
import { favouriteSelector } from '../../reducer/favoutiteReducer/selectors';
import styles from './favouriteList.module.scss';

const FavouriteList: FC = () => {
    const { favs } = useSelector(favouriteSelector);

    return (
        <ul className={styles.favouriteList}>
            {favs.map((item) => (
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