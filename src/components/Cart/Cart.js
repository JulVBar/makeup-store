import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartHeader from './CartHeader/CartHeader';
import CartItem from './CartItem/CartItem';
import NotFound from '../NotFound/NotFound';
import { EMPTY_CART } from '../../constants/emptyLayouts';
import styles from './cart.module.scss';

const Cart = () => {
    const { items, totalPrice } = useSelector(state => state.cart);

    return (
        <div className="container">
            {items.length > 0 ? (
                <>
                    <CartHeader/>
                    <ul>
                        {items.map((item, index) => (
                            <CartItem
                                key={item.vendor_code}
                                item={item}
                            />
                        ))}
                    </ul>
                    <div className={styles.cartFooter}>
                        <div className={styles.cartTotal}>Order total: <span>${totalPrice}</span> </div>
                        <div>
                            <Link to={'/checkout'}>
                                <button className="button-green">Proceed to checkout</button>
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <NotFound
                    title={EMPTY_CART.title}
                    img={EMPTY_CART.img}
                    button={EMPTY_CART.button_text}
                    link={EMPTY_CART.link_to}
                />
            )}
        </div>
    );
}

export default Cart;