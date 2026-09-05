import Link from 'next/link';
import { LabItem } from '@/types/lab';

interface LabDetailViewProps {
  item: LabItem;
}

export function LabDetailView({ item }: LabDetailViewProps) {
  const content = item.content;

  return (
    <article className="w-full pt-[clamp(6rem,10vw,8rem)] pb-24 flex flex-col gap-12">
      {/* Header */}
      <header className="flex flex-col gap-4 border-b border-[#e2e1da]/10 pb-8">
        <div className="flex items-center gap-3 font-mono text-xs text-[#555754]">
          <span>{item.id} — LAB EXPERIMENT</span>
          <span>—</span>
          <span className="text-[10px] text-[#8a8a84] px-2 py-0.5 border border-[#e2e1da]/10 rounded-sm uppercase tracking-wider">
            {item.status}
          </span>
        </div>

        <h1 className="text-3xl md:text-6xl font-bold text-[#e2e1da] tracking-tight">
          {item.title}
        </h1>

        <p className="text-lg md:text-xl text-[#8a8a84] leading-relaxed max-w-3xl">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-6 pt-4 font-mono text-xs text-[#8a8a84]">
          <div>
            <span className="text-[#555754] uppercase tracking-wider block text-[10px]">
              CATEGORY
            </span>
            <span>{item.category}</span>
          </div>
          <div>
            <span className="text-[#555754] uppercase tracking-wider block text-[10px]">
              YEAR
            </span>
            <span>{item.year}</span>
          </div>
          {item.technologies && item.technologies.length > 0 && (
            <div>
              <span className="text-[#555754] uppercase tracking-wider block text-[10px]">
                TECHNOLOGIES
              </span>
              <span>{item.technologies.join(' / ')}</span>
            </div>
          )}
        </div>
      </header>

      {/* Body Content */}
      <div className="flex flex-col gap-8 max-w-3xl">
        {content?.why && (
          <section className="flex flex-col gap-2">
            <h2 className="font-mono text-xs font-semibold text-[#8a8a84] tracking-widest uppercase">
              WHY I BUILT IT
            </h2>
            <p className="text-base md:text-lg text-[#e2e1da] leading-relaxed">
              {content.why}
            </p>
          </section>
        )}

        {content?.explored && (
          <section className="flex flex-col gap-2">
            <h2 className="font-mono text-xs font-semibold text-[#8a8a84] tracking-widest uppercase">
              WHAT I EXPLORED
            </h2>
            <p className="text-base md:text-lg text-[#e2e1da] leading-relaxed">
              {content.explored}
            </p>
          </section>
        )}

        {content?.learned && (
          <section className="flex flex-col gap-2">
            <h2 className="font-mono text-xs font-semibold text-[#8a8a84] tracking-widest uppercase">
              WHAT I LEARNED
            </h2>
            <p className="text-base md:text-lg text-[#e2e1da] leading-relaxed">
              {content.learned}
            </p>
          </section>
        )}

        {content?.next && (
          <section className="flex flex-col gap-2">
            <h2 className="font-mono text-xs font-semibold text-[#8a8a84] tracking-widest uppercase">
              WHAT&apos;S NEXT
            </h2>
            <p className="text-base md:text-lg text-[#e2e1da] leading-relaxed">
              {content.next}
            </p>
          </section>
        )}
      </div>

      {/* Footer link */}
      <div className="pt-12 border-t border-[#e2e1da]/10">
        <Link
          href="/lab"
          className="font-mono text-xs text-[#8a8a84] hover:text-[#e2e1da] tracking-widest uppercase transition-colors"
        >
          ← BACK TO LAB
        </Link>
      </div>
    </article>
  );
}
