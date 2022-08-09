import { useSelector } from 'react-redux';
import FilterSort from './FilterSort/FilterSort';
import styles from './filtersHeader.module.scss';

const FiltersHeader = () => {
    const { productList } = useSelector(state => state.products);

    return (
        <div className={styles.header}>
            <div>
                Showing {productList.length < 9 ? productList.length : 9} from {productList.length} products</div>
            <FilterSort/>
        </div>
    )
}

export default FiltersHeader;