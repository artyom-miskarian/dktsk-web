import { Link } from 'react-router-dom';
import styles from './SectionCards.module.css';

import artistsIllustration from '@/assets/illustrations/artists.svg';
import studioIllustration from '@/assets/illustrations/studio.svg';
import eventsIllustration from '@/assets/illustrations/events.svg';
import podcastsIllustration from '@/assets/illustrations/podcasts.svg';

interface Section {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
}

const sections: Section[] = [
  {
    id: 'artists',
    title: 'Artists',
    description: 'Meet the collective',
    image: artistsIllustration,
    path: '/artists',
  },
  {
    id: 'studio',
    title: 'Studio',
    description: 'A space for creation',
    image: studioIllustration,
    path: '/studio',
  },
  {
    id: 'events',
    title: 'Events',
    description: 'Past & upcoming gatherings',
    image: eventsIllustration,
    path: '/events',
  },
  {
    id: 'podcasts',
    title: 'Podcasts',
    description: 'Recorded sets & mixes',
    image: podcastsIllustration,
    path: '/podcasts',
  },
];

export default function SectionCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Explore</span>
          <h2 className={styles.title}>Discover dk.tsk</h2>
        </div>

        <div className={styles.grid}>
          {sections.map((section, index) => (
            <Link
              key={section.id}
              to={section.path}
              className={styles.card}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={section.image}
                  alt={section.title}
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{section.title}</h3>
                <p className={styles.cardDescription}>{section.description}</p>

                <span className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>

              <div className={styles.border} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
