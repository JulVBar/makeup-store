import { useEffect } from 'react';
import Slider from '../Slider/Slider'

const HomePage = () => {
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