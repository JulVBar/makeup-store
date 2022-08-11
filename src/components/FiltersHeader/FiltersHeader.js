import { useSelector } from 'react-redux';
import FilterSort from './FilterSort/FilterSort';
import styles from './filtersHeader.module.scss';

const FiltersHeader = () => {
    const { allProducts } = useSelector(state => state.products);
    const { page } = useSelector(state => state.filters);

    return (
        <div className={styles.header}>
            <div>
                Find {allProducts.length} products
            </div>
            <div>
                Showing {page} from {Math.ceil(allProducts.length / 9)} pages
            </div>
            <FilterSort/>
        </div>
    )
}

export default FiltersHeader;