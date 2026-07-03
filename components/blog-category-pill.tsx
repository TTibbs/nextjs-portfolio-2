import Link from "next/link";
import { cn } from "@/lib/utils";
import { getCategoryLabel, type BlogCategoryId } from "@/lib/blog/categories";

type BlogCategoryPillProps = {
  categoryId: BlogCategoryId;
  href?: string;
  active?: boolean;
};

export function BlogCategoryPill({
  categoryId,
  href,
  active = false,
}: BlogCategoryPillProps) {
  const className = cn(
    "rounded-full border px-3 py-1 text-xs font-medium transition-fast",
    active
      ? "border-brand-accent/30 bg-brand-accent/15 text-brand-accent"
      : "border-white/10 bg-white/5 text-secondary hover:border-brand-accent/20 hover:bg-brand-accent/10 hover:text-brand-accent",
  );

  const label = getCategoryLabel(categoryId);

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}
