import { useSelector } from 'react-redux';
import { productsSelector } from '../../reducer/productListReducer/selectors';
import { filtersSelector } from '../../reducer/filtersReducer/selectors';
import FilterSort from './FilterSort/FilterSort';
import styles from './filtersHeader.module.scss';
// использовать лэйаут хук
const FiltersHeader = () => {
    const { allProducts } = useSelector(productsSelector);
    const { filteredList } = useSelector(filtersSelector);
    const isFiltredList = filteredList.length > 0;
    const { page } = useSelector(state => state.filters);
    
    return (
        <div className={styles.header} id="filtersHeader">
            <div className={styles.headerText}>
                Find {isFiltredList ? filteredList.length : allProducts.length} products
            </div>
            <div className={styles.headerText}>
                Showing {page} from {Math.ceil(isFiltredList ? 
                    filteredList.length / 9 : allProducts.length / 9)} 
                pages
            </div>
            <FilterSort/>
        </div>
    )
}

export default FiltersHeader;