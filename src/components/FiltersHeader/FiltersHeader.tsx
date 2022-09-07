import { FC } from 'react';
import { useSelector } from 'react-redux';
import { productsSelector } from '../../reducer/productListReducer/selectors';
import { filtersSelector } from '../../reducer/filtersReducer/selectors';
import FilterSort from './FilterSort/FilterSort';
import styles from './filtersHeader.module.scss';

const FiltersHeader: FC = () => {
    const { allProducts } = useSelector(productsSelector);
    const { filteredList, page, priceFilter } = useSelector(filtersSelector);
    const isFilteredList = filteredList.length > 0;
    const filteredAmount = filteredList.filter(item=>(item.price >= priceFilter[0] && item.price <= priceFilter[1])).length;
    const allProductsAmount = allProducts.filter(item=>(item.price >= priceFilter[0] && item.price <= priceFilter[1])).length;
    const isPages = filteredAmount > 0 || allProductsAmount > 0;

    return (
        <div className={styles.header} id="filtersHeader">
            <div className={styles.headerText}>
                Find {isFilteredList ? filteredAmount : allProductsAmount} products
            </div>
            <div className={styles.headerText}>
                Showing {isPages ? page : 0} from {Math.ceil(isFilteredList ? 
                    filteredAmount / 9 : allProductsAmount / 9)} 
                pages
            </div>
            <FilterSort/>
        </div>
    )
}

export default FiltersHeader;