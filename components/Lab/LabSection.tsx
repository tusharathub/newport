import Link from 'next/link';
import { LabItem } from '@/types/lab';
import { LabItemCard } from './LabItemCard';

interface LabSectionProps {
  items: LabItem[];
}

export function LabSection({ items }: LabSectionProps) {
  return (
    <section
      id="lab"
      className="relative w-full py-[clamp(4rem,8vw,8rem)] px-[clamp(1.25rem,5vw,4rem)] border-t border-[#e2e1da]/10"
      aria-label="The Lab"
    >
      <div className="flex flex-col gap-2 mb-12">
        <span className="font-mono text-[0.625rem] font-medium text-[#555754] tracking-widest uppercase">
          THE LAB // EXPERIMENTS
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#e2e1da] tracking-tight">
          THINGS I&apos;M EXPLORING.
        </h2>
        <p className="text-base text-[#8a8a84] max-w-xl mt-2 leading-relaxed">
          A collection of experiments, prototypes, utilities, and ideas I&apos;m
          exploring to learn and solve interesting problems.
        </p>
      </div>

      <div className="flex flex-col">
        {items.map((item) => (
          <LabItemCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-12 flex justify-end">
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[#8a8a84] hover:text-[#e2e1da] tracking-widest uppercase py-2 border-b border-[#e2e1da]/10 hover:border-[#e2e1da] transition-colors group"
        >
          <span>VIEW ALL EXPERIMENTS</span>
          <span className="transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
