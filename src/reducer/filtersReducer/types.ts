import { ProductItemType } from "../productListReducer/types";

export type PieceItem = {
    start: number;
    end: number;
};
export interface FiltersState {
    sortParams: Record<string, string>;
    category: string;
    page: number;
    filtersBrand: Array<string>;
    filtersType: Array<string>;
    filteredList: Array<ProductItemType>;
    priceFilter: number[];
    isFiltered: boolean;
    piece: PieceItem;
}