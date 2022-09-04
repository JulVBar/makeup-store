import { useEffect } from 'react';
import { FC } from 'react';

const CheckOutPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <>
            <h1>This is CheckOutPage</h1>
            <div className="container"></div>
        </>
    );
}

export default CheckOutPage;