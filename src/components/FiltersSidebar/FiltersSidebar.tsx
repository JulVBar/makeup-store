import { useState, useEffect, useCallback, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredList,
    setFilterBrand,
    setFilterType,
    setCategoryReset,
    setFilteredListReset,
    setFirstPage,
    setPriceFilterReset,
    setResetActiveList } from '../../reducer/filtersReducer/filtersSlice';
import { sortByFilters } from '../../utils/sortingFunction';
import { filtersSelector } from '../../reducer/filtersReducer/selectors';
import { productsSelector } from '../../reducer/productListReducer/selectors';
import FiltersItem from './FiltersItem/FiltersItem';
import PriceSlider from './PriceSlider/PriceSlider';
import styles from './filtersSidebar.module.scss';

const FiltersSidebar: FC = () => {
    const { allProducts } = useSelector(productsSelector);
    const { filtersBrand, filtersType, category, priceFilter } = useSelector(filtersSelector);
    const dispatch = useDispatch();
    const [brandCheckboxes, setBrandCheckboxes] = useState<Array<string>>([]);
    const [typesCheckboxes, setTypeCheckboxes] = useState<Array<string>>([]);
    const isCategoryActive = !!(category);
    const isResetButtonActive = brandCheckboxes.length > 0 || typesCheckboxes.length > 0 || priceFilter[0] !== 0 || priceFilter[1] !== 100;
    let brands = [...new Set(allProducts.map(el => el.brand))].sort();
    let types = [...new Set(allProducts.map(el => el.product_type))].sort();

    useEffect(()=>{
        dispatch(setFilterBrand(brands));
        dispatch(setFilterType(types));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, allProducts]);

    useEffect(()=>{
        setBrandCheckboxes([]);
        setTypeCheckboxes([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    const onHandleReset = useCallback(() => {
        setBrandCheckboxes([]);
        setTypeCheckboxes([]);
        dispatch(setFilteredListReset());
        dispatch(setPriceFilterReset());
        dispatch(setFilterBrand(brands));
        dispatch(setFilterType(types));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch, allProducts]);

    const onHandleChange = useCallback(
        (item: string, type: string) => {
            const checkboxes = type === "brand" ? brandCheckboxes : typesCheckboxes;
            const findIdx = checkboxes.indexOf(item);
    
            if (findIdx > -1) {
                checkboxes.splice(findIdx, 1);
            } else {
                checkboxes.push(item);
            }
    
            type === "brand" ? setBrandCheckboxes([...checkboxes]) : setTypeCheckboxes([...checkboxes]);

            let newList = sortByFilters(brandCheckboxes, typesCheckboxes, allProducts);

            dispatch(setFilteredList(newList));
    
            if (type === "type") {
                dispatch(setFilterBrand([...new Set(newList.map(el => el.brand))].sort()));
            } 
            if (typesCheckboxes.length < 1) {
                dispatch(setFilterBrand([...new Set(allProducts.map(el => el.brand))].sort()));
            }
            if (type === "brand") {
                dispatch(setFilterType([...new Set(newList.map(el => el.product_type))].sort()));
            } 
            if (brandCheckboxes.length < 1) {
                dispatch(setFilterType([...new Set(allProducts.map(el => el.product_type))].sort()));
            }
            dispatch(setResetActiveList());
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [typesCheckboxes,
            brandCheckboxes,
            allProducts,
            filtersBrand,
            filtersType,
            sortByFilters,
            dispatch]);

    const onShowAllProducts = useCallback(
        () => {
            dispatch(setCategoryReset());
            dispatch(setFilteredListReset());
            dispatch(setResetActiveList());
            dispatch(setPriceFilterReset());
            setBrandCheckboxes([]);
            setTypeCheckboxes([]);
        }, [dispatch]);

    return (
        <div className={styles.filters}>
            {isCategoryActive && (
                <div className={styles.resetCategoryBtn}>
                    <button
                        type="button"
                        onClick={onShowAllProducts}
                    >
                        Show All Products
                    </button>
            </div>
            )}
            
            <div className={styles.filterBtn}>
                <button
                    type="button"
                    className="button-green"
                    onClick={onHandleReset}
                    disabled={!isResetButtonActive}
                >
                    Reset All Filters
                </button>
            </div>
            
            <div className={styles.filter}>
                <h3 className={styles.filterTitle}>Brand</h3>
                <ul className={styles.filterList}>
                    {brands.map((item) => (
                        <FiltersItem 
                            key={item}
                            value={item}
                            name={item}
                            count={allProducts.filter(product => product.brand === item).length}
                            isEnable={filtersBrand.includes(item)}
                            checked={brandCheckboxes.includes(item) && filtersBrand.includes(item)}
                            onChange={()=>{onHandleChange(item, "brand")}}
                        />
                    ))}
                </ul>
            </div>
            <div className={styles.filter}>
                <h3 className={styles.filterTitle}>Type</h3>
                <ul className={styles.filterList}>
                    {types.map((item) => (
                        <FiltersItem 
                            key={item}
                            value={item}
                            name={item}
                            count={allProducts.filter(product => product.product_type === item).length}
                            isEnable={filtersType.includes(item)}
                            checked={typesCheckboxes.includes(item) && filtersType.includes(item)}
                            onChange={()=>{onHandleChange(item, "type")}}
                        />
                    ))}
                </ul>
            </div>
            <div className={styles.filter}>
                <h3 className={styles.filterTitle}>Price</h3>
                <PriceSlider/>
            </div>
            
        </div>
    )
}

export default FiltersSidebar;