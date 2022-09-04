import { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFav } from '../../reducer/favoutiteReducer/favouriteSlice';
import { favouriteSelector } from '../../reducer/favoutiteReducer/selectors';
import favTitle from '../../assets/headers/favourite.svg';
import FavouriteList from '../FavouriteList/FavouriteList';
import NotFound from '../NotFound/NotFound';
import { EMPTY_FAV } from '../../constants/emptyLayouts';

const FavouritePage: FC = () => {
    const { favs } = useSelector(favouriteSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onFavClear = (): void => {
        dispatch(clearFav());
    }
    
    return (
        <>
            <div className="pageTitle">
                <img src={favTitle} alt="favourite" />
            </div>
            <div className="container">
                {favs.length > 0? (
                    <>
                        <FavouriteList/>
                        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                            <button
                                className="button-green"
                                onClick={onFavClear}
                            >
                                Clear favourite list
                            </button>
                        </div>
                    </>
                ) : (
                    <NotFound
                        title={EMPTY_FAV.title}
                        img={EMPTY_FAV.img}
                        button={EMPTY_FAV.button_text}
                        link={EMPTY_FAV.link_to}
                    />
                )}
            </div>
        </>
    );
}

export default FavouritePage;