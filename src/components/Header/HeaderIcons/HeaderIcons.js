import Icon from '../../Icon/Icon';
import styles from './headerIcons.module.scss';

const HeaderIcons = () => {
    return (
        <div className={styles.iconContainer}>
            <div className={styles.iconWrap}>
                <Icon
                    name='cart'
                    className={styles.icon}
                />
                <div className={styles.iconLabel}>
                    0
                </div>
            </div>
            <div className={styles.iconWrap}>
                <Icon
                    name='heart'
                    className={styles.icon}
                />
                <div className={styles.iconLabel}>
                    14
                </div>
            </div>
        </div>
    )
}

export default HeaderIcons;