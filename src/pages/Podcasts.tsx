import { usePodcasts } from '@/hooks';
import styles from './Podcasts.module.css';

export default function Podcasts() {
  const { podcasts } = usePodcasts();

  return (
    <div className={styles.page}>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.list}>
            {podcasts.map((podcast, index) => (
              <a
                key={podcast.id}
                href={podcast.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.row}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={styles.coverWrapper}>
                  <img
                    src={podcast.cover}
                    alt={podcast.title}
                    className={styles.cover}
                  />
                  <div className={styles.playIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>

                <div className={styles.info}>
                  <span className={styles.title}>{podcast.title}</span>
                  <span className={styles.artist}>{podcast.artist}</span>
                  <span className={styles.date}>
                    {new Date(podcast.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <span className={styles.duration}>{podcast.duration}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
