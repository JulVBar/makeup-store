import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../reducer/productListSlice';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

import './productList.scss';

const ProductList = () => {

    const { productList } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ul className="product-list">
            {productList.map((item, index) => (
                <li 
                    key={item.id}
                    className="product-item"
                >
                    <div className="product-header">
                        <div className="product-fav">
                            <Icon
                                name="fullheart"
                                className="product-icon-fav"
                            />
                        </div>
                        <div className="product-img">
                            <img className="img-cover" src={item.image_link} alt={item.name} />
                        </div>
                        <div className="product-img product-img--hover">
                            <div className="product-circle">
                                <Icon
                                    name='heart'
                                    className="product-icon"
                                />
                            </div>
                            <div className="product-circle">
                                <Icon
                                    name='eye'
                                    className="product-icon"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="product-body">
                        <div className="product-name">{item.name}</div>
                        <div className="product-brand">{item.brand}</div>
                        <div className="product-price">${item.price}</div>
                    </div>
                    <div className="product-footer">
                        <Link key={item.id} to={`/product/${item.id}`}>
                            <button className="product-btn button-green">Add to cart</button>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ProductList;