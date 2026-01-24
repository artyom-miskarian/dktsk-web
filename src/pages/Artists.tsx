import { SectionTitle } from '@/components/ui';
import { ArtistGrid } from '@/components/artists';
import { useArtists } from '@/hooks';
import styles from './Artists.module.css';

export default function Artists() {
  const { artists } = useArtists();

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>The Collective</span>
          <h1 className={styles.heroTitle}>Artists</h1>
          <p className={styles.heroSubtitle}>
            Meet the producers and performers who shape the dk.tsk sound.
          </p>
        </div>
        <div className={styles.heroDecoration} />
      </section>

      {/* Artists Grid */}
      <section className={styles.content}>
        <div className={styles.container}>
          <ArtistGrid artists={artists} />
        </div>
      </section>

      {/* Join CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Join the Collective</h2>
            <p className={styles.ctaText}>
              dk.tsk is always open to new voices. If your sound resonates with our frequency,
              we'd love to hear from you.
            </p>
            <a href="mailto:hello@dktsk.am?subject=Join dk.tsk" className={styles.ctaLink}>
              <span>Get in touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
