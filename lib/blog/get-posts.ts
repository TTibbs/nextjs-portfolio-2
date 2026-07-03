import { devToSource } from "@/lib/blog/sources/devto";
import type { BlogPost, BlogPostSummary, BlogSource } from "@/lib/blog/types";

const sources: BlogSource[] = [devToSource];

function sortByDate(posts: BlogPostSummary[]) {
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getAllPostSummaries(): Promise<BlogPostSummary[]> {
  const results = await Promise.allSettled(
    sources.map((source) => source.fetchSummaries()),
  );

  const posts = results.flatMap((result) =>
    result.status === "fulfilled" ? result.value : [],
  );

  return sortByDate(posts);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const results = await Promise.allSettled(
    sources.map((source) => source.fetchBySlug(slug)),
  );

  for (const result of results) {
    if (result.status === "fulfilled" && result.value) {
      return result.value;
    }
  }

  return null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPostSummaries();
  return posts.map((post) => post.slug);
}
