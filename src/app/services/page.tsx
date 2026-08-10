import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getServiceCategories,
  getServices,
  getTechStack,
} from "@/lib/api";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MERN stack development, SaaS builds, MVPs, dashboards, APIs, and industry platforms by Nstans.",
};

const groupMeta: Record<string, { label: string; accent: string }> = {
  frontend: { label: "Frontend", accent: "#12A594" },
  backend: { label: "Backend", accent: "#3D7AE0" },
  database: { label: "Data", accent: "#E07A3D" },
  tools: { label: "Platform", accent: "#8B5CF6" },
};

export default async function ServicesPage() {
  const [services, categories, techStack] = await Promise.all([
    getServices(),
    getServiceCategories(),
    getTechStack(),
  ]);

  return (
    <div className="bg-paper">
      <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(145deg,#102027_0%,#0c1419_55%,#0c7f73_140%)] pb-20 pt-32 text-white">
        <div className="pointer-events-none absolute -right-10 top-20 h-64 w-64 rounded-full bg-teal/25 blur-3xl" />
        <div className="pointer-events-none absolute left-10 bottom-0 h-48 w-48 rounded-full bg-clay/15 blur-3xl" />
        <div className="container-page relative">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-glow">
            Services
          </p>
          <h1 className="display max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Capabilities built for real products
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            From SaaS and MVPs to APIs and industry platforms — every service is
            designed to help you ship faster with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consultation">Free Consultation</Button>
            <Button href="/contact" variant="ghost">
              Hire Us
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/80 backdrop-blur-sm transition hover:border-teal/50 hover:bg-white/10 hover:text-white"
              >
                {category.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(18,165,148,0.12),transparent_55%)]" />
        <div className="container-page relative space-y-20">
          {categories.map((category, categoryIndex) => {
            const items = services.filter(
              (service) => service.category === category.id,
            );
            if (!items.length) return null;

            return (
              <div key={category.id} id={category.id} className="scroll-mt-28">
                <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-deep">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: category.accent }}
                      />
                      {`0${categoryIndex + 1} · ${category.label}`}
                    </p>
                    <h2 className="section-title display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[2.75rem]">
                      {category.label}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate sm:text-lg">
                      {category.description}
                    </p>
                  </div>
                  <div
                    className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl text-sm font-bold text-white shadow-lg md:grid"
                    style={{
                      background: `linear-gradient(145deg, ${category.accent}, color-mix(in oklab, ${category.accent} 35%, #0c1419))`,
                    }}
                  >
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((service, index) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-6 transition duration-300 hover:-translate-y-2 hover:border-teal/40 hover:shadow-[var(--shadow)]"
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-50 transition duration-300 group-hover:scale-x-100"
                        style={{ background: category.accent }}
                      />
                      <div
                        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition duration-300 group-hover:opacity-100"
                        style={{ background: category.accent }}
                      />
                      <div className="relative">
                        <div className="mb-8 flex items-center justify-between">
                          <span
                            className="grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold text-white shadow-lg transition duration-300 group-hover:scale-110"
                            style={{
                              background: `linear-gradient(145deg, ${category.accent}, color-mix(in oklab, ${category.accent} 35%, #0c1419))`,
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
                          style={{ color: category.accent }}
                        >
                          View details →
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-surface py-16 md:py-24">
        <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-clay/10 blur-3xl" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Core stacks"
            title="Tools we ship with every week"
            description="Modern frontend and backend stacks chosen for speed, clarity, and long-term maintenance."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {techStack.map((item) => {
              const meta = groupMeta[item.group] ?? {
                label: item.group,
                accent: "#12A594",
              };
              return (
                <article
                  key={item.id}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-surface-2 p-5 transition duration-300 hover:-translate-y-2 hover:border-teal/40 hover:shadow-[var(--shadow)]"
                >
                  <div
                    className="mb-8 grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold text-white transition duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(145deg, ${meta.accent}, color-mix(in oklab, ${meta.accent} 40%, #0c1419))`,
                    }}
                  >
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                    {meta.label}
                  </p>
                  <h3 className="display mt-2 text-xl font-bold text-ink">
                    {item.name}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-night text-white shadow-[var(--shadow)]">
            <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-teal/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-clay/20 blur-3xl" />
            <div className="relative grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-glow">
                  Next step
                </p>
                <h2 className="display mt-4 max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  Not sure which service fits?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-8 text-white/70 sm:text-base">
                  Tell us your goals in a free consultation — we’ll map the right
                  mix of product, systems, and API work to your timeline and
                  budget.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Best for", value: "MVPs & SaaS" },
                    { label: "Delivery", value: "Phased sprints" },
                    { label: "Stack", value: "React to Nest" },
                    { label: "Support", value: "WhatsApp ready" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-teal/40 hover:bg-white/10"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Button href="/consultation">Free Consultation</Button>
                  <Button href="/contact" variant="ghost">
                    Hire Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
