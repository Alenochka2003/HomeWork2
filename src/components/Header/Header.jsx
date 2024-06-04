
import styles from './Header.module.css';
import Logo from '../../assets/Logo.svg';

function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
              <a href='https://open.spotify.com/'>
                <button className='logotips'>
                <img className={styles.logotip} src={Logo} alt="Logo" />
                </button>
                </a>
            </div>
        </header>
    );
}

export default Header;