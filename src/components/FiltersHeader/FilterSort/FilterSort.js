import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortParams } from '../../../reducer/filtersSlice';
import { setStartFetching } from '../../../reducer/productListSlice';
import { SORT_PARAMS } from '../../../constants/filtersConstants';
import Icon from '../../Icon/Icon';
import styles from './filterSort.module.scss';

const FilterSort = () => {
    const { sortParams } = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const onClickListItem = (item) => {
        dispatch(setSortParams(item));
        dispatch(setStartFetching());
        setOpen(false);
    };

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