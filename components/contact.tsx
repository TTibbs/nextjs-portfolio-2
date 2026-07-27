import Link from "next/link";
import { StaggeredHoverText } from "@/components/staggered-hover-text";
import { contactCopy, contactLinks } from "./portfolio-data";
import { ContactForm } from "./contact-form";
import { HoverButton } from "./ui/hover-button";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-17.5 border-t border-[#2a2a2a] bg-[#111111] px-4 py-14 md:px-6 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[11px] tracking-[0.2em] uppercase text-[#00ff88]">
          {"// Contact"}
        </p>
        <h2 className="stagger-group font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl md:text-6xl">
          <StaggeredHoverText text={contactCopy.heading[0]} startIndex={0} />
          <br />
          <StaggeredHoverText text={contactCopy.heading[1]} startIndex={13} />
        </h2>
        <p className="mt-6 mb-4 w-full max-w-2xl text-sm leading-7 text-primary-foreground md:mt-8 md:leading-8">
          {contactCopy.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {contactLinks.map(({ href, label }) => (
            <HoverButton
              key={label}
              asChild
              className={
                label === "LinkedIn"
                  ? "border border-[#1a3f63] bg-[#0a0a0a] text-[#8ab4f8] hover:bg-[#0f1c2d] hover:text-[#9fc2ff] hover:shadow-[4px_4px_0_#0a66c2]"
                  : "border border-[#2f2f2f] bg-[#0a0a0a] text-[#d4d4d4] hover:bg-[#161b22] hover:text-white hover:shadow-[4px_4px_0_#30363d]"
              }
            >
              <Link href={href} target="_blank" rel="noreferrer">
                {label}
              </Link>
            </HoverButton>
          ))}
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
