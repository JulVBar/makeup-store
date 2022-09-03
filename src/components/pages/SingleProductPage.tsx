import { useEffect, FC } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const ShopPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
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