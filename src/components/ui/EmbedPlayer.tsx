import styles from './EmbedPlayer.module.css';
import type { EmbedPlayerProps } from '@/types';

export default function EmbedPlayer({
  type = 'soundcloud',
  url,
  title,
  artist,
  coverImage,
  className = ''
}: EmbedPlayerProps) {
  // Generate embed URLs based on type
  const getEmbedSrc = () => {
    if (type === 'soundcloud') {
      return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23c0c0c0&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`;
    }
    if (type === 'bandcamp') {
      // For bandcamp, we'd need the album/track ID, using placeholder
      return url;
    }
    return url;
  };

  return (
    <div className={`${styles.player} ${className}`}>
      {coverImage && (
        <div className={styles.coverWrapper}>
          <img src={coverImage} alt={title ?? ''} className={styles.cover} />
          <div className={styles.coverOverlay} />
        </div>
      )}

      <div className={styles.info}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {artist && <p className={styles.artist}>{artist}</p>}
      </div>

      <div className={styles.embedWrapper}>
        {type === 'soundcloud' && (
          <iframe
            title={title ?? 'Soundcloud Player'}
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={getEmbedSrc()}
            className={styles.embed}
          />
        )}

        {type === 'bandcamp' && (
          <iframe
            title={title ?? 'Bandcamp Player'}
            style={{ border: 0, width: '100%', height: '120px' }}
            src={url}
            seamless
            className={styles.embed}
          />
        )}

        {type === 'external' && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            <span>Listen on {url.includes('soundcloud') ? 'Soundcloud' : 'Bandcamp'}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
