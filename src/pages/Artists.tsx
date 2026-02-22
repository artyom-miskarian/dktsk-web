import { ArtistGrid } from '@/components/artists';
import { useArtists } from '@/hooks';
import styles from './Artists.module.css';

export default function Artists() {
  const { artists } = useArtists();

  return (
    <div className={styles.page}>
      {/* Artists Grid */}
      <section className={styles.content}>
        <div className={styles.container}>
          <ArtistGrid artists={artists} />
        </div>
      </section>
    </div>
  );
}
