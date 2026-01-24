import styles from './SectionTitle.module.css';
import type { SectionTitleProps } from '@/types';

export default function SectionTitle({
  children,
  subtitle,
  align = 'left',
  className = ''
}: SectionTitleProps) {
  return (
    <div className={`${styles.wrapper} ${styles[align]} ${className}`}>
      <h2 className={styles.title}>{children}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.line} />
    </div>
  );
}
