import Link from "next/link";
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
          // Contact
        </p>
        <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-6xl">
          Let&apos;s build
          <br />
          something.
        </h2>
        <p className="mt-6 mb-4 w-full max-w-2xl text-sm leading-7 text-primary-foreground md:mt-8 md:leading-8">
          Whether you&apos;re hiring for a full-time role or need a specialist
          for your next project - reach out and I&apos;ll get back to you within
          24 hours.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            ["https://linkedin.com/in/terry-www", "LinkedIn"],
            ["https://github.com/TTibbs", "GitHub"],
          ].map(([href, label]) => (
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
