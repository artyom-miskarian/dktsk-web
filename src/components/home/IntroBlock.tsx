import { Link } from 'react-router-dom';
import styles from './IntroBlock.module.css';

export default function IntroBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Since 2019</span>

          <h2 className={styles.heading}>
            A collective born from open-air raves in Armenia's highlands,
            now rooted in Yerevan's creative heart.
          </h2>

          <p className={styles.text}>
            dk.tsk is a music production studio and creative collective based at Teryan 91,
            a historic publishing house transformed into a space for sonic experimentation.
            We create, we gather, we push boundaries.
          </p>

          <Link to="/about" className={styles.link}>
            <span>Discover our story</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className={styles.decoration}>
          <div className={styles.line} />
          <span className={styles.year}>EST. 2019</span>
        </div>
      </div>
    </section>
  );
}
