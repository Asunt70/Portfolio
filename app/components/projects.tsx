import styles from './projects.module.css';

export default function Projects() {
    return (
        <div className={styles.main}>
            <h1>Projects</h1>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <div className={styles.project1}>
                        <div className={styles.card}>
                            <h3>UPTAEB Page</h3>
                        </div>
                        <div className={styles.outline}>
                            <p>Redesigned totally, new pages for careers and functionalities.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.project2}>
                        <div className={styles.card}>
                            <h3>Infinix Blog</h3>
                        </div>
                        <div className={styles.outline}>
                            <p>ye</p>
                        </div>
                    </div>
                    <div className={styles.project3}>
                        <div className={styles.card}>
                            <h3>Pinterest Clone</h3>
                        </div>
                        <div className={styles.outline}>
                            <p>ye</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}