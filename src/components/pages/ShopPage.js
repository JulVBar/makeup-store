import products from '../../assets/headers/products.svg';
import Categories from '../Categories/Categories';
import ProductList from '../ProductList/ProductList';
import Filters from '../Filters/Filters';

import './shopPage.scss';

const ShopPage = () => {
    return (
        <>
            <div className="pageTitle">
                <img src={products} alt="categories" />
            </div>
            <div className="container">
                <Categories />
                <div className="shop-body">
                    <Filters />
                    <div className="shop-content">
                        <h1>Filters Header</h1>
                        <ProductList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopPage;