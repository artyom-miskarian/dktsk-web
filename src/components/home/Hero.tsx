import { useState, useEffect, useRef, type CSSProperties } from 'react';
import styles from './Hero.module.css';
import bgImage from '@/assets/main/hero.jpg';
import heroVideo from '@/assets/hero-mobile.mp4';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Background image revealed by spotlight (desktop) */}
      <div
        className={styles.bgImage}
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
          backgroundImage: `url(${bgImage})`,
        } as CSSProperties}
      />

      {/* Background video (mobile only) */}
      <video
        className={styles.bgVideo}
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Ambient background layers */}
      <div className={styles.bgNoise} />
      <div className={styles.bgGradient} />

      {/* Left-aligned minimal text block */}
      <div className={styles.textBlock}>
        <span className={styles.label}>sound collective</span>
        <h1 className={styles.title}>dk.tsk</h1>
        <div className={styles.meta}>
          <span className={styles.location}>Yerevan</span>
          <span className={styles.divider} />
          <span className={styles.year}>est. 2019</span>
        </div>
      </div>

      {/* Vertical text accent */}
      <div className={styles.verticalText}>
        <span>sound — space — freedom</span>
      </div>

      {/* Corner accents */}
      <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
      <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
    </section>
  );
}
