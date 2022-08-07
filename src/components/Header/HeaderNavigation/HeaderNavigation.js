import { NAVLINKS } from '../../../constants/constants';
import { NavLink } from 'react-router-dom';

import './headerNavigation.scss';

const HeaderNavigation = () => {
    return (
        <ul className='nav'>
            {NAVLINKS.map((item, index) => (
                    <li 
                        className='navItem'
                        key={`${item.name}-${index}`}
                    >
                        <NavLink
                            to={item.path}
                            className={(navData) => (navData.isActive ? 'active' : '')}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                
                
            ))}
        </ul>
    )
}

export default HeaderNavigation;