import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../reducer/filtersReducer/filtersSlice';
import { setFirstPage } from '../../reducer/filtersReducer/filtersSlice';
import { filtersSelector } from '../../reducer/filtersReducer/selectors';
import { CATEGORIES } from '../../constants/categoriesConstants';

import './categories.scss';

const Categories = () => {
    const { category } = useSelector(filtersSelector);
    const dispatch = useDispatch();

    const onCategoryChange = (category: string): void => {
        dispatch(setCategory(category));
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