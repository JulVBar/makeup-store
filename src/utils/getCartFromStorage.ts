import { calcTotalPrice } from './calcTotalPrice';
import { CartItemType } from "../reducer/cartReducer/types";

export const getCartFromStorage = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);

    return {
        items: items as CartItemType[],
        totalPrice,
    };
};