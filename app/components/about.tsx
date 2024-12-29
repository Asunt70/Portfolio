import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.animation}></div>
      <div className={styles.bio}>
        <div className={styles.text}>
          <p>
            born in venezuela, always starving for learning new things.
            minimalist, modern, straight-forward, those are my key lines.
          </p>
        </div>
      </div>
    </div>
  );
}
