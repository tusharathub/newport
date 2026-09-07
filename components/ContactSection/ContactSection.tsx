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

        {/* Dramatic Final Heading — Unbounded poster statement */}
        <h2 className="font-unbounded font-black text-[clamp(2.8rem,7vw,6.5rem)] text-[#e7e6df] tracking-[-0.04em] leading-[0.9] uppercase">
          LET&apos;S BUILD SOMETHING WORTH SHIPPING.
        </h2>

        <p className="font-body text-xl md:text-2xl text-[#a1a29b] max-w-2xl leading-relaxed">
          Open to considered collaborations and conversations concerning matters worth bringing into being.
        </p>

        {/* Direct Email Action & Social/Resume Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
          {/* <a
            href={`mailto:${personalData.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#e7e6df] text-[#111210] font-mono text-sm font-semibold tracking-widest uppercase hover:bg-white transition-colors rounded-sm group"
          >
            <span>SAY HELLO</span>
            <span className="transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a> */}

          <div className="flex items-center gap-6 font-mono text-xs text-[#a1a29b]">
            {personalData.github && (
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e7e6df] transition-colors"
              >
                GITHUB
              </a>
            )}
            {personalData.linkedin && (
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e7e6df] transition-colors"
              >
                LINKEDIN
              </a>
            )}
            {personalData.resume && (
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e7e6df] transition-colors"
              >
                RESUME
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
