import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductItem } from '../../reducer/productListReducer/types';
import axios from 'axios';

import './singleProduct.scss';

const SingleProduct: FC = () => {
    const [product, setProduct] = useState<ProductItem>();

    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axios.get('https://62f0bd3157311485d135bea7.mockapi.io/products/' + id);
                setProduct(response.data);
            } catch (error) {
                alert('Ошибка при получении продукта!');
                navigate('/'); 
                // navigate('/shop');
            }
        }
    
    fetchProduct();
    }, [id, navigate]);

    if (!product) {
        return <>Загрузка...</>;
    }

    return (
        <div className="singleprod">
            <div className="singleprod-body">
                <div className="singleprod-picture">
                    <img className="img-cover" src={product.image_link} alt="Product Name" />
                </div>
                <div className="singleprod-content">
                    <div className="singleprod-info">
                        <div className="singleprod-name">{product.name}</div>
                        <div className="singleprod-price">${product.price}</div>
                        <div className="singleprod-description">{product.description}</div>
                        <div className="singleprod-brand">Brand: <span>{product.brand}</span></div>
                        <div className="singleprod-category">Category: <span>{product.category}</span></div>
                        <div className="singleprod-type">Type: <span>{product.product_type}</span></div>
                        <ul className="singleprod-palet">
                            {product.product_colors.map((color, index) => (
                                <li
                                    key={`${color.colour_name}-${index}`}
                                >
                                    <div
                                        className="singleprod-color"
                                        style={{ background: color.hex_value}}
                                        >
                                    </div>
                                    <span>{color.colour_name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="singleprod-btn">
                            <button className="button-green">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="singleprod-footer">
                <div className="singleprod-tag">Tags:</div>
                <ul>
                    {product.tag_list.map((tag, index) => (
                        <li
                        key={`${tag}-${index}`}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SingleProduct;