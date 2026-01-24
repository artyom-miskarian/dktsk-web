import { Link } from 'react-router-dom';
import styles from './ArtistCard.module.css';
import type { ArtistCardProps } from '@/types';

export default function ArtistCard({ artist, index = 0 }: ArtistCardProps) {
  return (
    <Link
      to={`/artists/${artist.id}`}
      className={styles.card}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={artist.image}
          alt={artist.name}
          className={styles.image}
        />
        <div className={styles.imageOverlay} />

        <div className={styles.socialHint}>
          <span>View Profile</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{artist.name}</h3>
        <p className={styles.tagline}>{artist.tagline}</p>
        {artist.genre && (
          <span className={styles.genre}>{artist.genre}</span>
        )}
      </div>

      <div className={styles.border} />
    </Link>
  );
}
