import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '@/assets/logo/logo.png';
import type { SocialLink } from '@/types';

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/dktsk',
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
        <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.052-.1-.084-.1zm-.899 1.755c-.048 0-.082.033-.09.082l-.159 1.5.159 1.476c.008.05.042.082.09.082.045 0 .08-.032.087-.082l.185-1.476-.185-1.5c-.007-.049-.042-.082-.087-.082zm1.833-2.5c-.06 0-.107.046-.115.103l-.21 2.696.21 2.65c.008.057.055.097.115.097.06 0 .105-.04.113-.097l.232-2.65-.232-2.696c-.008-.057-.053-.103-.113-.103zm.947.112c-.068 0-.12.047-.127.115l-.188 2.584.188 2.535c.007.068.059.108.127.108.069 0 .12-.04.128-.108l.208-2.535-.208-2.584c-.008-.068-.059-.115-.128-.115zm.98-.263c-.076 0-.133.055-.14.132l-.166 2.847.166 2.426c.007.076.064.125.14.125.076 0 .133-.049.14-.125l.183-2.426-.183-2.847c-.007-.077-.064-.132-.14-.132zm.99-.171c-.083 0-.147.056-.154.14l-.144 3.018.144 2.318c.007.083.071.133.154.133.084 0 .147-.05.155-.133l.16-2.318-.16-3.018c-.008-.084-.071-.14-.155-.14zm1.01.09c-.092 0-.162.063-.169.155l-.122 2.928.122 2.209c.007.092.077.147.169.147.091 0 .161-.055.169-.147l.135-2.209-.135-2.928c-.008-.092-.078-.155-.169-.155zm1.001-.336c-.1 0-.175.07-.183.17l-.1 3.264.1 2.1c.008.1.083.163.183.163.1 0 .175-.063.183-.163l.111-2.1-.111-3.264c-.008-.1-.083-.17-.183-.17zm1.02.213c-.108 0-.19.076-.198.183l-.079 3.051.079 2.091c.008.107.09.176.198.176.108 0 .19-.069.198-.176l.088-2.091-.088-3.051c-.008-.107-.09-.183-.198-.183zm1.517-.42c-.06-.003-.12.01-.173.038-.054.03-.098.075-.128.13l-.038.086-.053 3.379.053 2.05c.007.116.097.19.213.19.058 0 .112-.023.15-.063.04-.04.062-.094.063-.152l.059-2.025-.059-3.379c-.007-.115-.097-.19-.213-.19h.126zm.962.037c-.125 0-.225.088-.233.213l-.032 3.173.032 2.033c.008.125.108.207.233.207.125 0 .225-.082.233-.207l.036-2.033-.036-3.173c-.008-.125-.108-.213-.233-.213zm.997-.163c-.133 0-.24.095-.248.227l-.01 3.336.01 2.02c.008.132.115.22.248.22.132 0 .24-.088.248-.22l.011-2.02-.011-3.336c-.008-.132-.116-.227-.248-.227zm3.09.14c-.2-.3-.47-.54-.8-.7-.32-.16-.68-.25-1.05-.25-.18 0-.35.02-.52.06-.13.03-.24.15-.24.29v5.69c0 .14.1.26.23.29.05.01.68.01 2.38.01 1.32 0 2.4-1.08 2.4-2.4 0-1.17-.83-2.14-1.94-2.36l.54-1.62-.54-1.62c1.11-.22 1.94-1.19 1.94-2.36 0-1.32-1.08-2.4-2.4-2.4-1.7 0-2.33 0-2.38.01-.13.03-.23.15-.23.29v5.69c0 .14.11.26.24.29.17.04.34.06.52.06.37 0 .73-.09 1.05-.25.33-.16.6-.4.8-.7z" />
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
