import styles from '../components/ComponentDiv1.module.css'
import PropTypes from 'prop-types'
import Button from "../components/Button";
function ComponentDiv1({frase}){
    return (
        <div className={styles.App_div1}>
            <div className={styles.title}>
                <h1>{frase}</h1>
            </div>
            <br></br>
            <br></br>
            <Button />
        </div>
    )
}

ComponentDiv1.propTypes={
    frase:PropTypes.string.isRequired,
}

export default ComponentDiv1