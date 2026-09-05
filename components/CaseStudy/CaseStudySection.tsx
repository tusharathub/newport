import { ReactNode } from 'react';

interface CaseStudySectionProps {
  number: string;
  title: string;
  children?: ReactNode;
  text?: string;
  bullets?: string[];
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
}

export function CaseStudySection({
  number,
  title,
  children,
  text,
  bullets,
  codeSnippet,
}: CaseStudySectionProps) {
  return (
    <section className="flex flex-col gap-4 py-8 border-b border-[#e2e1da]/10 last:border-none">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-[#555754] tracking-widest">
          {number}
        </span>
        <span className="text-xs text-[#252725] font-mono">—</span>
        <h2 className="font-mono text-xs font-semibold text-[#8a8a84] tracking-widest uppercase">
          {title}
        </h2>
      </div>

      {text && (
        <p className="text-base md:text-lg text-[#e2e1da] leading-relaxed max-w-2xl">
          {text}
        </p>
      )}

      {bullets && bullets.length > 0 && (
        <ul className="flex flex-col gap-2 my-2">
          {bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm md:text-base text-[#8a8a84] leading-relaxed"
            >
              <span className="font-mono text-xs text-[#555754] pt-1">0{idx + 1}</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {codeSnippet && (
        <div className="my-4 p-4 bg-[#101111] border border-[#e2e1da]/10 rounded-sm font-mono text-xs text-[#e2e1da] overflow-x-auto">
          <div className="text-[10px] text-[#555754] uppercase tracking-wider mb-2 border-b border-[#e2e1da]/10 pb-1">
            {codeSnippet.title}
          </div>
          <pre className="text-xs text-[#8a8a84] leading-relaxed">
            <code>{codeSnippet.code}</code>
          </pre>
        </div>
      )}

      {children}
    </section>
  );
}
