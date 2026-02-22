import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '@/assets/main/logo.png';
import type { SocialLink } from '@/types';

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/dk.tsk/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Soundcloud',
    url: 'https://soundcloud.com/dktsk',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 18V11l.05-.25c.05-.23.17-.44.33-.55s.37-.13.57-.06c.2.07.35.21.46.43L3 12v6l-.5.9c-.11.2-.26.35-.46.42-.2.08-.4.05-.58-.06-.17-.12-.28-.33-.33-.56L1 18zm3 0V8l.05-.25c.05-.23.17-.44.34-.56s.37-.13.57-.05c.2.07.35.22.45.44L6 9v9l-.5.9c-.1.2-.26.35-.46.42-.2.08-.4.05-.57-.06a.96.96 0 01-.34-.56L4 18zm3 0V9l.05-.25c.05-.23.17-.44.34-.56s.37-.13.57-.06c.2.08.35.22.45.44L9 10v8l-.5.9c-.1.2-.26.35-.46.42-.2.08-.4.05-.57-.06a.96.96 0 01-.34-.56L7 18zm3 0V7l.05-.25c.05-.23.17-.44.34-.56s.37-.13.57-.06c.2.08.35.22.45.44L12 8v10l-.5.9c-.1.2-.26.35-.46.42-.2.08-.4.05-.57-.06a.96.96 0 01-.34-.56L10 18zm7.5-12c2.49 0 4.5 2.01 4.5 4.5S19.99 15 17.5 15H13V6.12c.85-.4 1.79-.62 2.78-.62.92 0 1.8.2 2.6.55a.5.5 0 01.12.82v0z"/>
      </svg>
    ),
  },
  {
    name: 'Bandcamp',
    url: 'https://dktsk.bandcamp.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="dk.tsk" className={styles.logoImage} />
            </Link>
            <p className={styles.tagline}>Sound. Space. Freedom.</p>
          </div>

          <div className={styles.connect}>
            <h4 className={styles.navTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className={styles.location}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Teryan 91, Yerevan, Armenia</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} dk.tsk. All rights reserved.
          </p>
          <p className={styles.credit}>
            Music production studio & creative collective
          </p>
        </div>
      </div>
    </footer>
  );
}
