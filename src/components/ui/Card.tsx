import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import type { CardProps } from '@/types';

export default function Card({
  children,
  to,
  href,
  image,
  imageAlt = '',
  overlay = false,
  hover = true,
  className = '',
  onClick,
  ...props
}: CardProps) {
  const classNames = [
    styles.card,
    hover && styles.hoverable,
    overlay && styles.overlay,
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={imageAlt} className={styles.image} />
          <div className={styles.imageOverlay} />
        </div>
      )}
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.border} />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classNames} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={classNames} onClick={onClick} {...props}>
      {content}
    </div>
  );
}
