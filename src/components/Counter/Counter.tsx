import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { minusItem, addItem } from '../../reducer/cartReducer/cartSlice';
import { CartItemType } from '../../reducer/cartReducer/types';
import styles from './counter.module.scss';

type CounterProps = {
    item: CartItemType;
};

const Counter: FC<CounterProps> = ({item}) => {
    const dispatch = useDispatch();

    const onClickPlus = (): void => {
        dispatch(addItem(item));
    };
    
    const onClickMinus = (): void => {
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