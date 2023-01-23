import logoimg from "../img/assets/logoCompleto.svg"
import styles from '../components/Header.module.css'
import logoimgmobile from "../img/assets/logoBioma.svg"
function Header(){
    return(
        <div className={styles.div_header}>
            <img className={styles.logomobile} src={logoimgmobile} alt="Logo mobile"/>
            <img className={styles.logo} src={logoimg} alt="Logo" />
        </div>
    )
}

export default Header