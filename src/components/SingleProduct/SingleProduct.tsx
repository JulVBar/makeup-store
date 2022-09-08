import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProductItemType, ProductColorItem } from '../../reducer/productListReducer/types';
import { addItem } from '../../reducer/cartReducer/cartSlice';
import { favouriteSelector } from '../../reducer/favoutiteReducer/selectors';
import { addOrRemoveItemFromFav } from '../../reducer/favoutiteReducer/favouriteSlice';
import axios from 'axios';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';
import './singleProduct.scss';




const SingleProduct: FC = () => {
    const [product, setProduct] = useState<ProductItemType>();
    const [activeColor, setActiveColor] = useState<ProductColorItem>();
    const { favs } = useSelector(favouriteSelector);
    const { id } = useParams();
    const isFavourite = favs ? favs.find((obj) => obj.id === product?.id) : false;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axios.get<ProductItemType>('https://62f0bd3157311485d135bea7.mockapi.io/products/' + id);
                setProduct(response.data as ProductItemType);
                setActiveColor(response.data.product_colors[0]);
            } catch (error) {
                alert('Ошибка при получении продукта!');
                navigate('/'); 
                navigate('/shop');
            }
        }
    
    fetchProduct();
    }, [id, navigate]);

    const onColorClick = (color: ProductColorItem): void => {
        setActiveColor(color);
    }
    
    const onFavouriteClick = (): void => {
        if (product) dispatch(addOrRemoveItemFromFav(product));
    }

    const onClickAdd = () => {
        if (product && activeColor) {
            const item = {
                id: product.id,
                vendor_code: product.id + activeColor.colour_name,
                name: product.name,
                image_link: product.image_link,
                brand: product.brand,
                price: product.price,
                pickedUpColor: activeColor,
                count: 0,
            };
            dispatch(addItem(item));
        }
    };

    if (!product) {
        return <Loader/>;
    }

    return (
        <div className="singleprod">
            <div className="singleprod-body">
                <div className="singleprod-picture">
                    <img className="img-cover" src={product.image_link} alt="Product Name" />
                </div>
                <div className="singleprod-content">
                    <div className="singleprod-info">
                        <div 
                            className="singleprod-fav"
                            onClick={onFavouriteClick}
                        >
                            {isFavourite ? (
                                    <Icon
                                        name="fullheart"
                                        className="product-icon-fav"
                                    />
                            ) : (
                                <Icon
                                    name='heart'
                                    className="product-icon"
                                />
                            )}
                        </div>
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
                                    className={activeColor?.hex_value === color.hex_value ? "active" : ""}
                                    onClick={()=>{onColorClick(product.product_colors[index])}}
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
                            <button
                                className="button-green"
                                type="button"
                                onClick={onClickAdd}
                            >
                                Add to cart
                            </button>
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