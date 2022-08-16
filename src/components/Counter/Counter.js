import { useDispatch } from 'react-redux';
import { minusItem, addItem } from '../../reducer/cartSlice';
import styles from './counter.module.scss';

const Counter = ({item}) => {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(addItem(item));
    };
    
    const onClickMinus = () => {
        dispatch(minusItem(item));
    };

    return (
        <div className={styles.counter}>
            <div onClick={onClickMinus}>-</div>
            <div>{item.count}</div>
            <div onClick={onClickPlus}>+</div>
        </div>
    )
}

export default Counter;