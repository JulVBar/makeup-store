import SingleProduct from '../SingleProduct/SingleProduct';


import './shopPage.scss';

const ShopPage = () => {
    return (
        <>
            <div className="pageTitle">
                <h1>SingleProductPage</h1>
            </div>
            <div className="container">
                <SingleProduct/>
            </div>
        </>
    );
}

export default ShopPage;