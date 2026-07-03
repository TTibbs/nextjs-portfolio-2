export const BLOG_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    tags: [
      "frontend",
      "react",
      "nextjs",
      "ui",
      "vite",
      "javascript",
      "browser",
      "chrome",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    tags: [
      "backenddevelopment",
      "api",
      "express",
      "authentication",
      "rbac",
    ],
  },
  {
    id: "tooling",
    label: "Tooling",
    tags: ["cli", "cursor", "npm", "playwright", "debugging", "productivity"],
  },
  {
    id: "general",
    label: "General",
    tags: [
      "webdev",
      "howto",
      "tutorial",
      "learning",
      "opensource",
      "documentation",
    ],
  },
] as const;

export type BlogCategoryId = (typeof BLOG_CATEGORIES)[number]["id"];

const tagToCategories = new Map<string, BlogCategoryId[]>(
  BLOG_CATEGORIES.flatMap((category) =>
    category.tags.map((tag) => [tag, [] as BlogCategoryId[]]),
  ),
);

for (const category of BLOG_CATEGORIES) {
  for (const tag of category.tags) {
    const existing = tagToCategories.get(tag) ?? [];
    existing.push(category.id);
    tagToCategories.set(tag, existing);
  }
}

export function getCategoriesForTags(tags: string[]): BlogCategoryId[] {
  const matched = new Set<BlogCategoryId>();

  for (const tag of tags) {
    for (const categoryId of tagToCategories.get(tag.toLowerCase()) ?? []) {
      matched.add(categoryId);
    }
  }

  return BLOG_CATEGORIES.filter((category) => matched.has(category.id)).map(
    (category) => category.id,
  );
}

export function getCategoryLabel(id: BlogCategoryId) {
  return BLOG_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

export function postMatchesCategory(
  tags: string[],
  categoryId: BlogCategoryId | undefined,
) {
  if (!categoryId) {
    return true;
  }

  return getCategoriesForTags(tags).includes(categoryId);
}

export function getUsedCategories(
  posts: { tags: string[] }[],
): BlogCategoryId[] {
  const used = new Set<BlogCategoryId>();

  for (const post of posts) {
    for (const categoryId of getCategoriesForTags(post.tags)) {
      used.add(categoryId);
    }
  }

  return BLOG_CATEGORIES.filter((category) => used.has(category.id)).map(
    (category) => category.id,
  );
}
