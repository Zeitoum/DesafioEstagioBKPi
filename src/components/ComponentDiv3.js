import PropTypes from 'prop-types'
import styles from"../components/ComponentDiv3.module.css"
import performanceicon from "../img/assets/alta-performance.png"
import economicoicon from "../img/assets/lucro.png"
import empreendedorismoicon from "../img/assets/empreendedor.png"

function ComponentDiv3({frase,frase2,frase3,frase4,frase5,frase6,frase7}){
    return(
        <div className={styles.App_div3}>
            <div className={styles.col_1}>
                <h3>{frase}</h3>
            </div>
            <div className={styles.columns}>
                <img className={styles.icons} src={performanceicon} alt="Ícone perfomance"/>
                <div className={styles.col_text}>
                    <h4>{frase2}</h4>
                    <p>{frase3}</p>
                </div>
            </div>
            <div className={styles.columns}>
                <img className={styles.icons}  src={economicoicon} alt="Ícone crescimento econômico"/>
                <div className={styles.col_text}>
                    <h4>{frase4}</h4>
                    <p>{frase5}</p>
                </div>
            </div>
            <div className={styles.columns}>
                <img className={styles.icons}  src={empreendedorismoicon} alt="Ícone empreendedor"/>
                <div className={styles.col_text}>
                    <h4>{frase6}</h4>
                    <p>{frase7}</p>
                </div>
            </div>
        </div>
    )
}

ComponentDiv3.propTypes={
    frase:PropTypes.string.isRequired,
    frase2:PropTypes.string.isRequired,
    frase3:PropTypes.string.isRequired,
    frase4:PropTypes.string.isRequired,
    frase5:PropTypes.string.isRequired,
    frase6:PropTypes.string.isRequired,
    frase7:PropTypes.string.isRequired,

}

export default ComponentDiv3