import Link from "next/link";
import { contactLinks, navLinks } from "./portfolio-data";

export const Header = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#2a2a2a] bg-[#0a0a0a]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end px-4 py-4 md:px-6 md:py-6">
        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map(({ label, href, external }) => (
            <Link
              key={label}
              href={href as string}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="text-xs tracking-[0.14em] uppercase text-secondary transition-fast hover:text-brand-accent"
            >
              {label}
            </Link>
          ))}
          <div className="ml-1 flex items-center gap-3 border-l border-[#2a2a2a] pl-4">
            {contactLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href as string}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] tracking-[0.12em] uppercase text-secondary transition-fast hover:text-brand-accent"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
