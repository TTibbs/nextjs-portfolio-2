import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "./ui/item";
import Link from "next/link";
import { StaggeredHoverText } from "@/components/staggered-hover-text";
import { HoverButton } from "./ui/hover-button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { aboutCopy, skills, workingNotes } from "./portfolio-data";

export const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-17.5 px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.2em] uppercase text-[#00ff88]">
            {"// About"}
          </p>
          <h2 className="stagger-group font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl md:text-6xl">
            <StaggeredHoverText text={aboutCopy.heading[0]} startIndex={0} />
            <br />
            <StaggeredHoverText text={aboutCopy.heading[1]} startIndex={11} />
            <br />
            <span className="text-brand-accent">
              <StaggeredHoverText text={aboutCopy.heading[2]} startIndex={25} />
            </span>
          </h2>
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#a2a2a2] md:leading-8">
            {aboutCopy.paragraphs.map((paragraph) => {
              const [beforeExperience, afterExperience] =
                paragraph.split("3+ years");

              return (
                <p key={paragraph}>
                  {afterExperience ? (
                    <>
                      {beforeExperience}
                      <span className="font-bold text-[#f0f0f0]">
                        3+ years
                      </span>
                      {afterExperience}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              );
            })}
            <HoverButton>
              <Link href="#contact">{aboutCopy.cta}</Link>
            </HoverButton>
          </div>
        </div>
        <div className="space-y-4">
          <ItemGroup className="gap-4">
            {workingNotes.map((note) => (
              <Item
                key={note.title}
                variant="outline"
                className="rounded-none border-l-2 border-l-[oklch(0.56_0.1_166.9)]/60 px-4 py-4"
              >
                <ItemContent>
                  <ItemHeader>
                    <ItemTitle className="font-heading text-base text-[#f0f0f0]">
                      {note.title}
                    </ItemTitle>
                  </ItemHeader>
                  <ItemDescription className="mt-1 line-clamp-none text-xs leading-6 text-[#8a8a8a] not-italic">
                    {note.text}
                  </ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>

          <ItemGroup className="gap-4">
            {skills.map(({ category, detail, skills: tags }) => (
              <Item
                key={category}
                variant="outline"
                className="rounded-none border-white/12 px-4 py-3"
              >
                <ItemContent>
                  <ItemHeader>
                    <ItemTitle className="text-[11px] tracking-widest uppercase text-[oklch(0.64_0.12_166.9)]">
                      <Label className="text-[11px] tracking-widest uppercase text-[oklch(0.64_0.12_166.9)]">
                        {category}
                      </Label>
                    </ItemTitle>
                  </ItemHeader>
                  <p className="mt-2 text-xs leading-6 text-[#8a8a8a]">
                    {detail}
                  </p>
                  <ItemDescription className="mt-2 flex flex-wrap gap-2 not-italic">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-sm border-white/18 px-2 py-0.5 text-[11px] text-[oklch(0.78_0.02_286)]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </div>
    </section>
  );
};
