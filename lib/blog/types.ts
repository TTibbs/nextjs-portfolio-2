export type BlogSourceId = "devto";

export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: string;
  readingTimeMinutes?: number;
  tags: string[];
  source: BlogSourceId;
  canonicalUrl: string;
};

export type BlogPost = BlogPostSummary & {
  bodyHtml: string;
};

export type BlogSource = {
  id: BlogSourceId;
  fetchSummaries: () => Promise<BlogPostSummary[]>;
  fetchBySlug: (slug: string) => Promise<BlogPost | null>;
};
