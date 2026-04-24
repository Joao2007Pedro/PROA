import styles from '../css/China.module.css'
import ChinaImagem from '../assets/muralha.jpg'

function China() {  
    return(

        <section className={styles.container_china}>
                    <div className={styles.esquerda}>
                        <img src={ChinaImagem} alt="China" className={styles.china} />
                    </div>
        
                    <div className={styles.direita}>
                        <h1>Venha conhecer a China!!</h1>
                    </div>
        </section>

    )
}

export default China