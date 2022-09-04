import { FC } from 'react';
import { NAVLINKS } from '../../../constants/constants';
import { NavLink } from 'react-router-dom';

import './headerNavigation.scss';

const HeaderNavigation: FC = () => {
    return (
        <ul className="header-nav">
            {NAVLINKS.map((item, index) => (
                    <li 
                        className="header-nav-item"
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