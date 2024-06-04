import styles from './Header.module.css';
import Logo from '../../assets/Logo.svg';
function Header() {
    return (
      <header className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.logo} src={Logo} />
          </div>
    </header> );
}

export default Header;