import Link from "next/link";
import { availabilityLabel } from "@/lib/status";
import { HoverButton } from "./ui/hover-button";
import { Label } from "./ui/label";

export const About = () => {
  return (
    <div className="min-w-0">
      <Label className="mb-8 inline-flex w-fit items-center gap-2 border border-[#00ff88] px-3 py-1 text-[11px] tracking-[0.14em] uppercase text-[#00ff88]">
        <span className="size-2 rounded-full bg-[#00ff88] animate-pulse" />
        {availabilityLabel}
      </Label>
      <h1 className="font-heading text-4xl leading-[0.95] font-extrabold tracking-tight sm:text-5xl md:text-7xl">
        I build
        <br />
        <span className="inline-block text-transparent [-webkit-text-stroke:1px_#f0f0f0]">
          things
        </span>
        <br />
        that <span className="text-[#00ff88]">scale.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-[#666] md:mt-8 md:leading-8">
        Full-stack engineer specialising in high-performance web applications,
        developer tooling, and systems that hold up under pressure. Based in the
        UK, remote-friendly.
      </p>
      <div className="mt-7 flex flex-wrap gap-2.5 md:mt-8 md:gap-3">
        <HoverButton>
          <Link href="#work">View My Work →</Link>
        </HoverButton>
        <HoverButton className="border-[#2a2a2a] bg-transparent text-[#f0f0f0] hover:border-[#00ff88] hover:bg-transparent hover:text-[#00ff88] hover:shadow-[4px_4px_0_#016d4e]">
          <Link href="#clients">Hire Me For a Project</Link>
        </HoverButton>
      </div>
    </div>
  );
};
