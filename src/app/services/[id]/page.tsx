import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getServiceCategory } from "@/data/services";
import {
  getServiceById,
  getServiceCategories,
  getServices,
} from "@/lib/api";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ id: service.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = await getServiceById(id);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [service, allServices, categories] = await Promise.all([
    getServiceById(id),
    getServices(),
    getServiceCategories(),
  ]);

  if (!service) notFound();

  const category =
    getServiceCategory(service.category) ??
    categories.find((item) => item.id === service.category);
  const accent = category?.accent ?? "#12A594";
  const related = allServices
    .filter(
      (item) =>
        item.category === service.category && item.id !== service.id,
    )
    .slice(0, 3);

  return (
    <div className="bg-paper">
      <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(145deg,#102027_0%,#0c1419_55%,#0c7f73_140%)] pb-16 pt-32 text-white">
        <div
          className="pointer-events-none absolute -right-10 top-16 h-64 w-64 rounded-full blur-3xl"
          style={{ background: `${accent}55` }}
        />
        <div className="container-page relative">
          <Link
            href="/services"
            className="mb-6 inline-flex text-sm font-semibold text-white/70 transition hover:text-white"
          >
            ← Back to services
          </Link>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-glow">
            {category?.label ?? "Service"}
          </p>
          <h1 className="display max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            {service.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/consultation">Free Consultation</Button>
            <Button href="/contact" variant="ghost">
              Hire Us
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <article className="rounded-[1.75rem] border border-line bg-surface p-7 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">
                Overview
              </p>
              <h2 className="display mt-3 text-2xl font-bold text-ink md:text-3xl">
                What this service includes
              </h2>
              <p className="mt-4 text-sm leading-8 text-slate sm:text-base">
                {service.details}
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-line bg-surface p-7 md:p-8">
              <h3 className="display text-2xl font-bold text-ink">
                Key features
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-2xl border border-line bg-paper px-4 py-3 text-sm leading-6 text-ink"
                  >
                    <span className="mr-2 font-bold" style={{ color: accent }}>
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[1.75rem] border border-line bg-surface p-7 md:p-8">
              <h3 className="display text-2xl font-bold text-ink">
                Outcomes you can expect
              </h3>
              <ul className="mt-5 space-y-3">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex gap-3 text-sm leading-7 text-slate"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: accent }}
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[1.75rem] border border-line bg-night p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-glow">
                Engagement snapshot
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-white/50">Typical timeline</dt>
                  <dd className="mt-1 font-semibold text-white">
                    {service.timeline}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/50">Ideal for</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {service.idealFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-white/50">Common stacks</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {service.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full bg-teal/20 px-3 py-1 text-xs font-semibold text-teal-glow"
                      >
                        {stack}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col gap-3">
                <Button href="/consultation">Start free consultation</Button>
                <Button href="/contact" variant="ghost">
                  Talk to the team
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="border-t border-line bg-surface py-16 md:py-20">
          <div className="container-page">
            <h2 className="display text-3xl font-bold text-ink">
              Related services
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/services/${item.id}`}
                  className="group rounded-[1.5rem] border border-line bg-paper p-5 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-[var(--shadow)]"
                >
                  <h3 className="display text-xl font-bold text-ink group-hover:text-teal-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-teal-deep">
                    View details →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
