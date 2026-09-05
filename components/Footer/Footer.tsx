'use client';

import { personalData } from '@/data/personal';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#e2e1da]/10 px-[clamp(1.25rem,5vw,4rem)] py-12 bg-[#080909]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-[#555754]">
        {/* Left: Identity */}
        <div className="flex items-center gap-3">
          <span className="text-[#e2e1da] font-semibold tracking-wider">
            {personalData.name.toUpperCase()}
          </span>
          <span>—</span>
          <span>{personalData.title}</span>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-6">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8a8a84] transition-colors"
          >
            GITHUB
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8a8a84] transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="hover:text-[#8a8a84] transition-colors"
          >
            EMAIL
          </a>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="hover:text-[#e2e1da] transition-colors cursor-pointer bg-transparent border-none"
          aria-label="Back to top"
        >
          BACK TO TOP ↑
        </button>
      </div>
    </footer>
  );
}
