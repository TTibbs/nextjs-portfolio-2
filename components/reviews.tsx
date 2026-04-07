import { Card, CardContent, CardHeader } from "./ui/card";
import { testimonials } from "./portfolio-data";

export const Reviews = () => {
  return (
    <section className="px-4 pb-14 md:px-6 md:pb-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-[11px] tracking-[0.2em] uppercase text-[#00ff88]">
          // Testimonials
        </p>
        <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-6xl">
          What people say.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="border-[#2a2a2a] bg-[#111111]"
            >
              <CardHeader>
                <p
                  className={`w-fit border px-2 py-0.5 text-[9px] tracking-[0.15em] uppercase ${testimonial.tag === "Employer" ? "border-[#3399ff] text-[#3399ff]" : "border-[#ff3366] text-[#ff3366]"}`}
                >
                  {testimonial.tag}
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-8 text-[#666] italic">
                  {testimonial.quote}
                </p>
                <p className="font-heading text-sm font-bold text-[#f0f0f0]">
                  {testimonial.author}
                </p>
                <p className="text-[11px] tracking-[0.08em] text-[#3399ff]">
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
