import Link from "next/link";
import { StaggeredHoverText } from "@/components/staggered-hover-text";
import { projects } from "./portfolio-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ProjectCarousel } from "./project-carousel";

export const Projects = () => {
  return (
    <section
      id="work"
      className="scroll-mt-17.5 bg-[#111111] px-4 py-14 md:px-6 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[11px] tracking-[0.2em] uppercase text-[#00ff88]">
          {"// Selected Work"}
        </p>
        <h2 className="stagger-group font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl md:text-6xl">
          <StaggeredHoverText text="A few things" startIndex={0} />
          <br />
          <StaggeredHoverText text="I have shipped." startIndex={13} />
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8a8a8a]">
          A mix of client work, volunteer work, and tools I built because the
          workflow kept annoying me.
        </p>
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-0">
          {projects.slice(0, 4).map((project) => (
            <Card
              key={project.title}
              size="sm"
              className="group relative overflow-hidden rounded-none border border-[#2a2a2a] bg-[#0a0a0a] text-[#f0f0f0] transition-slow hover:bg-[#111111]"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#00ff88] transition-slow group-hover:scale-x-100" />
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="absolute top-5 right-4 z-10 text-xs text-[#7a7a7a] transition-slow group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#00ff88] hover:translate-x-1 hover:-translate-y-1 hover:text-[#00ff88] md:top-7 md:right-7 md:text-sm"
                >
                  ↗ Visit
                </Link>
              ) : null}
              <CardHeader>
                <p className="text-[10px] tracking-widest uppercase text-primary">
                  {project.type}
                </p>
                <CardTitle className="font-heading text-xl wrap-break-word text-[#7a7a7a] md:text-2xl">
                  <StaggeredHoverText text={project.title} />
                </CardTitle>
                <CardDescription className="max-w-[34rem] text-[#777] transition-slow group-hover:text-[#e7e7e7]">
                  {project.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="rounded-sm border-[#1e3a5f] bg-[#1a1a1a] px-2 py-0.5 text-[10px] tracking-widest text-[#5a5a5a] transition-slow group-hover:text-[#00ff88]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <p className="font-heading text-xl font-extrabold text-[#666] md:text-2xl">
                  <StaggeredHoverText text={project.highlight ?? ""} />
                </p>
                <p className="text-[10px] tracking-widest uppercase text-[#5a5a5a] transition-slow group-hover:text-[#e7e7e7]">
                  {project.highlightLabel}
                </p>
                <ProjectCarousel
                  images={project.images ?? []}
                  projectTitle={project.title}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
