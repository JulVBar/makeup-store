import { SortParamsItem } from "../filtersReducer/types";

export type PieceItem = {
    start: number;
    end: number;
};

export type ProductColorItem = {
    colour_name: string;
    hex_value: string;
};

export type ProductItem = {
    image_link: string;
    name: string;
    price: number;
    description: string;
    brand: string;
    category: string;
    product_type: string;
    product_colors: Array<ProductColorItem>;
    tag_list: Array<string>;
}

export interface ProductState {
    allProducts: Array<ProductItem>;
    piece: PieceItem;
}

export interface ParamsObj {
    sort: string;
    order: string;
    category: string;
    name: string;
}
