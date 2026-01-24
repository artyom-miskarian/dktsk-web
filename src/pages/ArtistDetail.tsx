import { useParams, Link } from 'react-router-dom';
import { useArtist } from '@/hooks';
import { Button } from '@/components/ui';
import styles from './ArtistDetail.module.css';

export default function ArtistDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { artist } = useArtist(slug ?? '');

  if (!artist) {
    return (
      <div className={styles.notFound}>
        <h1>Artist not found</h1>
        <Link to="/artists">Back to Artists</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <img src={artist.image} alt={artist.name} className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <Link to="/artists" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>All Artists</span>
          </Link>

          <h1 className={styles.name}>{artist.name}</h1>
          <p className={styles.tagline}>{artist.tagline}</p>

          {artist.genre && (
            <span className={styles.genre}>{artist.genre}</span>
          )}

          <div className={styles.socialLinks}>
            {artist.soundcloud && (
              <a href={artist.soundcloud} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Soundcloud
              </a>
            )}
            {artist.bandcamp && (
              <a href={artist.bandcamp} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Bandcamp
              </a>
            )}
            {artist.instagram && (
              <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Instagram
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className={styles.bio}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Biography</h2>
          <div className={styles.bioContent}>
            {artist.bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Releases */}
      {artist.releases && artist.releases.length > 0 && (
        <section className={styles.releases}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Releases</h2>
            <div className={styles.releaseGrid}>
              {artist.releases.map((release, index) => (
                <a
                  key={index}
                  href={release.bandcampUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.releaseCard}
                >
                  <div className={styles.releaseInfo}>
                    <h3 className={styles.releaseTitle}>{release.title}</h3>
                    <span className={styles.releaseMeta}>
                      {release.type} • {release.year}
                    </span>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Live Sets */}
      {artist.liveSets && artist.liveSets.length > 0 && (
        <section className={styles.liveSets}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Live Sets</h2>
            <div className={styles.setGrid}>
              {artist.liveSets.map((set, index) => (
                <a
                  key={index}
                  href={set.soundcloudUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.setCard}
                >
                  <div className={styles.setInfo}>
                    <h3 className={styles.setTitle}>{set.title}</h3>
                    <span className={styles.setMeta}>
                      {new Date(set.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })} • {set.duration}
                    </span>
                  </div>
                  <div className={styles.playButton}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
