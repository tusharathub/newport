'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home', index: '01' },
  { href: '/projects', label: 'Projects', index: '02' },
  { href: '/#about', label: 'About', index: '03' },
  { href: '/#contact', label: 'Contact', index: '04' },
] as const;

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll direction detection ── */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);

      if (currentScrollY <= 60) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 5) {
        // Scrolling down -> hide navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 5) {
        // Scrolling up -> show navbar
        setVisible(true);
      }

      lastScrollY = currentScrollY;
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
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[clamp(1.25rem,5vw,4rem)] py-6 border-b transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-md ${
          visible || mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          scrolled
            ? 'bg-[#080909]/85 border-[#e2e1da]/10 shadow-lg'
            : 'bg-[#080909]/40 border-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Left — Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-[0.1em] uppercase text-[#e2e1da] hover:text-white transition-colors"
        >
          Tushar
        </Link>

        {/* Center — Links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-mono text-[0.6875rem] font-medium tracking-[0.1em] uppercase transition-colors ${
                isActive(href)
                  ? 'text-[#e2e1da]'
                  : 'text-[#8a8a84] hover:text-[#e2e1da]'
              }`}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right — Contact (desktop) */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center gap-1 font-mono text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-[#e2e1da] hover:text-white transition-colors group"
          onClick={() => handleLinkClick('/#contact')}
        >
          Contact{' '}
          <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </Link>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden flex items-center gap-1.5 font-mono text-xs font-medium tracking-[0.1em] uppercase text-[#e2e1da] bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span>{mobileOpen ? 'CLOSE' : 'MENU'}</span>
          <span className="text-sm">{mobileOpen ? '—' : '+'}</span>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[95] bg-[#080909] flex flex-col justify-center px-8 py-16 gap-8 transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        aria-hidden={!mobileOpen}
      >
        {NAV_LINKS.map(({ href, label, index }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-4 text-3xl font-bold tracking-tight text-[#e2e1da] hover:text-white transition-colors"
            onClick={() => handleLinkClick(href)}
          >
            <span className="font-mono text-xs font-normal text-[#555754] tracking-widest">
              {index}
            </span>
            {label}
          </Link>
        ))}

        <div className="w-full h-px bg-[#e2e1da]/10 my-4" />

        <Link
          href="/#about"
          className="font-mono text-sm tracking-widest uppercase text-[#8a8a84] hover:text-[#e2e1da] transition-colors flex items-center gap-2"
          onClick={() => handleLinkClick('/#about')}
        >
          Contact <span>↗</span>
        </Link>
      </div>
    </>
  );
}
