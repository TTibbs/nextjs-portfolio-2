import { Card, CardContent, CardHeader } from "./ui/card";
import { testimonials } from "./portfolio-data";

export const Reviews = () => {
  return (
    <section className="px-4 py-14 md:px-6 md:py-16 border-t border-[#2a2a2a] bg-[#111111]">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[11px] tracking-[0.2em] uppercase text-[#00ff88]">
          // Testimonials
        </p>
        <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-6xl">
          What my clients say.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="border-2 border-zinc-200 bg-[#111111] hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <p className="w-fit border border-primary px-2 py-0.5 text-[9px] tracking-[0.15em] uppercase text-primary-foreground">
                  {testimonial.tag}
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-8 text-primary-foreground italic">
                  {testimonial.quote}
                </p>
                <p className="font-heading text-sm font-bold text-primary-foreground">
                  {testimonial.author}
                </p>
                <p className="text-[11px] tracking-[0.08em] text-primary">
                  {testimonial.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
