export type PieceItem = {
    start: number;
    end: number;
};

export type ProductColorItem = {
    colour_name: string;
    hex_value: string;
};

export type ProductItemType = {
    id: number;
    raiting: number;
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
    allProducts: Array<ProductItemType>;
    isFetching: boolean;
    piece: PieceItem;
}
