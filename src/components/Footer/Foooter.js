import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className={styles.footerBody}>
                    <div className={styles.content}>
                        <div className={styles.column}>col1</div>
                        <div className={styles.column}>col2</div>
                        <div className={styles.column}>col3</div>
                    </div>
                    <div className={styles.copyright}>
                        <div>created by</div>
                        <a href="https://www.linkedin.com/in/%D1%8E%D0%BB%D0%B8%D1%8F-%D0%B1%D0%B0%D1%80%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0-1b1873205/">Iuliia<span>Barankova</span></a>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;