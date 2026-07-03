import { DEVTO_USERNAME } from "@/lib/blog/config";
import type { BlogPostSummary, BlogSource } from "@/lib/blog/types";

type DevToArticle = {
  slug: string;
  title: string;
  description: string;
  published_at: string;
  cover_image: string | null;
  reading_time_minutes: number;
  tag_list: unknown;
  url: string;
  body_html?: string;
};

const REVALIDATE_SECONDS = 300;

function normalizeTags(tagList: unknown): string[] {
  if (Array.isArray(tagList)) {
    return tagList.filter((tag): tag is string => typeof tag === "string");
  }
  if (typeof tagList === "string") {
    return tagList
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
}

function stripDevToCodeBlockActions(html: string): string {
  return html.replace(
    /<div class="highlight__panel[^"]*">[\s\S]*?<\/div>\s*<\/div>/g,
    "",
  );
}

function mapArticle(article: DevToArticle): BlogPostSummary {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.description,
    publishedAt: article.published_at,
    coverImage: article.cover_image ?? undefined,
    readingTimeMinutes: article.reading_time_minutes,
    tags: normalizeTags(article.tag_list),
    source: "devto",
    canonicalUrl: article.url,
  };
}

async function fetchDevToArticles(): Promise<DevToArticle[]> {
  const response = await fetch(
    `https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=30`,
    { next: { revalidate: REVALIDATE_SECONDS } },
  );

  if (!response.ok) {
    throw new Error(`dev.to list fetch failed: ${response.status}`);
  }

  return response.json();
}

async function fetchDevToArticle(slug: string): Promise<DevToArticle | null> {
  const response = await fetch(
    `https://dev.to/api/articles/${DEVTO_USERNAME}/${slug}`,
    { next: { revalidate: REVALIDATE_SECONDS } },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`dev.to article fetch failed: ${response.status}`);
  }

  return response.json();
}

export const devToSource: BlogSource = {
  id: "devto",
  async fetchSummaries() {
    const articles = await fetchDevToArticles();
    return articles.map(mapArticle);
  },
  async fetchBySlug(slug) {
    const article = await fetchDevToArticle(slug);
    if (!article?.body_html) {
      return null;
    }

    return {
      ...mapArticle(article),
      bodyHtml: stripDevToCodeBlockActions(article.body_html),
    };
  },
};
