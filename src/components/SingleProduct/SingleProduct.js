import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import pic from '../../assets/categories/blush.jpg'

import './singleProduct.scss';

const SingleProduct = () => {
    const [product, setProduct] = useState('');
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate();
    
    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/1026`);
                console.log(response.data)
                setProduct(response.data);
            } catch (error) {
                alert('Ошибка при получении пиццы!');
                navigate('/');
            }
        }
    
    fetchProduct();
    }, []);

    if (!product) {
        return <>Загрузка...</>;
    }

    return (
        <div className="singleprod">
            <div className="singleprod-body">
                <div className="singleprod-picture">
                    <img className="img-cover" src={pic} alt="Product Name" />
                </div>
                <div className="singleprod-content">
                    <div className="singleprod-info">
                        <div className="singleprod-name">{product.name}</div>
                        <div className="singleprod-price">$120</div>
                        <div className="singleprod-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</div>
                        <div className="singleprod-brand">Brand: <span>Nyx</span></div>
                        <div className="singleprod-category">Category: <span>Blush</span></div>
                        <div className="singleprod-type">Type: <span>Gloss</span></div>
                        <ul className="singleprod-palet">
                            <li><div className="singleprod-color"></div><span>Color 1</span></li>
                            <li><div className="singleprod-color"></div><span>Color 2</span></li>
                            <li><div className="singleprod-color"></div><span>Color 3</span></li>
                            <li><div className="singleprod-color"></div><span>Color 1</span></li>
                            <li><div className="singleprod-color"></div><span>Color 2</span></li>
                            <li><div className="singleprod-color"></div><span>Color 3</span></li>
                            <li><div className="singleprod-color"></div><span>Color 1</span></li>
                            <li><div className="singleprod-color"></div><span>Color 2</span></li>
                            <li><div className="singleprod-color"></div><span>Color 3</span></li>
                            <li><div className="singleprod-color"></div><span>Color 1</span></li>
                            <li><div className="singleprod-color"></div><span>Color 2</span></li>
                            <li><div className="singleprod-color"></div><span>Color 3</span></li>
                            <li><div className="singleprod-color"></div><span>Color 1</span></li>
                            <li><div className="singleprod-color"></div><span>Color 2</span></li>
                            <li><div className="singleprod-color"></div><span>Color 3</span></li>
                            <li><div className="singleprod-color"></div><span>Color 1</span></li>
                            <li><div className="singleprod-color"></div><span>Color 2</span></li>
                            <li><div className="singleprod-color"></div><span>Color 3</span></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="singleprod-buy">
                            <li>-</li>
                            <li>1</li>
                            <li>+</li>
                        </ul>
                        <div>
                            <button className="button-green">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="singleprod-footer">
                <div className="singleprod-tag">Tags:</div>
                <ul>
                    <li>tag 1</li>
                    <li>tag 2</li>
                    <li>tag 3</li>
                </ul>
            </div>
        </div>
    )
}

export default SingleProduct;