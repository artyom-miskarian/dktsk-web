import { Link } from 'react-router-dom';
import styles from './EventCard.module.css';
import type { EventCardProps } from '@/types';

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear(),
    };
  };

  const dateInfo = formatDate(event.date);

  return (
    <Link
      to={`/events/${event.id}`}
      className={styles.card}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={event.poster}
          alt={event.title}
          className={styles.image}
        />
        <div className={styles.imageOverlay} />

        <div className={styles.dateBadge}>
          <span className={styles.dateDay}>{dateInfo.day}</span>
          <span className={styles.dateMonth}>{dateInfo.month}</span>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{event.title}</h3>

        <div className={styles.meta}>
          <span className={styles.location}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {event.location}
          </span>
        </div>

        {event.lineup && event.lineup.length > 0 && (() => {
          const allArtists = event.lineup.flatMap(stage => stage.artists);
          return (
            <div className={styles.lineup}>
              {allArtists.slice(0, 3).map((artist, i) => (
                <span key={i} className={styles.lineupArtist}>
                  {artist}
                </span>
              ))}
              {allArtists.length > 3 && (
                <span className={styles.lineupMore}>
                  +{allArtists.length - 3}
                </span>
              )}
            </div>
          );
        })()}
      </div>

      <div className={styles.border} />
    </Link>
  );
}
