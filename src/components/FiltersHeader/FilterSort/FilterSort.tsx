import { useState, useCallback, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortParams,
        setSortByPriceToHigh,
        setSortByPriceToLow,
        setSortByRaiting,
        setSortByDefault} from '../../../reducer/filtersReducer/filtersSlice';
import { filtersSelector } from '../../../reducer/filtersReducer/selectors';
import { SORT_PARAMS } from '../../../constants/filtersConstants';
import Icon from '../../Icon/Icon';
import styles from './filterSort.module.scss';

const FilterSort: FC = () => {
    const { sortParams, filteredList } = useSelector(filtersSelector);
    const isFilteredList = filteredList.length > 0;
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const onClickListItem = useCallback(
        (item: Record<string, string>) => {
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