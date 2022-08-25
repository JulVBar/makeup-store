import classnames from 'classnames';
import styles from './filtersItem.module.scss';

const FiltersItem = ({ name, count, value, checked, onChange }) => {
    let cn = classnames(styles.filterName, !count ? styles.disabled : '');
    return (
        <li className={styles.filterItem}>
            <label className={styles.filterLabel} htmlFor={name}>
                <input 
                    className={styles.filterCheckbox}
                    type="checkbox"
                    value={value}
                    id={name}
                    count={count}
                    checked={checked}
                    onChange={onChange}
                    disabled={!count ? true : false}
                />
                <span className={cn}>{name}</span>
                <span className={styles.filterQuant}>{count}</span>
                <span className={styles.filterFalseCheckbox}></span>
            </label>
        </li>
    )
}

export default FiltersItem;