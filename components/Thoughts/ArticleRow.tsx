'use client';

import Link from 'next/link';
import { Article } from '@/types/thought';

interface ArticleRowProps {
  article: Article;
  index: number;
}

export function ArticleRow({ article, index }: ArticleRowProps) {
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;
  const articleHref = `/thoughts/${article.slug}`;

  return (
    <article className="group py-8 border-b border-[#e2e1da]/10 hover:border-[#e2e1da]/30 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Index + Metadata + Title + Summary */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs text-[#555754]">
            <span>{formattedIndex}</span>
            <span>—</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readingTime || '5 MIN READ'}</span>
            {article.category && (
              <>
                <span>•</span>
                <span className="text-[#8a8a84] uppercase tracking-wider">
                  {article.category}
                </span>
              </>
            )}
          </div>

          <Link
            href={articleHref}
            className="text-xl md:text-3xl font-bold text-[#e2e1da] group-hover:text-white transition-colors tracking-tight"
          >
            {article.title}
          </Link>

          <p className="text-sm md:text-base text-[#8a8a84] leading-relaxed">
            {article.description}
          </p>
        </div>

        {/* Right: Read Action */}
        <div className="flex items-center self-start md:self-center">
          <Link
            href={articleHref}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8a8a84] group-hover:text-[#e2e1da] tracking-widest uppercase transition-colors"
          >
            <span>READ ARTICLE</span>
            <span className="transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
