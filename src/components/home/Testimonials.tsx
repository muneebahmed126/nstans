import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/data/testimonials";

type Props = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: Props) {
  return (
    <section className="bg-night py-20 text-white md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Proof"
          title="Customer reviews our clients trust"
          description="Featured reviews highlighting Muneeb, Rutaba, and Asadullah Ijaz — the people who make delivery feel personal."
          light
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-white/8"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-glow">
                  {item.about}
                </p>
                <p className="text-sm text-amber-300">
                  {"★".repeat(item.rating)}
                </p>
              </div>
              <blockquote className="text-base leading-8 text-white/85">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal/20 text-sm font-bold text-teal-glow">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="mt-0.5 text-sm text-white/55">
                    {item.role} · {item.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
