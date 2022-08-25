import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredList, setFilterBrand, setFilterType } from '../../reducer/filtersSlice';
import { sortByFilters } from '../../utils/sortingFunction';
import FiltersItem from './FiltersItem/FiltersItem';
import styles from './filtersSidebar.module.scss';

const FiltersSidebar = () => {
    const { allProducts } = useSelector(state => state.products);
    const { filtersBrand, filtersType } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const [brandCheckboxes, setBrandCheckboxes] = useState([]);
    const [typesCheckboxes, setTypeCheckboxes] = useState([]);

    const isResetButtonActive = brandCheckboxes.length > 0 || typesCheckboxes.length > 0;
    let brands = [...new Set(allProducts.map(el => el.brand))].sort();
    let types = [...new Set(allProducts.map(el => el.product_type))].sort();

    useEffect(()=>{
        dispatch(setFilterBrand(brands));
        dispatch(setFilterType(types));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, allProducts]);

    const onHandleReset = useCallback(() => {
        setBrandCheckboxes([]);
        setTypeCheckboxes([]);
        dispatch(setFilteredList([]));
        dispatch(setFilterBrand(brands));
        dispatch(setFilterType(types));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch, allProducts]);

    const onHandleChange = useCallback(
        (item, type) => {
            const checkboxes = type === "brand" ? brandCheckboxes : typesCheckboxes;
            const findIdx = checkboxes.indexOf(item);
    
            if (findIdx > -1) {
                checkboxes.splice(findIdx, 1);
            } else {
                checkboxes.push(item);
            }
    
            type === "brand" ? setBrandCheckboxes([...checkboxes]) : setTypeCheckboxes([...checkboxes]);
            
            dispatch(setFilteredList(sortByFilters(brandCheckboxes, typesCheckboxes, allProducts)));
    
            if (type === "type") {
                dispatch(setFilterBrand([...new Set(sortByFilters(brandCheckboxes, typesCheckboxes, allProducts)
                    .map(el => el.brand))].sort()));
            } 
            if (typesCheckboxes.length < 1) {
                dispatch(setFilterBrand([...new Set(allProducts.map(el => el.brand))].sort()));
            }
            if (type === "brand") {
                dispatch(setFilterType([...new Set(sortByFilters(brandCheckboxes, typesCheckboxes, allProducts)
                    .map(el => el.product_type))].sort()));
            } 
            if (brandCheckboxes.length < 1) {
                dispatch(setFilterType([...new Set(allProducts.map(el => el.product_type))].sort()));
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [typesCheckboxes,
            brandCheckboxes,
            allProducts,
            filtersBrand,
            filtersType,
            sortByFilters,
            dispatch]);

    return (
        <div className={styles.filters}>
            {isResetButtonActive && (
                <div className={styles.filterBtn}>
                    <button
                        type="button"
                        className="button-green"
                        onClick={onHandleReset}
                    >
                        Reset All Filters
                    </button>
                </div>
            )}
            <div className={styles.filter}>
                <h3 className={styles.filterTitle}>Brand</h3>
                <ul className={styles.filterList}>
                    {brands.map((item, i) => (
                        <FiltersItem 
                            key={item}
                            type="checkbox"
                            value={item}
                            name={item}
                            count={filtersBrand.includes(item) ? allProducts.filter(product => product.brand === item).length : ''}
                            checked={brandCheckboxes.includes(item)}
                            onChange={()=>{onHandleChange(item, "brand")}}
                        />
                    ))}
                </ul>
            </div>
            <div className={styles.filter}>
                <h3 className={styles.filterTitle}>Type</h3>
                <ul className={styles.filterList}>
                    {types.map((item, i) => (
                        <FiltersItem 
                            key={item}
                            type="checkbox"
                            value={item}
                            name={item}
                            count={filtersType.includes(item) ? allProducts.filter(product => product.product_type === item).length : ''}
                            checked={typesCheckboxes.includes(item)}
                            onChange={()=>{onHandleChange(item, "type")}}
                        />
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default FiltersSidebar;