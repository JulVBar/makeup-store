import { NavLink } from 'react-router-dom';
import { SOCIAL_ICONS, CONTACTS, FOOTER_NAV } from '../../constants/footerConstants';
import Icon from '../Icon/Icon';
import logo from '../../assets/logo/logo.svg';
import leaf from '../../assets/misc/leaf.svg';
import styles from './footer.module.scss';

const Footer = () => {
    

    return (
        <footer className="footer">
            <div className="container">
                <div className={styles.footerBody}>
                    <div className={styles.content}>
                        <div className={styles.column}>
                            <img className={styles.logo} src={logo} alt="logo" />
                            <p className={styles.text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            {SOCIAL_ICONS.map((el, i) => (
                                <a key={i} href="index.html">
                                    <Icon
                                        name={el}
                                        className={styles.socialIcon}
                                    />
                                </a>
                            ))}
                        </div>
                        <div className={styles.column}>
                            <h3 className={styles.title}>CONTACTS</h3>
                            <p className={styles.text}>It is a long established fact that a reader will be distracted by the readable content.</p>
                            <div className={styles.contactList}>
                            {CONTACTS.map((el, i) => (
                                <a key={i} href="index.html" className={styles.contactItem}>
                                    <Icon
                                        name={el.icon}
                                        className={styles.contactIcon}
                                    />
                                    <span className={styles.contactLabel}>{el.label}</span>
                                    {el.text}
                                </a>
                            ))}
                            </div>
                        </div>
                        <div className={styles.column}>
                            <h3 className={styles.title}>NAVIGATION</h3>
                            <nav>
                                {FOOTER_NAV.map((el, i) => (
                                    <div
                                        className={styles.navItemWrap}
                                        key={i}
                                    >
                                        <img className={styles.navItemIcon} src={leaf} alt="leaf" />
                                        <NavLink
                                            to={el.to}
                                            className={styles.navItem}
                                        >
                                            {el.label}
                                        </NavLink>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <div>created by</div>
                        <a href="https://github.com/JulVBar">Iuliia<span>Barankova</span></a>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;