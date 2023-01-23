import biomaMainimg from "../img/assets/biomaMain.png"
import PropTypes from 'prop-types'
import styles from '../components/ComponentDiv2.module.css'
import Button from "./Button"
function ComponentDiv2({frase2}){
    return(
        <div className={styles.App_div2}>
            <div className={styles.title}>
                <h1>Você pode transformar o seu investimento <span>em produção de alimentos.</span></h1>
                <h3>{frase2}</h3>
                <div className={styles.button_mobile}>
                    <Button/>
                </div>
            </div>
            <div className={styles.imagem}>
                <img src={biomaMainimg} alt="MainBioma"  />
            </div>
        </div>
    )
}

ComponentDiv2.propTypes={
    frase2:PropTypes.string.isRequired,
}

export default ComponentDiv2