import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../reducer/cartSlice';
import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';

import './productItem.scss';

const ProductItem = ({
    id,
    name,
    image_link,
    brand,
    productColors,
    price
}) => {
    const [activeColor, setActiveColor] = useState(productColors[0]);
    const dispatch = useDispatch();

    const onColorClick = (color) => {
        setActiveColor(color);
    }

    const onClickAdd = () => {
        const item = {
            id,
            name,
            image_link,
            brand,
            price,
            pickedUpColor: activeColor,
            count: 0,
        };
        dispatch(addItem(item));
    };

    return (
        <li className="product-item">
            <div className="product-header">
                <div className="product-fav">
                    <Icon
                        name="fullheart"
                        className="product-icon-fav"
                    />
                </div>
                <div className="product-img">
                    <img className="img-cover" src={image_link} alt={name} />
                </div>
                <div className="product-img product-img--hover">
                    <div className="product-circle">
                        <Icon
                            name='heart'
                            className="product-icon"
                        />
                    </div>
                    <Link to={`/product/${id}`}>
                        <div className="product-circle">
                            <Icon
                                name='eye'
                                className="product-icon"
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="product-body">
                <div className="product-title">
                    <Link to={`/product/${id}`}>
                        <div className="product-name">{name}</div>
                    </Link>
                    <div className="product-brand">{brand}</div>
                </div>
                <ul className="product-palet">
                    {productColors.map((color, index) => (
                        <li
                            key={`${color.name}-${index}`}  
                            className={activeColor.hex_value === color.hex_value ? "active" : ""}
                            onClick={()=>{onColorClick(productColors[index])}}
                        >
                            <div style={{ background: color.hex_value}}></div>
                        </li>
                    ))}
                </ul>
                <div className="product-price">${price}</div>
            </div>
            <div className="product-footer">
                <button
                    onClick={onClickAdd}
                    className="product-btn button-green"
                >
                    Add to cart
                </button>
            </div>
        </li>
    )
}

export default ProductItem;

