import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../reducer/filtersReducer/filtersSlice';
import { setPiece } from '../../reducer/productListReducer/productListSlice';
import { filtersSelector } from '../../reducer/filtersReducer/selectors';
import { ProductItemType } from '../../reducer/productListReducer/types';
import './pagination.scss';

type PaginationProps = {
    allProducts: ProductItemType[];
}

const Pagination: FC<PaginationProps> = ({allProducts}) => {
    const { page, filteredList, priceFilter } = useSelector(filtersSelector);
    const dispatch = useDispatch();
    const isFilteredList= filteredList.length > 0;
    const pages: Array<number> = isFilteredList ? 
        [...Array(Math.ceil(filteredList
            .filter(item=>(item.price >= priceFilter[0] && item.price <= priceFilter[1])).length / 9)).keys()]
            .map(x => ++x) 
        : [...Array(Math.ceil(allProducts
            .filter(item=>(item.price >= priceFilter[0] && item.price <= priceFilter[1])).length / 9)).keys()]
            .map(x => ++x);
    
    const onPageChange = (item: number) => {
        dispatch(setPiece({
            start: 9 * (item - 1),
            end: 9 * (item)
        }));
        dispatch(setPage(item));
        document.getElementById('filtersHeader')?.scrollIntoView({block: "center", behavior: "smooth"});
    }

    return (
        <ul className="page-list">
            {pages.map((item) => (
                <li 
                    className={item === page ? "page-item  active" : "page-item"}
                    key={item}
                    onClick={()=>{onPageChange(item)}}
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default Pagination;