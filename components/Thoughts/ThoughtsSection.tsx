import Link from 'next/link';
import { Article } from '@/types/thought';
import { ArticleRow } from './ArticleRow';

interface ThoughtsSectionProps {
  articles: Article[];
}

export function ThoughtsSection({ articles }: ThoughtsSectionProps) {
  if (!articles || articles.length === 0) {
    return (
      <section
        id="thoughts"
        className="relative w-full py-[clamp(4rem,8vw,8rem)] px-[clamp(1.25rem,5vw,4rem)] border-t border-[#e2e1da]/10"
        aria-label="Thoughts"
      >
        <div className="flex flex-col gap-2 mb-8">
          <span className="font-mono text-[0.625rem] font-medium text-[#555754] tracking-widest uppercase">
            THOUGHTS // WRITING
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#e2e1da] tracking-tight">
            THINGS I&apos;M THINKING ABOUT.
          </h2>
        </div>
        <div className="p-8 bg-[#101111] border border-[#e2e1da]/10 rounded-sm font-mono text-sm text-[#8a8a84] max-w-xl">
          <p className="text-[#e2e1da] font-semibold mb-1">NOTES COMING SOON.</p>
          <p>Writing on software engineering, AI, and architecture is being drafted.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="thoughts"
      className="relative w-full py-[clamp(4rem,8vw,8rem)] px-[clamp(1.25rem,5vw,4rem)] border-t border-[#e2e1da]/10"
      aria-label="Thoughts"
    >
      <div className="flex flex-col gap-2 mb-12">
        <span className="font-mono text-[0.625rem] font-medium text-[#555754] tracking-widest uppercase">
          THOUGHTS // WRITING
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#e2e1da] tracking-tight">
          THINGS I&apos;M THINKING ABOUT.
        </h2>
        <p className="text-base text-[#8a8a84] max-w-xl mt-2 leading-relaxed">
          Notes on software engineering, AI architecture, building products, and the lessons learned along the way.
        </p>
      </div>

      <div className="flex flex-col">
        {articles.map((article, idx) => (
          <ArticleRow key={article.slug} article={article} index={idx + 1} />
        ))}
      </div>

      <div className="mt-12 flex justify-end">
        <Link
          href="/thoughts"
          className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[#8a8a84] hover:text-[#e2e1da] tracking-widest uppercase py-2 border-b border-[#e2e1da]/10 hover:border-[#e2e1da] transition-colors group"
        >
          <span>VIEW ALL THOUGHTS</span>
          <span className="transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
