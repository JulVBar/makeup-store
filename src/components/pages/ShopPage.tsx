import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { fetchAllProducts } from '../../reducer/productListReducer/productListSlice';
import products from '../../assets/headers/products.svg';
import Categories from '../Categories/Categories';
import ProductList from '../ProductList/ProductList';
import FiltersSidebar from '../FiltersSidebar/FiltersSidebar';
import FiltersHeader from '../FiltersHeader/FiltersHeader';
import { filtersSelector } from '../../reducer/filtersReducer/selectors';
import styles from './shopPage.module.scss';


const ShopPage = () => {
    const { category, sortParams } = useSelector(filtersSelector);
    const dispatch = useAppDispatch();
    const params = { ...sortParams, category };

    useEffect(() => {
        dispatch(fetchAllProducts(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, sortParams]);

    useEffect(() => {
        window.scrollTo(0,0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <>
            <div className="pageTitle">
                <img src={products} alt="categories" />
            </div>
            <div className="container">
                <Categories />
                <div className={styles.shopBody}>
                    <FiltersSidebar />
                    <div className={styles.shopContent}>
                        <FiltersHeader/>
                        <div className={styles.shopList}>
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopPage;