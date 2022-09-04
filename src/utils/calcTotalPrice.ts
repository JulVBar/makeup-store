import { CartItemType } from "../reducer/cartReducer/types";

export const calcTotalPrice = (items: CartItemType[]): number => {
    return +(items.reduce((sum, obj) => obj.price * obj.count + sum, 0)).toFixed(2);
};