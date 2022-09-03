import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './notFound.module.scss';

type NotFoundProps = {
    title: string;
    img: string;
    button: string;
    link: string;
};

const NotFound: FC<NotFoundProps> = ({ title, img, button, link}) => {
    return (
        <div className={styles.wrap}>
            <h1>{title}</h1>
            <div className={styles.picture}>
                <img src={img} alt="emptyCart" />
            </div>
            <Link to={link}>
                <button className="button-green">{button}</button>
            </Link>
        </div>
    );
}

export default NotFound;