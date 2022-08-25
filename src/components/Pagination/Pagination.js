import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../reducer/filtersSlice';
import { setPiece } from '../../reducer/productListSlice';
import './pagination.scss';

const Pagination = ({allProducts}) => {
    const { page, filteredList } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const isFilteredList= filteredList.length > 0;
    const pages = isFilteredList ? 
        [...Array(Math.ceil(filteredList.length / 9)).keys()].map(x => ++x) 
        : [...Array(Math.ceil(allProducts.length / 9)).keys()].map(x => ++x);
    
    const onPageChange = (item) => {
        dispatch(setPiece({
            start: 9 * (item - 1),
            end: 9 * (item)
        }));
        dispatch(setPage(item));
        document.getElementById('filtersHeader').scrollIntoView({block: "center", behavior: "smooth"});
    }

    return (
        <ul className="page-list">
            {pages.map((item, index) => (
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