import styles from "../components/ComponentDiv4.module.css"
import PropTypes from 'prop-types'
import video from "../img/assets/biomaVideo.mp4"
import Button from "../components/Button";

function ComponentDiv4({frase, frase2}){
    function myEvent(){
        console.log('Opa clicou!')
    }
return(
    <div className={styles.App_div4}>
        <div className={styles.videodiv}>
            <video src={video} controls/>
        </div>
        <div className={styles.title}>
            <h1>{frase}</h1>
            <h3>{frase2}</h3>
            <br></br>
            <Button/>
        </div>
    </div>
)
}

ComponentDiv4.propTypes={
    frase:PropTypes.string.isRequired,
    frase2:PropTypes.string.isRequired,
}

export default ComponentDiv4