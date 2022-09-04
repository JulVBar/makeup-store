import { FC } from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../../reducer/cartReducer/selectors';
import { favouriteSelector } from '../../../reducer/favoutiteReducer/selectors';
import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';
import styles from './headerIcons.module.scss';

const HeaderIcons: FC = () => {
    const { items } = useSelector(cartSelector);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    const { favs } = useSelector(favouriteSelector);

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