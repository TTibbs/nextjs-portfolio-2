import Link from "next/link";
import { StaggeredHoverText } from "@/components/staggered-hover-text";
import { engagementTypes, services } from "./portfolio-data";
import { Card, CardContent, CardHeader } from "./ui/card";
import { HoverButton } from "./ui/hover-button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "./ui/item";

export const Services = () => {
  return (
    <section
      id="clients"
      className="scroll-mt-17.5 border-y border-[#2a2a2a] bg-[#111111] px-4 py-14 md:px-6 md:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.2em] uppercase text-[#00ff88]">
            {"// For Clients"}
          </p>
          <h2 className="stagger-group font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl md:text-6xl">
            <StaggeredHoverText text="Where I can" startIndex={0} />
            <br />
            <StaggeredHoverText text="be useful." startIndex={12} />
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#8a8a8a]">
            I am a good fit when a project needs both product sense and hands-on
            engineering: someone to ask the awkward questions, then build the
            thing properly.
          </p>
          <ItemGroup className="mt-6 gap-0">
            {services.map((service) => (
              <Item
                key={service.num}
                className="cursor-default rounded-none border-x-0 border-t-0 border-b-[#2a2a2a] px-0 py-6 transition-[padding-left] duration-200 hover:pl-2"
              >
                <div className="font-heading mr-4 text-xs font-bold text-[#00ff88]">
                  {service.num}
                </div>
                <ItemContent>
                  <ItemTitle className="font-heading text-lg text-[#f0f0f0]">
                    {service.name}
                  </ItemTitle>
                  <ItemDescription className="line-clamp-none text-[#8a8a8a]">
                    {service.desc}
                  </ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>
        <Card className="h-fit self-center border-[#2a2a2a] bg-[#0a0a0a]">
          <CardHeader>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#666]">
              {"// Ways to work together"}
            </p>
          </CardHeader>
          <CardContent className="space-y-3 text-secondary text-sm">
            {engagementTypes.map(({ plan, detail }) => (
              <div
                key={plan}
                className="group border border-[#2a2a2a] p-4 transition-slow hover:border-[#00ff88] flex flex-col gap-2"
              >
                <StaggeredHoverText text={plan} />
                <p className="text-xs leading-4 text-[#666]">{detail}</p>
              </div>
            ))}
            <div className="flex justify-center">
              <HoverButton>
                <Link href="#contact">Talk through the work →</Link>
              </HoverButton>
            </div>
            <p className="text-center text-[11px] tracking-[0.05em] text-[#666]">
              A few sentences about the problem is enough to start.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
