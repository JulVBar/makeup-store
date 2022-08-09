import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';

import './productItem.scss';

const ProductItem = ({
    id,
    name,
    image_link,
    brand,
    price
}) => {

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
                    <Link key={id} to={`/product/${id}`}>
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
                <div className="product-name">{name}</div>
                <div className="product-brand">{brand}</div>
                <div className="product-price">${price}</div>
            </div>
            <div className="product-footer">
                <Link key={id} to={`/product/${id}`}>
                    <button className="product-btn button-green">Add to cart</button>
                </Link>
            </div>
        </li>
    )
}

export default ProductItem;