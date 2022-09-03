import { FC } from 'react';
import { useEffect } from 'react';
import cartTitleImg from '../../assets/headers/cart.svg';
import Cart from '../Cart/Cart';

const CartPage: FC = () => {
    
    useEffect(() => {
        window.scrollTo(0,0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <>
            <div className="pageTitle pageTitle--cart">
                <img src={cartTitleImg} alt="cart" />
            </div>
            <div className="container">
                <Cart/>
            </div>
        </>
    );
}

export default CartPage;