import { SectionTitle, ImageGallery, Button } from '@/components/ui';
import { PricingTable } from '@/components/studio';
import styles from './Studio.module.css';

const studioImages: string[] = [
  'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1598517834392-92a23efed4b9?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop',
];

export default function Studio() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Studio</h1>
          <p className={styles.heroSubtitle}>
            A space for creation
          </p>
        </div>
        <div className={styles.heroDecoration} />
      </section>

      {/* About the Space */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.aboutTitle}>
                More than a studio — a home for sonic experimentation
              </h2>
              <p>
                Located in a historic publishing house at Teryan 91, dk.tsk studio
                is where ideas become sound. The space is designed for focus, collaboration,
                and creative freedom — whether you're producing, mixing, rehearsing, or just exploring.
              </p>
              <p>
                With professional-grade equipment and an atmosphere built for deep work,
                the studio serves both established producers and emerging artists looking
                for space to develop their sound.
              </p>

              <div className={styles.features}>
                <div className={styles.feature}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                  <div>
                    <h4>Production</h4>
                    <p>Full setup for electronic music production</p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                  <div>
                    <h4>Mixing & Mastering</h4>
                    <p>Professional acoustic treatment</p>
                  </div>
                </div>

                <div className={styles.feature}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div>
                    <h4>Collaboration</h4>
                    <p>Space for workshops and joint sessions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.aboutMeta}>
              <div className={styles.metaCard}>
                <h4>Location</h4>
                <p>Teryan 91, Yerevan, Armenia</p>
                <span className={styles.metaNote}>
                  Historic publishing house, city center
                </span>
              </div>

              <div className={styles.metaCard}>
                <h4>Hours</h4>
                <p>10:00 — 22:00</p>
                <span className={styles.metaNote}>
                  Late sessions available by arrangement
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <SectionTitle subtitle="The space">
            Gallery
          </SectionTitle>
          <ImageGallery images={studioImages} columns={2} />
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing}>
        <div className={styles.container}>
          <SectionTitle
            align="center"
            subtitle="Flexible options for every project"
          >
            Pricing
          </SectionTitle>
          <PricingTable />
        </div>
      </section>

      {/* Booking CTA */}
      <section className={styles.booking}>
        <div className={styles.container}>
          <div className={styles.bookingCard}>
            <div className={styles.bookingContent}>
              <h2 className={styles.bookingTitle}>Ready to create?</h2>
              <p className={styles.bookingText}>
                Book your session or get in touch to discuss custom arrangements.
              </p>
            </div>
            <div className={styles.bookingActions}>
              <Button
                href="mailto:hello@dktsk.am?subject=Studio Booking"
                size="large"
              >
                Book a Session
              </Button>
              <Button
                variant="secondary"
                href="mailto:hello@dktsk.am?subject=Studio Inquiry"
                size="large"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
