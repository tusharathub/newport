import Link from 'next/link';
import { Article } from '@/types/thought';

interface ArticleReaderProps {
  article: Article;
  previousArticle?: Article;
  nextArticle?: Article;
}

export function ArticleReader({
  article,
  previousArticle,
  nextArticle,
}: ArticleReaderProps) {
  return (
    <article className="w-full pt-[clamp(6rem,10vw,8rem)] pb-24 flex flex-col gap-12 max-w-3xl mx-auto">
      {/* Article Header */}
      <header className="flex flex-col gap-4 border-b border-[#e2e1da]/10 pb-8">
        <div className="flex items-center gap-3 font-mono text-xs text-[#555754]">
          <span>{article.category || 'ARTICLE'}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readingTime || '5 MIN READ'}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-[#e2e1da] tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-lg md:text-xl text-[#8a8a84] leading-relaxed">
          {article.description}
        </p>

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 font-mono text-[10px] text-[#555754] uppercase tracking-wider">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 border border-[#e2e1da]/10 rounded-sm text-[#8a8a84]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Body */}
      <div className="flex flex-col gap-8 text-base md:text-lg text-[#e2e1da] leading-relaxed">
        {article.sections.map((sec, idx) => (
          <section key={idx} className="flex flex-col gap-4">
            {sec.heading && (
              <h2 className="text-xl md:text-2xl font-bold text-[#e2e1da] tracking-tight mt-4">
                {sec.heading}
              </h2>
            )}

            {sec.body.map((p, pIdx) => (
              <p key={pIdx} className="text-[#e2e1da]">
                {p}
              </p>
            ))}

            {sec.codeSnippet && (
              <div className="my-4 p-4 bg-[#101111] border border-[#e2e1da]/10 rounded-sm font-mono text-xs overflow-x-auto">
                <div className="text-[10px] text-[#555754] uppercase tracking-wider mb-2 border-b border-[#e2e1da]/10 pb-1">
                  {sec.codeSnippet.language.toUpperCase()} SNIPPET
                </div>
                <pre className="text-xs text-[#8a8a84]">
                  <code>{sec.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {sec.callout && (
              <blockquote className="my-4 p-6 bg-[#101111] border-l-2 border-[#e2e1da] text-[#e2e1da] font-medium text-base italic">
                &ldquo;{sec.callout}&rdquo;
              </blockquote>
            )}
          </section>
        ))}
      </div>

      {/* Navigation Footer */}
      <footer className="pt-12 border-t border-[#e2e1da]/10 flex flex-col md:flex-row justify-between items-stretch gap-6">
        {previousArticle ? (
          <Link
            href={`/thoughts/${previousArticle.slug}`}
            className="flex-1 p-4 bg-[#101111] border border-[#e2e1da]/10 hover:border-[#e2e1da]/30 rounded-sm flex flex-col gap-1 transition-colors group"
          >
            <span className="font-mono text-[10px] text-[#555754] uppercase tracking-wider">
              ← PREVIOUS ARTICLE
            </span>
            <span className="font-semibold text-sm text-[#e2e1da] group-hover:text-white transition-colors">
              {previousArticle.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        <div className="flex items-center justify-center">
          <Link
            href="/thoughts"
            className="font-mono text-xs text-[#8a8a84] hover:text-[#e2e1da] tracking-widest uppercase transition-colors"
          >
            ALL THOUGHTS
          </Link>
        </div>

        {nextArticle ? (
          <Link
            href={`/thoughts/${nextArticle.slug}`}
            className="flex-1 p-4 bg-[#101111] border border-[#e2e1da]/10 hover:border-[#e2e1da]/30 rounded-sm flex flex-col gap-1 text-right transition-colors group"
          >
            <span className="font-mono text-[10px] text-[#555754] uppercase tracking-wider">
              NEXT ARTICLE →
            </span>
            <span className="font-semibold text-sm text-[#e2e1da] group-hover:text-white transition-colors">
              {nextArticle.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </footer>
    </article>
  );
}
