import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortParams,
        setSortByPriceToHigh,
        setSortByPriceToLow,
        setSortByRaiting,
        setSortByDefault} from '../../../reducer/filtersSlice';
import { SORT_PARAMS } from '../../../constants/filtersConstants';
import Icon from '../../Icon/Icon';
import styles from './filterSort.module.scss';

const FilterSort = () => {
    const { sortParams, filteredList } = useSelector(state => state.filters);
    const isFilteredList = filteredList.length > 0;
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const onClickListItem = useCallback(
        (item) => {
            if (isFilteredList) {
                if (item.name === 'Sort by price: low to high') dispatch(setSortByPriceToHigh());
                if (item.name === 'Sort by price: high to low') dispatch(setSortByPriceToLow());
                if (item.name === 'Sort by popularity') dispatch(setSortByRaiting());
                if (item.name === 'Default sorting') dispatch(setSortByDefault());
            } else {
                dispatch(setSortParams(item));
            }
            setOpen(false);
        }, [dispatch, isFilteredList]);

    return (
        <div className={styles.sortWrap}>
            <div 
                className={styles.sortLabel}
                onClick={() => setOpen(!open)}
            >
                {sortParams.name}
                <Icon
                    name='sort_down'
                    className={styles.sortIcon}
                />
            </div>
            {open && (<ul className={styles.sortList}>
                {SORT_PARAMS.map((item, index) => (
                    <li 
                        className={styles.sortItem}
                        key={`${item.name}-${index}`}
                        onClick={() => onClickListItem(item)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>)
            }
        </div>
    )
}

export default FilterSort;