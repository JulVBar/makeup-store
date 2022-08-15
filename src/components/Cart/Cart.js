import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemById, addItem } from '../../reducer/cartSlice';
import { Link } from 'react-router-dom';
import CartHeader from './CartHeader/CartHeader';
import CartItem from './CartItem/CartItem';
import styles from './cart.module.scss';

const Cart = () => {
    const { items, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    return (
        <>
        <div className="container">
            <CartHeader/>
            <ul>
                {items.map((item, index) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image_link={item.image_link}
                        pickedUpColor={item.pickedUpColor}
                        price={item.price}
                        count={item.count}
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
        </div>
            
        </>
    );
}

export default Cart;