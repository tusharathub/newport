import { personalData } from '@/data/personal';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-[clamp(4rem,8vw,8rem)] px-[clamp(1.25rem,5vw,4rem)] border-t border-[#343531] bg-[#181917]"
      aria-label="About Me"
    >
      {/* Intro Header */}
      <div className="flex flex-col gap-3 mb-12">
        <span className="font-mono text-[0.625rem] font-medium text-[#777871] tracking-widest uppercase">
          02 — ABOUT
        </span>
        <h2 className="font-big-shoulders text-4xl md:text-7xl font-black text-[#e7e6df] tracking-tight max-w-4xl leading-[0.95] uppercase">
          I build, compelled by refined and restless curiosity
        </h2>
      </div>

      {/* Story Bio & Working Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-7 flex flex-col gap-6 text-base md:text-lg font-body text-[#a1a29b] leading-relaxed">
          {personalData.fullBio.map((paragraph, idx) => (
            <p key={idx} className="text-[#e7e6df]/90">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right Sidebar: Working Philosophy */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Working Philosophy Editorial Block */}
          <div className="p-6 bg-[#252623] border border-[#343531] rounded-sm flex flex-col gap-4">
            <span className="font-mono text-[10px] text-[#777871] tracking-widest uppercase">
              PHILOSOPHY — {personalData.workingPhilosophy.title}
            </span>
            <p className="font-bodoni text-2xl md:text-4xl font-normal italic text-[#e7e6df] leading-snug">
              &quot;{personalData.workingPhilosophy.statement}&quot;
            </p>
            <p className="font-body text-xs md:text-sm text-[#a1a29b] leading-relaxed">
              {personalData.workingPhilosophy.body}
            </p>
          </div>
        </div>
      </div>

      {/* Capabilities Matrix */}
      <div className="flex flex-col gap-8 pt-12 border-t border-[#343531]">
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs font-semibold text-[#a1a29b] tracking-widest uppercase">
            CAPABILITIES & TECHNICAL SPECTRUM
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalData.capabilities.map((cap) => (
            <div
              key={cap.id}
              className="p-6 bg-[#20211f] border border-[#343531] rounded-sm flex flex-col gap-4"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#777871]">{cap.id}</span>
                <span className="font-unbounded font-bold text-[#e7e6df] tracking-wider uppercase text-xs">
                  {cap.category}
                </span>
              </div>

              <p className="text-xs md:text-sm text-[#a1a29b] leading-relaxed">
                {cap.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#343531]">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] text-[#a1a29b] px-2 py-0.5 bg-[#252623] border border-[#343531] rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
