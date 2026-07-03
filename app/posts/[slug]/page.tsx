import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCategoryPill } from "@/components/blog-category-pill";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog/get-posts";
import { getCategoriesForTags } from "@/lib/blog/categories";
import type { BlogPostSummary } from "@/lib/blog/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `/blog/${post.slug}`,
      ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const categories = getCategoriesForTags(post.tags);

  return (
    <main className="min-h-screen overflow-x-clip bg-zinc-950 text-white">
      <article className="relative z-10 mx-auto max-w-3xl px-6 py-16 md:py-20">
        <Link
          href="/blog"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to blog
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase">
              {sourceLabels[post.source]}
            </span>
            {categories.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {categories.map((categoryId) => (
                  <BlogCategoryPill
                    key={categoryId}
                    categoryId={categoryId}
                    href={`/blog?category=${categoryId}`}
                  />
                ))}
              </div>
            ) : null}
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            {post.readingTimeMinutes ? (
              <span>{post.readingTimeMinutes} min read</span>
            ) : null}
          </div>

          {post.coverImage ? (
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.coverImage}
                alt=""
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ) : null}

          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            {post.title}
          </h1>
        </header>

        {/* ponytail: trusted own-content HTML from dev.to; add sanitizer if third-party sources are added */}
        <div
          className="blog-prose mt-10"
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />

        <footer className="mt-12 border-t border-white/10 pt-8">
          <a
            href={post.canonicalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cyan-300 transition hover:text-cyan-200"
          >
            Originally published on {sourceLabels[post.source]} →
          </a>
        </footer>
      </article>
    </main>
  );
}
