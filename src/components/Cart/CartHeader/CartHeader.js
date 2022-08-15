import styles from './cartHeader.module.scss';

const CartHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.product}>Product</div>
            <ul>
                <li>Price</li>
                <li>Quantity</li>
                <li>Total</li>
            </ul>
        </div>
    );
}

export default CartHeader;