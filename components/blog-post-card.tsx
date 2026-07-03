import Image from "next/image";
import Link from "next/link";
import { BlogCategoryPill } from "@/components/blog-category-pill";
import { StaggeredHoverText } from "@/components/staggered-hover-text";
import { getCategoriesForTags } from "@/lib/blog/categories";
import type { BlogPostSummary } from "@/lib/blog/types";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const sourceLabels: Record<BlogPostSummary["source"], string> = {
  devto: "dev.to",
};

export function BlogPostCard({ post }: { post: BlogPostSummary }) {
  const categories = getCategoriesForTags(post.tags);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/3 transition hover:border-white/20 hover:bg-white/5"
    >
      {post.coverImage ? (
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 scale-100 transition-slow group-hover:scale-[1.02]">
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="eager"
            />
          </div>
        </div>
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-secondary">
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-medium uppercase tracking-wider">
            {sourceLabels[post.source]}
          </span>
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          {post.readingTimeMinutes ? (
            <span>{post.readingTimeMinutes} min read</span>
          ) : null}
        </div>
        <h2 className="mt-3 text-lg font-semibold leading-snug break-words text-white">
          <StaggeredHoverText text={post.title} />
        </h2>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-secondary">
          {post.excerpt}
        </p>
        {categories.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((categoryId) => (
              <BlogCategoryPill key={categoryId} categoryId={categoryId} />
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
