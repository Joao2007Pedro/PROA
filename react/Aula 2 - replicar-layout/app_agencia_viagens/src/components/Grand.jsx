import styles from '../css/Grand.module.css'
import GrandImagem from '../assets/GrandCanyon.jpg'

function Grand() {  
    return(

        <section className={styles.container_grand}>
                    <div className={styles.esquerda}>
                        <img src={GrandImagem} alt="Grand" className={styles.grand} />
                    </div>
        
                    <div className={styles.direita}>
                        <h1>Venha conhecer o Grand Canyon !!</h1>
                    </div>
        </section>

    )
}

export default Grand