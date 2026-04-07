import { projects } from "./portfolio-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export const Projects = () => {
  return (
    <section id="work" className="scroll-mt-17.5 px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[11px] tracking-[0.2em] uppercase text-[#00ff88]">
          // Selected Work
        </p>
        <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-6xl">
          Projects that
          <br />
          moved the needle.
        </h2>
        <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-0">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden rounded-none border border-[#2a2a2a] bg-[#0a0a0a] text-[#f0f0f0] transition-colors hover:bg-[#111111]"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#00ff88] transition-transform duration-300 group-hover:scale-x-100" />
              <span className="absolute select-none top-7 right-7 text-lg text-[#2a2a2a] transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#00ff88]">
                ↗
              </span>
              <CardHeader>
                <p className="text-[10px] tracking-widest uppercase text-primary">
                  {project.type}
                </p>
                <CardTitle className="font-heading text-2xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-[#666]">
                  {project.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="rounded-sm border-[#1e3a5f] bg-[#1a1a1a] px-2 py-0.5 text-[10px] tracking-widest text-primary transition-colors duration-200 group-hover:text-primary-foreground"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <p className="font-heading text-2xl font-extrabold text-[#00ff88]">
                  {project.highlight}
                </p>
                <p className="text-[10px] tracking-widest uppercase text-[#a2a2a2]">
                  {project.highlightLabel}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
