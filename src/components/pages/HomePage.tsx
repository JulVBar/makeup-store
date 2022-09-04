import { useEffect, FC } from 'react';
import Slider from '../Slider/Slider'

const HomePage: FC = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <>
            <Slider />
        </>
    );
}

export default HomePage;