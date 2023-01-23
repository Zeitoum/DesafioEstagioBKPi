import styles from "../components/Button.module.css"


function Button(props){
    return(
        <a className={styles.App_button} style={props.variant &&} href="https://bit.ly/contabioma" target="_blank"  rel="noreferrer">
            Falar com um consultor
        </a>
    )
}

export default Button