import styles from "../components/Footer.module.css"
import PropTypes from 'prop-types'
import logoimg from "../img/assets/logoCompleto.svg"
import linkedinicon from "../img/assets/linkedin.png"
import facebookicon from "../img/assets/facebook.png"
import instagramicon from "../img/assets/instagram.png"


function Footer({word, word2, word3, word4, word5}){
    return(
        <div className={styles.App_footer}>
            <div className={styles.infos}>
                <div className={styles.infos1}>
                    <h3 >{word}</h3>
                    <div className={styles.infos1_paragraphers}>
                        <a className={styles.links} href="https://biomainvestimentos.com/" target="_blank">
                            <p >{word2}</p>
                        </a>
                        <a className={styles.links} href="https://bit.ly/contabioma" target="_blank">
                            <p >{word3}</p>
                        </a>
                    </div>
                </div>
                <div className={styles.infos2}>
                    <h3 >{word4}</h3>
                    <a className={styles.links} href="href=https://bit.ly/contabioma" target="_blank">
                        <p >{word5}</p>
                    </a>
                </div>
            </div>
            {/*Icones e logo BIOMA*/}
            <div className={styles.foot}>
                <img className={styles.biomaimg} src={logoimg} alt="logo"/>
                <div className={styles.icons}>
                    <a className={styles.cursor_hover} href="https://www.linkedin.com/company/bioma-investimentos/about/" target="_blank" rel="noreferrer">
                        <img className={styles.icons_images}  src={linkedinicon} alt="linkedin"/>
                    </a>
                    <a className={styles.cursor_hover} href="https://www.facebook.com/biomainvestimentos.br/" target="_blank" rel="noreferrer">
                        <img  className={styles.icons_images}  src={facebookicon} alt="linkedin"/>
                    </a>
                    <a className={styles.cursor_hover} href="https://www.instagram.com/bioma.investimentos/" target="_blank" rel="noreferrer">
                        <img className={styles.icons_images}  src={instagramicon} alt="linkedin"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

Footer.propTypes={
    word:PropTypes.string.isRequired,
    word2:PropTypes.string.isRequired,
    word3:PropTypes.string.isRequired,
    word4:PropTypes.string.isRequired,
    word5:PropTypes.string.isRequired,
}

export default Footer