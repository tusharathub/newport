export interface ArticleSection {
  heading?: string;
  body: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  callout?: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  tags?: string[];
  readingTime?: string;
  featured?: boolean;
  published: boolean;
  coverImage?: string;
  sections: ArticleSection[];
}
