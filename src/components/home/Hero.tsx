import { useState, useEffect, useRef, type CSSProperties } from 'react';
import styles from './Hero.module.css';
import logo from '@/assets/logo/logo.png';

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

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Ambient background layers */}
      <div className={styles.bgNoise} />
      <div className={styles.bgGradient} />

      {/* Cursor-following light beam */}
      <div
        className={styles.lightBeam}
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        } as CSSProperties}
      />

      {/* Decorative grid */}
      <div className={styles.grid} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="dk.tsk" className={styles.logo} />
          <div className={styles.logoGlow} />
        </div>

        <h1 className={styles.tagline}>
          <span className={styles.taglineWord}>Sound.</span>
          <span className={styles.taglineWord}>Space.</span>
          <span className={styles.taglineWord}>Freedom.</span>
        </h1>

        <p className={styles.subtitle}>
          Music production studio & creative collective
          <br />
          <span className={styles.location}>Yerevan, Armenia</span>
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        className={styles.scrollIndicator}
        onClick={scrollToContent}
        aria-label="Scroll to content"
      >
        <span className={styles.scrollText}>Explore</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </button>

      {/* Corner accents */}
      <div className={`${styles.corner} ${styles.cornerTopLeft}`} />
      <div className={`${styles.corner} ${styles.cornerBottomRight}`} />
    </section>
  );
}
