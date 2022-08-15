import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemById, addItem } from '../../../reducer/cartSlice';
import { Link } from 'react-router-dom';
import Counter from '../../Counter/Counter';
import Icon from '../../Icon/Icon';
import styles from './сartItem.module.scss';

const CartItem = ({
    id,
    name,
    image_link,
    pickedUpColor,
    price,
    count
}) => {
    
    // const cartItem = selectCartItemById(id);
    // const addedCount = cartItem ? cartItem.count : 0;

    return (
        <li className={styles.cartItem}>
            <div className={styles.product}>
                <div className={styles.deleteBtn}>
                    <Icon
                        name='trash'
                        className={styles.trashIcon}
                    />
                </div>
                <div className={styles.productItem}>
                    <div className={styles.productImg}>
                        <img className="img-cover" src={image_link} alt="1" />
                    </div>
                    <Link to={`/product/${id}`}>
                    <div className={styles.productInfo}>
                        <div className={styles.productName}>{name}</div>
                        <div className={styles.productColor}>
                            <div className={styles.color} style={{ background: pickedUpColor.hex_value}}></div>
                            <div className={styles.colorName}>{pickedUpColor.colour_name}</div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            <ul>
                <li className={styles.money}>${price}</li>
                <li>
                    <Counter/>
                </li>
                <li className={styles.money}>${price*count}</li>
            </ul>
        </li>
    );
}

export default CartItem;