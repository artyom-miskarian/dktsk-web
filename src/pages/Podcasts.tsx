import { usePodcasts } from '@/hooks';
import styles from './Podcasts.module.css';

export default function Podcasts() {
  const { podcasts } = usePodcasts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Listen</span>
          <h1 className={styles.heroTitle}>Podcasts</h1>
          <p className={styles.heroSubtitle}>
            Recorded sets, mixes, and sonic explorations from the dk.tsk collective.
          </p>
        </div>
        <div className={styles.heroDecoration} />
      </section>

      {/* Podcasts Grid */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {podcasts.map((podcast, index) => (
              <a
                key={podcast.id}
                href={podcast.soundcloudUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={styles.coverWrapper}>
                  <img
                    src={podcast.cover}
                    alt={podcast.title}
                    className={styles.cover}
                  />
                  <div className={styles.coverOverlay} />
                  <div className={styles.playButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>

                <div className={styles.info}>
                  <h3 className={styles.title}>{podcast.title}</h3>
                  <p className={styles.artist}>{podcast.artist}</p>

                  <div className={styles.meta}>
                    <span>{formatDate(podcast.date)}</span>
                    <span className={styles.separator}>•</span>
                    <span>{podcast.duration}</span>
                  </div>

                  <p className={styles.description}>{podcast.description}</p>

                  {podcast.tags && podcast.tags.length > 0 && (
                    <div className={styles.tags}>
                      {podcast.tags.map((tag, i) => (
                        <span key={i} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.border} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Soundcloud CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Follow us on Soundcloud</h2>
            <p className={styles.ctaText}>
              Subscribe to stay updated with new releases, live recordings, and exclusive mixes.
            </p>
            <a
              href="https://soundcloud.com/dktsk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaLink}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.052-.1-.084-.1zm-.899 1.755c-.048 0-.082.033-.09.082l-.159 1.5.159 1.476c.008.05.042.082.09.082.045 0 .08-.032.087-.082l.185-1.476-.185-1.5c-.007-.049-.042-.082-.087-.082zm1.833-2.5c-.06 0-.107.046-.115.103l-.21 2.696.21 2.65c.008.057.055.097.115.097.06 0 .105-.04.113-.097l.232-2.65-.232-2.696c-.008-.057-.053-.103-.113-.103zm.947.112c-.068 0-.12.047-.127.115l-.188 2.584.188 2.535c.007.068.059.108.127.108.069 0 .12-.04.128-.108l.208-2.535-.208-2.584c-.008-.068-.059-.115-.128-.115z" />
              </svg>
              <span>Soundcloud</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
