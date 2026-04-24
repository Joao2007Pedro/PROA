import styles from '../css/Escocia.module.css'
import EscociaImagem from '../assets/escocia.jfif'

function Escocia() {
    return(

        <section className={styles.container_escocia}>
                    <div className={styles.esquerda}>
                        <img src={EscociaImagem} alt="Escocia" className={styles.escocia} />
                    </div>
        
                    <div className={styles.direita}>
                        <h1>Venha conhecer a Escócia!!</h1>
                    </div>
        </section>

    )
}

export default Escocia