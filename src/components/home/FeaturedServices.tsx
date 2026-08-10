import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getServiceCategory, type Service } from "@/data/services";

type Props = {
  services: Service[];
};

export function FeaturedServices({ services }: Props) {
  const featured = services.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-paper py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(18,165,148,0.1),transparent_55%)]" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="What we build"
          title="Software that moves the business forward"
          description="From SaaS platforms to industry portals — every engagement is shaped around outcomes, not just screens."
          action={
            <Button href="/services" variant="outline-light">
              View all services
            </Button>
          }
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((service, index) => {
            const accent =
              getServiceCategory(service.category)?.accent ?? "#12A594";

            return (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-6 transition duration-300 hover:-translate-y-2 hover:border-teal/40 hover:shadow-[var(--shadow)]"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-50 transition duration-300 group-hover:scale-x-100"
                  style={{ background: accent }}
                />
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition duration-300 group-hover:opacity-100"
                  style={{ background: accent }}
                />

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold text-white shadow-lg transition duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(145deg, ${accent}, color-mix(in oklab, ${accent} 35%, #0c1419))`,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">
                      Service
                    </span>
                  </div>

                  <h3 className="display text-xl font-bold text-ink md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate">
                    {service.description}
                  </p>
                  <p
                    className="mt-6 text-sm font-semibold transition group-hover:translate-x-1"
                    style={{ color: accent }}
                  >
                    View details →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
