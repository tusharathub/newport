import { personalData } from '@/data/personal';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full py-[clamp(6rem,12vw,10rem)] px-[clamp(1.25rem,5vw,4rem)] border-t border-[#e2e1da]/10 bg-[#080909]"
      aria-label="Contact"
    >
      <div className="flex flex-col gap-8 max-w-4xl">
        {/* Availability Badge */}
        {personalData.availability.enabled && (
          <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[#e2e1da] px-3 py-1 bg-[#101111] border border-[#e2e1da]/15 rounded-sm tracking-widest w-fit">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span>{personalData.availability.label}</span>
          </div>
        )}

        {/* Dramatic Final Heading */}
        <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold text-[#e2e1da] tracking-[-0.05em] leading-none">
          LET&apos;S BUILD SOMETHING WORTH SHIPPING.
        </h2>

        <p className="text-xl md:text-2xl text-[#8a8a84] max-w-2xl leading-relaxed">
          Have an interesting project, engineering challenge, or opportunity in mind? Get in touch.
        </p>

        {/* Direct Email Action & Social Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
          {/* <a
            href={`mailto:${personalData.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#e2e1da] text-[#080909] font-mono text-sm font-semibold tracking-widest uppercase hover:bg-white transition-colors rounded-sm group"
          >
            <span>SAY HELLO</span>
            <span className="transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a> */}

          <div className="flex items-center gap-6 font-mono text-xs text-[#8a8a84]">
            {personalData.github && (
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e2e1da] transition-colors"
              >
                GITHUB
              </a>
            )}
            {personalData.linkedin && (
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e2e1da] transition-colors"
              >
                LINKEDIN
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
