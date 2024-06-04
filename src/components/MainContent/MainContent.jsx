import styles from './Main.module.css'
import Apple from '../../assets/Apple.svg'
import Google from '../../assets/Google.svg'
import Xbox from '../../assets/Xbox.svg'

function MainContent() {
    return (
        <div className={styles.container_main}>
            <div className={styles.mainText}>
                <h1>LIFE IS WASTED ON THE LIVING</h1>
            </div>
            <a href="#" className={styles.sign_up}>
                Sign in with
            </a>
            <div className={styles.form_container}>
            <form className={styles.form_buttons}>
            <button>
            <img src={Apple} alt="Apple" />
        </button>
        <button>
            <img src={Google} alt="Google" />
        </button>
        <button>
            <img src={Xbox} alt="Xbox" />
        </button>
                </form>
              </div>
        </div>
    );
}

export default MainContent;
