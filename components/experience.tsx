import { experience } from "./portfolio-data";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-17.5 px-4 py-14 md:px-6 md:py-16"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[11px] tracking-[0.2em] uppercase text-[#00ff88]">
          // Experience
        </p>
        <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-6xl">
          Where I&apos;ve
          <br />
          been deployed.
        </h2>
        <div className="mt-8 flex flex-col">
          {experience.map((item) => (
            <div
              key={item.date}
              className="grid pb-12 last:pb-0 md:grid-cols-[180px_1px_1fr] md:gap-x-8"
            >
              <div className="mb-2 text-[11px] tracking-[0.08em] text-[#666] md:mb-0 md:pt-0.5 md:text-right">
                {item.date}
              </div>
              <div
                aria-hidden
                className="relative hidden shrink-0 bg-[#2a2a2a] before:absolute before:top-1 before:left-1/2 before:size-[7px] before:-translate-x-1/2 before:rounded-full before:bg-[#00ff88] before:content-[''] md:block"
              />
              <div className="border-l border-[#2a2a2a] pl-4 md:border-l-0 md:pl-0">
                <div className="font-heading mb-1 text-[1.1rem] font-bold text-[#f0f0f0]">
                  {item.role}
                </div>
                <div className="mb-3 text-xs tracking-[0.05em] text-[oklch(0.64_0.12_166.9)]">
                  {item.company}
                </div>
                <p className="text-xs leading-[1.9] text-[#666]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
