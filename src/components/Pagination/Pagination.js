import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../reducer/filtersSlice';
import { setStartFetching } from '../../reducer/productListSlice';
import './pagination.scss';

const Pagination = ({allProducts}) => {
    const { page } = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const pages = [...Array(Math.ceil(allProducts.length / 9)).keys()].map(x => ++x);

    const onPageChange = useCallback(
        (item) => {
            dispatch(setPage(item));
            dispatch(setStartFetching());
            window.scrollTo(0, 0);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

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