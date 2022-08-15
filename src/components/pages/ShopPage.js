import { useEffect } from 'react';
import products from '../../assets/headers/products.svg';
import Categories from '../Categories/Categories';
import ProductList from '../ProductList/ProductList';
import FiltersSidebar from '../FiltersSidebar/FiltersSidebar';
import FiltersHeader from '../FiltersHeader/FiltersHeader';

import styles from './shopPage.module.scss';

const ShopPage = () => {
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