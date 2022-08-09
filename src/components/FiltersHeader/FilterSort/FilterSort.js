import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortName, setSort, setOrder } from '../../../reducer/filtersSlice';
import { setStartFetching } from '../../../reducer/productListSlice';
import { SORT_PARAMS } from '../../../constants/filtersConstants';
import Icon from '../../Icon/Icon';
import styles from './filterSort.module.scss';

const FilterSort = () => {
    const { sortName } = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const onClickListItem = (item) => {
        dispatch(setSortName(item.name));
        dispatch(setSort(item.sort));
        dispatch(setOrder(item.order));
        dispatch(setStartFetching());
        setOpen(false);
    };

    return (
        <div className={styles.sortWrap}>
            <div 
                className={styles.sortLabel}
                onClick={() => setOpen(!open)}
            >
                {sortName}
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