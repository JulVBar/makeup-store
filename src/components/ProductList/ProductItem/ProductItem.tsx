import { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../reducer/cartReducer/cartSlice';
import { addOrRemoveItemFromFav } from '../../../reducer/favoutiteReducer/favouriteSlice';
import { ProductColorItem, ProductItemType } from '../../../reducer/productListReducer/types';
import { favouriteSelector } from '../../../reducer/favoutiteReducer/selectors';
import { Link } from 'react-router-dom';
import Icon from '../../Icon/Icon';
import './productItem.scss';

type ProductItemProps = {
    id: number;
    product: ProductItemType;
    image_link: string;
    name: string;
    price: number;
    brand: string;
    productColors: Array<ProductColorItem>;
}

const ProductItem: FC<ProductItemProps> = ({
    id,
    product,
    name,
    image_link,
    brand,
    productColors,
    price,
}) => {
    const [activeColor, setActiveColor] = useState<ProductColorItem>(productColors[0]);
    const { favs } = useSelector(favouriteSelector);
    const dispatch = useDispatch();
    const isFavourite = favs? favs.find(obj => obj.id === id) : false;

    const onColorClick = (color: ProductColorItem): void => {
        setActiveColor(color);
    }
    
    const onFavouriteClick = (): void => {
        dispatch(addOrRemoveItemFromFav(product));
    }

    const onClickAdd = () => {
        const item = {
            id,
            vendor_code: id + activeColor.colour_name,
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
                {isFavourite && (
                    <div className="product-fav">
                        <Icon
                            name="fullheart"
                            className="product-icon-fav"
                        />
                    </div>
                )}
                <div className="product-img">
                    <img className="img-cover" src={image_link} alt={name} />
                </div>
                <div className="product-img product-img--hover">
                    <div 
                        className="product-circle"
                        onClick={onFavouriteClick}
                    >
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
                            key={`${color.colour_name}-${index}`}  
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

