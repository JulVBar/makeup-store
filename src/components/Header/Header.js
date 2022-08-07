import HeaderIcons from './HeaderIcons/HeaderIcons';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

import logo from '../../assets/logo/logo.svg';

import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <HeaderNavigation />
            <HeaderIcons />
        </header>
    )
}

export default Header;