import Link from "next/link";
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
            // For Clients
          </p>
          <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-6xl">
            What I can
            <br />
            build for you.
          </h2>
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
                  <ItemDescription>{service.desc}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup>
        </div>
        <Card className="h-fit border-[#2a2a2a] bg-[#0a0a0a]">
          <CardHeader>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#666]">
              // Engagement types
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {engagementTypes.map(({ plan, detail }) => (
              <div
                key={plan}
                className="group border border-[#2a2a2a] p-4 transition-colors hover:border-[#00ff88]"
              >
                <p className="font-heading text-base font-bold text-[#f0f0f0] transition-colors group-hover:text-[#00ff88]">
                  {plan}
                </p>
                <p className="text-xs leading-6 text-[#666]">{detail}</p>
              </div>
            ))}
            <div className="flex justify-center">
              <HoverButton>
                <Link href="#contact">Get a Free Estimate →</Link>
              </HoverButton>
            </div>
            <p className="text-center text-[11px] tracking-[0.05em] text-[#666]">
              Typical response within 24 hours
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
