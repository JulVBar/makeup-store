import styles from './counter.module.scss';

const Counter = () => {
    return (
        <div className={styles.counter}>
            <div>-</div>
            <div>1</div>
            <div>+</div>
        </div>
    )
}

export default Counter;