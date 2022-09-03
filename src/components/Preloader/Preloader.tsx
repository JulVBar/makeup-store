import { FC } from 'react';
import styles from './preloader.module.scss';

const Preloader: FC = () => {
    return (
        <div className={styles.preloader}>
            <div className={styles.preloaderText}>
                <h1 className={styles.preloaderTitle}>Natural Cosmetics</h1>
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        </div>
    )
}

export default Preloader;