import IconsSVG from './icons.svg';

function Icon ({name, className}) {

    return(
        <svg 
            className={`icon icon-${name} ${className}`} 
        >
            <use xlinkHref={`${IconsSVG}#${name}`} />
        </svg>
    )
}

export default Icon;