import { FC } from 'react';
import HeaderIcons from './HeaderIcons/HeaderIcons';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import logo from '../../assets/logo/logo.svg';
import './header.scss';

const Header: FC = () => {
    return (
        <header className='header'>
            <div className="header-container">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <HeaderNavigation />
                <HeaderIcons />
            </div>
        </header>
    )
}

export default Header;