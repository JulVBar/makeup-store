import emptyCart from '../assets/misc/emptycart.jpg';
import emptyFav from '../assets/misc/nofavs.jpg';

type EmptyLayout = Record<string, string>;

export const EMPTY_CART: EmptyLayout = {
    title: 'The cart is empty!',
    img: emptyCart,
    button_text: 'Shopping now!',
    link_to: '/shop'
}

export const EMPTY_FAV: EmptyLayout = {
    title: 'Favourite list is empty!',
    img: emptyFav,
    button_text: 'Find something lovely!',
    link_to: '/shop'
}
