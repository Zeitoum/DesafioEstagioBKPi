import styles from "../components/ComponentDiv6.module.css"
import PropTypes from 'prop-types'
import plantimg from "../img/assets/plant.png"


function ComponentDiv6({frase, frase2}){
    return(
        <div className={styles.App_div6}>
            <div className={styles.background_darkgray}/>
            <div className={styles.imgetxt}>
                <img src={plantimg} alt="Conhecimento e oportunidade pra você lucrar mais"/>
                <div>
                    <h1>{frase}</h1>
                    <h3>{frase2}</h3>
                </div>
            </div>
        </div>
    )
}

ComponentDiv6.propTypes={
    frase:PropTypes.string.isRequired,
    frase2:PropTypes.string.isRequired,
}

export default ComponentDiv6