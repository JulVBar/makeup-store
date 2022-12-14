import { FC } from 'react';
import classnames from 'classnames';
import styles from './filtersItem.module.scss';

type FiltersItemProps = {
    name: string;
    count: number;
    value: string;
    checked: boolean;
    isEnable: boolean;
    onChange: () => void;
}

const FiltersItem: FC<FiltersItemProps> = ({ name, count, value, checked, onChange, isEnable }) => {
    let cn = classnames(styles.filterName, !isEnable ? styles.disabled : '');
    return (
        <li className={styles.filterItem}>
            <label className={styles.filterLabel} htmlFor={name}>
                <input 
                    className={styles.filterCheckbox}
                    type="checkbox"
                    value={value}
                    id={name}
                    checked={checked}
                    onChange={onChange}
                    disabled={!count ? true : false}
                />
                <span className={cn}>{name}</span>
                <span className={styles.filterQuant}>{count === 0 ? '' : count}</span>
                <span className={styles.filterFalseCheckbox}></span>
            </label>
        </li>
    )
}

export default FiltersItem;