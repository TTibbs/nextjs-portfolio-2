import Link from "next/link";
import { contactLinks, navLinks } from "./portfolio-data";
import { HoverButton } from "./ui/hover-button";

export const Header = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#2a2a2a] bg-[#0a0a0a]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
        <Link
          href="#"
          className="text-lg font-extrabold tracking-tight text-[#00ff88]"
        >
          TW_
        </Link>
        <div className="md:hidden">
          <HoverButton asChild className="px-3 py-2 text-[11px]">
            <Link href="#contact">Hire Me</Link>
          </HoverButton>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              className="text-xs tracking-[0.14em] uppercase text-[#666] transition-colors hover:text-[#00ff88]"
            >
              {id}
            </Link>
          ))}
          <HoverButton>
            <Link href="#contact">Hire Me</Link>
          </HoverButton>
          <div className="ml-1 flex items-center gap-3 border-l border-[#2a2a2a] pl-4">
            {contactLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href as string}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] tracking-[0.12em] uppercase text-[#7a7a7a] transition-colors hover:text-[#00ff88]"
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
