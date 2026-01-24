import { Link } from 'react-router-dom';
import styles from './SectionCards.module.css';

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
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop',
    path: '/artists',
  },
  {
    id: 'studio',
    title: 'Studio',
    description: 'A space for creation',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=600&h=400&fit=crop',
    path: '/studio',
  },
  {
    id: 'events',
    title: 'Events',
    description: 'Past & upcoming gatherings',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
    path: '/events',
  },
  {
    id: 'podcasts',
    title: 'Podcasts',
    description: 'Recorded sets & mixes',
    image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&h=400&fit=crop',
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
