import { ProductItemType } from "../productListReducer/types";
export interface FiltersState {
    sortParams: Record<string, string>;
    category: string;
    page: number;
    filtersBrand: Array<string>;
    filtersType: Array<string>;
    filteredList: Array<ProductItemType>;
    priceFilter: number[];
    isFiltered: boolean;
}