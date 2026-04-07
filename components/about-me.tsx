import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "./ui/item";
import Link from "next/link";
import { HoverButton } from "./ui/hover-button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";

export const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-17.5 px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.2em] uppercase text-[#00ff88]">
            // About
          </p>
          <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-6xl">
            Engineer.
            <br />
            Pragmatist.
            <br />
            Finisher.
          </h2>
          <div className="mt-6 space-y-5 text-sm leading-7 text-[#a2a2a2] md:leading-8">
            <p>
              I&apos;m a full-stack engineer with{" "}
              <span className="font-bold text-[#f0f0f0]">3+ years</span> of
              experience turning complex problems into clean, maintainable
              systems.
            </p>
            <p>
              For employers, I bring deep technical ownership, an eye for
              architecture, and the communication skills to explain what
              I&apos;m building.
            </p>
            <p>
              I care about{" "}
              <span className="font-bold text-[#f0f0f0]">code that lasts</span>,
              teams that trust each other, and products people enjoy using.
            </p>
            <HoverButton>
              <Link href="#contact">Contact Me</Link>
            </HoverButton>
          </div>
        </div>
        <ItemGroup className="gap-4">
          {[
            [
              "Frontend",
              ["React", "Next.js", "TypeScript", "TailwindCSS", "GraphQL"],
            ],
            [
              "Backend",
              ["Node.js", "Go", "PostgreSQL", "Redis", "REST / gRPC"],
            ],
            [
              "Infrastructure",
              ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
            ],
            [
              "Practices",
              ["TDD", "System Design", "Agile / Scrum", "Code Review"],
            ],
          ].map(([title, tags]) => (
            <Item
              key={String(title)}
              variant="outline"
              className="rounded-none border-l-2 border-l-[oklch(0.56_0.1_166.9)]/60 px-4 py-3"
            >
              <ItemContent>
                <ItemHeader>
                  <ItemTitle className="text-[11px] tracking-widest uppercase text-[oklch(0.64_0.12_166.9)]">
                    <Label className="text-[11px] tracking-widest uppercase text-[oklch(0.64_0.12_166.9)]">
                      {String(title)}
                    </Label>
                  </ItemTitle>
                </ItemHeader>
                <ItemDescription className="mt-2 flex flex-wrap gap-2 not-italic">
                  {(tags as string[]).map((tag) => (
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
    </section>
  );
};
