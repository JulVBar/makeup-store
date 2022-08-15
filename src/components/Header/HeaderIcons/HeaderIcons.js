import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';
import styles from './headerIcons.module.scss';

const HeaderIcons = () => {
    return (
        <div className={styles.iconContainer}>
            <div className={styles.iconWrap}>
                <Link to='/cart'>
                    <Icon
                        name='cart'
                        className={styles.icon}
                    />
                    <div className={styles.iconLabel}>
                        0
                    </div>
                </Link>
            </div>
            <div className={styles.iconWrap}>
                <Link to='/cart'>
                    <Icon
                        name='heart'
                        className={styles.icon}
                    />
                    <div className={styles.iconLabel}>
                        14
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HeaderIcons;