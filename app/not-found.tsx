import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found — Tushar Nailwal',
  description: 'The requested page could not be found.',
};

export default function NotFound() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center px-[clamp(1.25rem,5vw,4rem)] bg-[#080909] text-center">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <span className="font-mono text-xs font-semibold text-[#555754] tracking-widest">
          404 — NOT FOUND
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#e2e1da] tracking-tight">
          NOTHING HERE.
        </h1>
        <p className="text-base text-[#8a8a84] leading-relaxed">
          The requested page or exploration path does not exist or has been moved.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#e2e1da] hover:text-white tracking-widest uppercase py-2 px-6 bg-[#101111] border border-[#e2e1da]/15 hover:border-[#e2e1da]/40 rounded-sm transition-colors group"
          >
            <span>BACK TO HOME</span>
            <span className="transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
