import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../reducer/filtersSlice';
import { setFirstPage } from '../../reducer/filtersSlice';
import { CATEGORIES } from '../../constants/categoriesConstants';

import './categories.scss';

const Categories = () => {
    const { category } = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const onCategoryChange = (item) => {
        dispatch(setCategory(item));
        dispatch(setFirstPage());
    }
    
    return (
        <ul className="categories">
            {CATEGORIES.map((item, index) => (
                <li 
                    className={category === item.name ? "categories-item active" : "categories-item"}
                    key={`${item.name}-${index}`}
                    onClick={() => onCategoryChange(item.name)}
                >
                    <div className="categories-img">
                        <img className="img-cover" src={item.imgPath} alt={item.name} />
                    </div>
                    <div className="categories-img categories-img--hover">
                        <img className="img-cover" src={item.imgPathHover} alt={item.name} />
                    </div>
                    <div className="categories-name">{item.name}</div>
                </li>
            ))}
        </ul>
    )
}

export default Categories;