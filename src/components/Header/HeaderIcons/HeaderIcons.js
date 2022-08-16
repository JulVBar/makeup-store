import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';
import styles from './headerIcons.module.scss';

const HeaderIcons = () => {
    const { items } = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    const { favs } = useSelector(state => state.favourite);

    return (
        <div className={styles.iconContainer}>
            <div className={styles.iconWrap}>
                <Link to='/cart'>
                    <Icon
                        name='cart'
                        className={styles.icon}
                    />
                    <div className={styles.iconLabel}>
                        {items.length > 0 ? totalCount : 0}
                    </div>
                </Link>
            </div>
            <div className={styles.iconWrap}>
                <Link to='/favourite'>
                    <Icon
                        name='heart'
                        className={styles.icon}
                    />
                    <div className={styles.iconLabel}>
                        {favs? favs.length : 0}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HeaderIcons;