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
             Sign in
            </a>
            <a href="#" className={styles.sign_up}>
            with
            </a>
            <div className={styles.form_container}>
            <form className={styles.form_buttons}>
            <a href="https://www.apple.com/de-edu/store?afid=p238%7Cs2ikzkU1J-dc_mtid_187079nc38483_pcrid_700307355074_pgrid_15885415519_pntwk_g_pchan__pexid__ptid_kwd-327275610644_&cid=aos-de-kwgo-edu--slid---product-" target="_blank" rel="noopener noreferrer">
                        <button type="button">
                            <img src={Apple} alt="Apple" />
                        </button>
                    </a>
            {/* <button>
            <img src={Apple} alt="Apple" />
        </button> */}
        {/* <button>
            <img src={Google} alt="Google" />
        </button> */}
                 <a href="https://translate.google.com/?sl=en&tl=ru&op=translate">
                        <button type="button">
                            <img src={Google} alt="Google" />
                        </button>
                    </a>
                    <a href="https://www.xbox.com/de-DE">
                        <button type="button">
                            <img src={Xbox} alt="Xbox" />
                        </button>
                    </a>
        {/* <button>
            <img src={Xbox} alt="Xbox" />
        </button> */}
                </form>
              </div>
        </div>
    );
}

export default MainContent;
