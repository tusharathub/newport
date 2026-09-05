'use client';

import Link from 'next/link';
import { LabItem } from '@/types/lab';

interface LabItemCardProps {
  item: LabItem;
}

export function LabItemCard({ item }: LabItemCardProps) {
  const itemHref = `/lab/${item.slug}`;

  return (
    <article className="group py-8 border-b border-[#e2e1da]/10 hover:border-[#e2e1da]/30 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: ID + Title + Status */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs text-[#555754]">
            <span>{item.id}</span>
            <span>—</span>
            <span className="text-[10px] text-[#8a8a84] px-2 py-0.5 border border-[#e2e1da]/10 rounded-sm uppercase tracking-wider">
              {item.status}
            </span>
            <span className="text-[#8a8a84]">{item.category}</span>
          </div>

          <Link
            href={itemHref}
            className="text-xl md:text-2xl font-bold text-[#e2e1da] group-hover:text-white transition-colors tracking-tight"
          >
            {item.title}
          </Link>

          <p className="text-sm md:text-base text-[#8a8a84] leading-relaxed">
            {item.description}
          </p>

          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px] text-[#555754] uppercase tracking-wider">
              {item.technologies.map((tech) => (
                <span key={tech}>#{tech}</span>
              ))}
            </div>
          )}
        </div>

        {/* Right: Action CTA */}
        <div className="flex items-center self-start md:self-center">
          <Link
            href={itemHref}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8a8a84] group-hover:text-[#e2e1da] tracking-widest uppercase transition-colors"
          >
            <span>EXPLORE</span>
            <span className="transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
