import type { Metadata } from "next";
import Link from "next/link";
import { BlogCategoryPill } from "@/components/blog-category-pill";
import { BlogPostCard } from "@/components/blog-post-card";
import { StaggeredHoverText } from "@/components/staggered-hover-text";
import { enquiryHref } from "@/lib/data";
import {
  BLOG_CATEGORIES,
  getUsedCategories,
  postMatchesCategory,
  type BlogCategoryId,
} from "@/lib/blog/categories";
import { getAllPostSummaries } from "@/lib/blog/get-posts";
import { POSTS_PER_PAGE } from "@/lib/blog/config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building software, shipping products, and making technical decisions that last.",
  alternates: {
    canonical: "/blog",
  },
};

type BlogPageProps = {
  searchParams: Promise<{ category?: string; page?: string }>;
};

function parseCategory(value: string | undefined): BlogCategoryId | undefined {
  const usedIds = BLOG_CATEGORIES.map((c) => c.id);
  if (value && usedIds.includes(value as BlogCategoryId)) {
    return value as BlogCategoryId;
  }
  return undefined;
}

function parsePage(value: string | undefined) {
  const page = Number(value);
  if (!Number.isInteger(page) || page < 1) {
    return 1;
  }
  return page;
}

function blogHref({
  category,
  page,
}: {
  category?: BlogCategoryId;
  page?: number;
}) {
  const params = new URLSearchParams();
  if (category) {
    params.set("category", category);
  }
  if (page && page > 1) {
    params.set("page", String(page));
  }
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

const paginationButtonClassName =
  "rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-fast hover:border-white/20 hover:bg-white/10";

const paginationButtonDisabledClassName =
  "cursor-not-allowed rounded-full border border-white/5 bg-white/2 px-5 py-2.5 text-sm font-semibold text-secondary";

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category: categoryParam, page: pageParam } = await searchParams;
  const activeCategory = parseCategory(categoryParam);

  let posts: Awaited<ReturnType<typeof getAllPostSummaries>> = [];

  try {
    posts = await getAllPostSummaries();
  } catch {
    posts = [];
  }

  const usedCategories = getUsedCategories(posts);
  const filteredPosts = posts.filter((post) =>
    postMatchesCategory(post.tags, activeCategory),
  );
  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );
  const currentPage = Math.min(parsePage(pageParam), totalPages);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <main className="min-h-screen overflow-x-clip bg-zinc-950 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Link
          href="/"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to home
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Writing
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Notes on building software.
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-secondary">
            Practical posts on websites, MVPs, rescue work, and the decisions
            that keep projects maintainable.
          </p>
        </div>

        {usedCategories.length > 0 ? (
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <Link
              href="/blog"
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-fast ${
                !activeCategory
                  ? "border-brand-accent/30 bg-brand-accent/15 text-brand-accent"
                  : "border-white/10 bg-white/5 text-secondary hover:border-brand-accent/20 hover:bg-brand-accent/10 hover:text-brand-accent"
              }`}
            >
              All
            </Link>
            {usedCategories.map((categoryId) => (
              <BlogCategoryPill
                key={categoryId}
                categoryId={categoryId}
                href={blogHref({ category: categoryId })}
                active={activeCategory === categoryId}
              />
            ))}
          </div>
        ) : null}

        {posts.length > 0 ? (
          filteredPosts.length > 0 ? (
            <>
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
                  <BlogPostCard
                    key={`${post.source}-${post.slug}`}
                    post={post}
                  />
                ))}
              </div>
              {totalPages > 1 ? (
                <nav
                  aria-label="Blog pagination"
                  className="mt-10 flex items-center justify-between gap-4"
                >
                  {currentPage > 1 ? (
                    <Link
                      href={blogHref({
                        category: activeCategory,
                        page: currentPage - 1,
                      })}
                      className={paginationButtonClassName}
                    >
                      ← Previous
                    </Link>
                  ) : (
                    <span
                      aria-disabled
                      className={paginationButtonDisabledClassName}
                    >
                      ← Previous
                    </span>
                  )}
                  <p className="text-sm text-secondary">
                    Page {currentPage} of {totalPages}
                  </p>
                  {currentPage < totalPages ? (
                    <Link
                      href={blogHref({
                        category: activeCategory,
                        page: currentPage + 1,
                      })}
                      className={paginationButtonClassName}
                    >
                      Next →
                    </Link>
                  ) : (
                    <span
                      aria-disabled
                      className={paginationButtonDisabledClassName}
                    >
                      Next →
                    </span>
                  )}
                </nav>
              ) : null}
            </>
          ) : (
            <div className="mt-12 rounded-3xl border border-white/10 bg-white/3 p-8 text-secondary">
              <p>No posts in this category yet.</p>
            </div>
          )
        ) : (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/3 p-8 text-secondary">
            <p>No posts available right now. Check back soon.</p>
          </div>
        )}

        <footer className="mt-16 border-t border-white/10 py-8 text-sm text-secondary">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} Tibbs Tech. Built in the UK.</p>
            <div className="flex flex-wrap gap-5">
              <Link
                href={enquiryHref}
                className="stagger-group"
                target="_blank"
              >
                <StaggeredHoverText text="Project brief" />
              </Link>
              <Link
                href="mailto:hello@tibbstech.co.uk"
                className="stagger-group"
              >
                <StaggeredHoverText text="Email" />
              </Link>
              <Link
                href="https://ui.tibbstech.co.uk"
                className="stagger-group"
              >
                <StaggeredHoverText text="TT UI" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/terry-www/"
                className="stagger-group"
              >
                <StaggeredHoverText text="LinkedIn" />
              </Link>
              <Link href="/" className="stagger-group">
                <StaggeredHoverText text="Home" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
