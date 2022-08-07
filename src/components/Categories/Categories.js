import { CATEGORIES } from '../../constants/categoriesConstants';



import './categories.scss';

const Categories = () => {
    return (
        <ul className='categories'>
            {CATEGORIES.map((item, index) => (
                <li 
                    className="categories-item"
                    key={`${item.name}-${index}`}
                >
                    <div className="categories-img">
                        <img className="img-cover" src={item.imgPath} alt={item.name} />
                    </div>
                    <div className="categories-img categories-img--hover">
                        <img className="img-cover" src={item.imgPathHover} alt={item.name} />
                    </div>
                    <div className="categories-name">{item.name} (<span>34</span>)</div>
                </li>
            ))}
        </ul>
    )
}

export default Categories;