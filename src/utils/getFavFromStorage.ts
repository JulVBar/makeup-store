
import { ProductItemType } from '../reducer/productListReducer/types';

export const getFavFromStorage = () => {
    const data = localStorage.getItem('favourite');
    const favs = data ? JSON.parse(data) : [];

    return {
        favs: favs as ProductItemType[],
    };
};
