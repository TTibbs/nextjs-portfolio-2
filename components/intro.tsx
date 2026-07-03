"use client";

import Link from "next/link";
import { availabilityLabel } from "@/lib/status";
import { HoverButton } from "./ui/hover-button";
import { Label } from "./ui/label";
import { PixelRevealCard } from "./pixel-reveal-card";
import { StaggeredHoverText } from "./staggered-hover-text";

export const Intro = () => {
  return (
    <section className="relative px-4 pt-20 pb-14 md:px-6 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-w-0 items-center gap-10 md:grid-cols-[1fr_min(100%,320px)] md:gap-12 lg:gap-16">
          <div className="min-w-0">
            <Label className="mb-8 inline-flex w-fit items-center gap-2 border border-[#00ff88] px-3 py-1 text-[11px] tracking-[0.14em] uppercase text-[#00ff88]">
              <span className="size-2 rounded-full bg-[#00ff88] animate-pulse" />
              {availabilityLabel}
            </Label>
            <h1 className="stagger-group font-heading text-4xl leading-[0.95] font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
              <StaggeredHoverText text="I build" startIndex={0} />
              <br />
              <StaggeredHoverText
                text="things"
                startIndex={7}
                charClassName="stagger-char-stroke"
                wrapperClassName="overflow-visible pb-[0.12em] leading-[1.15]"
              />
              <br />
              <StaggeredHoverText text="that " startIndex={13} />
              <span className="text-brand-accent">
                <StaggeredHoverText text="scale." startIndex={18} />
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#666] md:mt-8 md:leading-8">
              Full-stack engineer specialising in high-performance web
              applications, developer tooling, and systems that hold up under
              pressure. Based in the UK, remote-friendly.
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

          <div className="relative mx-auto w-full max-w-xs shrink-0 md:mx-0 md:max-w-none">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl drop-shadow-lg shadow-[4px_4px_0_#016d4e] transition-slow">
              <PixelRevealCard
                image="https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4K6QfrnDTlvL8HJ09RKZFnsXbNeWxwQaroVP6M"
                name="Terry Ward"
                role="Full-Stack Developer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
