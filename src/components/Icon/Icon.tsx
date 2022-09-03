import { FC } from 'react';
import IconsSVG from './icons.svg';

type IconProps = {
    name: string;
    className: string;
}

const Icon: FC<IconProps> = ({name, className}) => {
    return(
        <svg 
            className={`icon icon-${name} ${className}`} 
        >
            <use xlinkHref={`${IconsSVG}#${name}`} />
        </svg>
    )
}

export default Icon;