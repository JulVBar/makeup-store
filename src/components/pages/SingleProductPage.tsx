import { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';
import styles from './singleProductPage.module.scss';

const ShopPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className="container">
            <div className={styles.button}>
                <Link to='/shop'>
                <div className={styles.buttonArrow}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.buttonText}>Back to shop</div>
                </Link>
            </div>
            <SingleProduct/>
        </div>
    );
}

export default ShopPage;