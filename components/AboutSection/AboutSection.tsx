import { personalData } from '@/data/personal';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-[clamp(4rem,8vw,8rem)] px-[clamp(1.25rem,5vw,4rem)] border-t border-[#e2e1da]/10"
      aria-label="About Me"
    >
      {/* Intro Header */}
      <div className="flex flex-col gap-2 mb-12">
        <span className="font-mono text-[0.625rem] font-medium text-[#555754] tracking-widest uppercase">
          02 // ABOUT
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#e2e1da] tracking-tight max-w-4xl leading-tight">
          I LIKE TURNING IDEAS INTO THINGS THAT WORK.
        </h2>
      </div>

      {/* Story Bio Paragraphs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-7 flex flex-col gap-6 text-base md:text-lg text-[#8a8a84] leading-relaxed">
          {personalData.fullBio.map((paragraph, idx) => (
            <p key={idx} className="text-[#e2e1da]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Current Focus Block */}
        <div className="lg:col-span-5 p-6 bg-[#101111] border border-[#e2e1da]/10 rounded-sm flex flex-col gap-4">
          <span className="font-mono text-[10px] text-[#555754] tracking-widest uppercase">
            CURRENT FOCUS
          </span>
          <ul className="flex flex-col gap-3 font-mono text-xs text-[#8a8a84]">
            {personalData.currentFocus.map((focus, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#555754]">0{idx + 1}</span>
                <span>{focus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Capabilities Matrix */}
      <div className="flex flex-col gap-8 pt-8 border-t border-[#e2e1da]/10">
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs font-semibold text-[#8a8a84] tracking-widest uppercase">
            CAPABILITIES & TECHNICAL SPECTRUM
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalData.capabilities.map((cap) => (
            <div
              key={cap.id}
              className="p-6 bg-[#101111] border border-[#e2e1da]/10 rounded-sm flex flex-col gap-4"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#555754]">{cap.id}</span>
                <span className="text-[#e2e1da] font-semibold tracking-wider">
                  {cap.category}
                </span>
              </div>

              <p className="text-xs md:text-sm text-[#8a8a84] leading-relaxed">
                {cap.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#e2e1da]/10">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] text-[#8a8a84] px-2 py-0.5 bg-[#171918] border border-[#e2e1da]/10 rounded-sm"
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
