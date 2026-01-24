import { useState, useEffect, type KeyboardEvent, type MouseEvent, type CSSProperties } from 'react';
import styles from './ImageGallery.module.css';
import type { ImageGalleryProps } from '@/types';

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync body overflow with lightbox state
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div
        className={styles.grid}
        style={{ '--columns': columns } as CSSProperties}
      >
        {images.map((image, index) => (
          <button
            key={index}
            className={styles.item}
            onClick={() => openLightbox(index)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img src={image} alt="" className={styles.thumbnail} />
            <div className={styles.overlay}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <button
            className={styles.closeButton}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={(e: MouseEvent) => { e.stopPropagation(); goToPrevious(); }}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <img
            src={images[activeIndex]}
            alt=""
            className={styles.lightboxImage}
            onClick={(e: MouseEvent) => e.stopPropagation()}
          />

          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={(e: MouseEvent) => { e.stopPropagation(); goToNext(); }}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className={styles.counter}>
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
