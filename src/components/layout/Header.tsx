import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '@/assets/main/logo.png';
import type { NavItem, SocialLink } from '@/types';

const navItems: NavItem[] = [
  { path: '/events', label: 'Events' },
  { path: '/artists', label: 'Residents' },
  { path: '/podcasts', label: 'Podcasts' },
  { path: '/studio', label: 'Studio' },
];

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/dk.tsk/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 18V11l.05-.25c.05-.23.17-.44.33-.55s.37-.13.57-.06c.2.07.35.21.46.43L3 12v6l-.5.9c-.11.2-.26.35-.46.42-.2.08-.4.05-.58-.06-.17-.12-.28-.33-.33-.56L1 18zm3 0V8l.05-.25c.05-.23.17-.44.34-.56s.37-.13.57-.05c.2.07.35.22.45.44L6 9v9l-.5.9c-.1.2-.26.35-.46.42-.2.08-.4.05-.57-.06a.96.96 0 01-.34-.56L4 18zm3 0V9l.05-.25c.05-.23.17-.44.34-.56s.37-.13.57-.06c.2.08.35.22.45.44L9 10v8l-.5.9c-.1.2-.26.35-.46.42-.2.08-.4.05-.57-.06a.96.96 0 01-.34-.56L7 18zm3 0V7l.05-.25c.05-.23.17-.44.34-.56s.37-.13.57-.06c.2.08.35.22.45.44L12 8v10l-.5.9c-.1.2-.26.35-.46.42-.2.08-.4.05-.57-.06a.96.96 0 01-.34-.56L10 18zm7.5-12c2.49 0 4.5 2.01 4.5 4.5S19.99 15 17.5 15H13V6.12c.85-.4 1.79-.62 2.78-.62.92 0 1.8.2 2.6.55a.5.5 0 01.12.82v0z"/>
      </svg>
    ),
  },
  {
    name: 'Bandcamp',
    url: 'https://dktsk.bandcamp.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
      </svg>
    ),
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync body overflow with menu state
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change - this is now handled via onClick on NavLinks
  // which is the recommended pattern

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="dk.tsk" className={styles.logoImage} />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                  onClick={closeMenu}
                >
                  <span className={styles.navText}>{item.label}</span>
                  <span className={styles.navUnderline} />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social links — inline on desktop, bottom of mobile menu */}
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
        </nav>

        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayVisible : ''}`}
        onClick={closeMenu}
      />
    </header>
  );
}
