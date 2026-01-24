import { useParams, Link } from 'react-router-dom';
import { useEvent } from '@/hooks';
import { ImageGallery, Button } from '@/components/ui';
import styles from './EventDetail.module.css';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const { event } = useEvent(id ?? '');

  if (!event) {
    return (
      <div className={styles.notFound}>
        <h1>Event not found</h1>
        <Link to="/events">Back to Events</Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroPosterWrapper}>
          <img src={event.poster} alt={event.title} className={styles.heroPoster} />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <Link to="/events" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>All Events</span>
          </Link>

          <h1 className={styles.title}>{event.title}</h1>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{formatDate(event.date)}</span>
            </div>

            {event.time && (
              <div className={styles.metaItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{event.time}</span>
              </div>
            )}

            <div className={styles.metaItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            {/* Description */}
            <div className={styles.description}>
              <h2 className={styles.sectionTitle}>About</h2>
              {event.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Lineup */}
            {event.lineup && event.lineup.length > 0 && (
              <div className={styles.lineup}>
                <h2 className={styles.sectionTitle}>Lineup</h2>
                <ul className={styles.lineupList}>
                  {event.lineup.map((artist, index) => (
                    <li key={index} className={styles.lineupItem}>
                      <span className={styles.lineupNumber}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={styles.lineupName}>{artist}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Gallery */}
          {event.gallery && event.gallery.length > 0 && (
            <div className={styles.gallery}>
              <h2 className={styles.sectionTitle}>Gallery</h2>
              <ImageGallery images={event.gallery} columns={2} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
