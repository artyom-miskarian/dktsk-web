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
                <path d="M1 18V11l.05-.25c.05-.23.17-.44.33-.55s.37-.13.57-.06c.2.07.35.21.46.43L3 12v6l-.5.9c-.11.2-.26.35-.46.42-.2.08-.4.05-.58-.06-.17-.12-.28-.33-.33-.56L1 18zm3 0V8l.05-.25c.05-.23.17-.44.34-.56s.37-.13.57-.05c.2.07.35.22.45.44L6 9v9l-.5.9c-.1.2-.26.35-.46.42-.2.08-.4.05-.57-.06a.96.96 0 01-.34-.56L4 18zm3 0V9l.05-.25c.05-.23.17-.44.34-.56s.37-.13.57-.06c.2.08.35.22.45.44L9 10v8l-.5.9c-.1.2-.26.35-.46.42-.2.08-.4.05-.57-.06a.96.96 0 01-.34-.56L7 18zm3 0V7l.05-.25c.05-.23.17-.44.34-.56s.37-.13.57-.06c.2.08.35.22.45.44L12 8v10l-.5.9c-.1.2-.26.35-.46.42-.2.08-.4.05-.57-.06a.96.96 0 01-.34-.56L10 18zm7.5-12c2.49 0 4.5 2.01 4.5 4.5S19.99 15 17.5 15H13V6.12c.85-.4 1.79-.62 2.78-.62.92 0 1.8.2 2.6.55a.5.5 0 01.12.82v0z"/>
              </svg>
              <span>Soundcloud</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
