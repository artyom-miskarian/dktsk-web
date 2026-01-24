import ArtistCard from './ArtistCard';
import styles from './ArtistGrid.module.css';
import type { ArtistGridProps } from '@/types';

export default function ArtistGrid({ artists }: ArtistGridProps) {
  return (
    <div className={styles.grid}>
      {artists.map((artist, index) => (
        <ArtistCard key={artist.id} artist={artist} index={index} />
      ))}
    </div>
  );
}
