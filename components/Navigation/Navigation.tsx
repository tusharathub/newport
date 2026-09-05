'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const NAV_LINKS = [
  { href: '/#work', label: 'Work', index: '01' },
  { href: '/lab', label: 'Lab', index: '02' },
  { href: '/thoughts', label: 'Thoughts', index: '03' },
  { href: '/#about', label: 'About', index: '04' },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return pathname === '/';
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  /* ── Handle anchor link clicks (smooth scroll on same page) ── */
  const handleLinkClick = (href: string) => {
    setMobileOpen(false);

    if (href.startsWith('/#') && pathname === '/') {
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${mobileOpen ? styles.menuOpen : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Left — Name */}
        <Link href="/" className={styles.logo}>
          Tushar
        </Link>

        {/* Center — Links (desktop) */}
        <div className={styles.links}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${isActive(href) ? styles.linkActive : ''}`}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right — Contact (desktop) */}
        <Link
          href="/#about"
          className={styles.contact}
          onClick={() => handleLinkClick('/#about')}
        >
          Contact <span className={styles.contactArrow}>↗</span>
        </Link>

        {/* Mobile toggle — editorial "MENU +" */}
        <button
          className={styles.menuToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          Menu
          <span className={styles.menuToggleIcon}>+</span>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        {NAV_LINKS.map(({ href, label, index }) => (
          <Link
            key={href}
            href={href}
            className={styles.mobileLink}
            onClick={() => handleLinkClick(href)}
          >
            <span className={styles.mobileLinkIndex}>{index}</span>
            {label}
          </Link>
        ))}
        <div className={styles.mobileDivider} />
        <Link
          href="/#about"
          className={styles.mobileContact}
          onClick={() => handleLinkClick('/#about')}
        >
          Contact <span className={styles.contactArrow}>↗</span>
        </Link>
      </div>
    </>
  );
}
