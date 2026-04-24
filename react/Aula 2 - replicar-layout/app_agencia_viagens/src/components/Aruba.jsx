import styles from '../css/Aruba.module.css'
import ArubaImagem from '../assets/aruba.jpg'

function Aruba() {  
    return(

        <section className={styles.container_aruba}>
                    <div className={styles.esquerda}>
                        <img src={ArubaImagem} alt="Aruba" className={styles.aruba} />
                    </div>
        
                    <div className={styles.direita}>
                        <h1>Venha conhecer Aruba!!</h1>
                    </div>
        </section>

    )
}

export default Aruba