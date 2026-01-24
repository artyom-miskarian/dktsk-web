import { SectionTitle, ImageGallery } from '@/components/ui';
import styles from './About.module.css';

import storyOrigins from '@/assets/illustrations/story-origins.svg';
import storyGrowth from '@/assets/illustrations/story-growth.svg';
import storyStudio from '@/assets/illustrations/story-studio.svg';
import storyMission from '@/assets/illustrations/story-mission.svg';

interface StoryBlock {
  id: string;
  title: string;
  year: string;
  content: string;
  image: string;
}

interface Value {
  title: string;
  description: string;
}

const storyBlocks: StoryBlock[] = [
  {
    id: 'origins',
    title: 'The Beginning',
    year: '2019',
    content: `It started with a clearing in Dilijan's forest, a generator, and a shared vision. A small group of friends gathered for what was meant to be nothing more than an experiment — an open-air rave in the Armenian highlands. But something happened that night under the stars. The music, the mountain air, the collective energy — it all merged into an experience that demanded to be repeated.`,
    image: storyOrigins,
  },
  {
    id: 'growth',
    title: 'Growing Together',
    year: '2020-2023',
    content: `What began as sporadic gatherings evolved into something more intentional. Between the pandemic years and beyond, dk.tsk became a name whispered in Yerevan's underground. Workshops emerged. Late-night sessions stretched into mornings. A community formed — artists, producers, listeners, dreamers — all drawn to the same frequency.`,
    image: storyGrowth,
  },
  {
    id: 'studio',
    title: 'Finding Home',
    year: '2024',
    content: `In 2024, a cultural grant made the impossible possible. Teryan 91 — a historic publishing house in the heart of Yerevan — became dk.tsk's permanent home. The space was transformed: walls that once held manuscripts now absorb bass frequencies. The studio isn't just a room; it's a statement. Electronic music in Armenia has a physical address.`,
    image: storyStudio,
  },
  {
    id: 'mission',
    title: 'The Mission',
    year: 'Present',
    content: `dk.tsk exists for experimentation. For the late-night ideas that need space to breathe. For the artists who don't fit neatly into categories. We create, we gather, we push boundaries. The studio is open. The collective is growing. And the gatherings continue — now with a home to return to.`,
    image: storyMission,
  },
];

const values: Value[] = [
  {
    title: 'Sound',
    description: 'We believe in the transformative power of electronic music — its ability to move bodies and shift perspectives.',
  },
  {
    title: 'Space',
    description: 'Physical and creative space for experimentation. A room where ideas can fail, evolve, and eventually succeed.',
  },
  {
    title: 'Freedom',
    description: 'No genre boundaries. No gatekeeping. The collective is open to anyone who shares our frequency.',
  },
];

const galleryImages: string[] = [
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop',
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About dk.tsk</h1>
          <p className={styles.heroSubtitle}>
            From forest clearings to studio spaces — the evolution of a collective.
          </p>
        </div>
        <div className={styles.heroDecoration} />
      </section>

      {/* Story Blocks */}
      <section className={styles.story}>
        <div className={styles.container}>
          {storyBlocks.map((block, index) => (
            <div
              key={block.id}
              className={`${styles.storyBlock} ${index % 2 === 1 ? styles.reversed : ''}`}
            >
              <div className={styles.storyContent}>
                <span className={styles.storyYear}>{block.year}</span>
                <h2 className={styles.storyTitle}>{block.title}</h2>
                <p className={styles.storyText}>{block.content}</p>
              </div>
              <div className={styles.storyImageWrapper}>
                <img
                  src={block.image}
                  alt={block.title}
                  className={styles.storyImage}
                />
                <div className={styles.storyImageOverlay} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className={styles.container}>
          <SectionTitle align="center">
            Our Principles
          </SectionTitle>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div
                key={value.title}
                className={styles.valueCard}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <SectionTitle subtitle="Moments from our journey">
            Gallery
          </SectionTitle>
          <ImageGallery images={galleryImages} columns={3} />
        </div>
      </section>
    </div>
  );
}
