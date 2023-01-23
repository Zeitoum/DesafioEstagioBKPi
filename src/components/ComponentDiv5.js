import carteiraimg from "../img/assets/carteira.jpeg"
import PropTypes from 'prop-types'
import styles from '../components/ComponentDiv5.module.css'
import Button from "../components/Button";
function ComponentDiv5({frase, frase2}){
    function myEvent(){
        console.log('Opa clicou!')
    }
    return(
        <div className={styles.App_div5}>
            <div className={styles.title}>
                <h1>{frase}</h1>
                <h3>{frase2}</h3>
                <br></br>
                <div className={styles.button_ipad}>
                    <Button/>
                </div>
            </div>
            <div className={styles.imagem}>
                {/* <div className={styles.circle}></div>  */}
                <img src={carteiraimg} alt="Carteira"  />
            </div>
        </div>
    )
}

ComponentDiv5.propTypes={
    frase:PropTypes.string.isRequired,
    frase2:PropTypes.string.isRequired,
}

export default ComponentDiv5