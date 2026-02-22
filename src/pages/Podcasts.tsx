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
    </div>
  );
}
