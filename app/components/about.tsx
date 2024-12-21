import styles from './about.module.css';

export default function About() {
    return(
        <div className={styles.container}>
            <div className={styles.animation}>
                <div className={styles.shape}>
                </div>
            </div>
            <div className={styles.bio}>
            <div className={`${styles.shape} ${styles.shape2}`}>
                </div>
                <div className={styles.text}>
                <p>born in venezuela, always starving for learning new things. minimalist, modern, straight-forward, those are my key lines.</p>
                </div>
            </div>
        </div>
    )
}