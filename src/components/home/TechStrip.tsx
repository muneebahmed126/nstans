import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TechStackItem } from "@/data/services";

type Props = {
  techStack: TechStackItem[];
};

const groupMeta: Record<
  TechStackItem["group"],
  { label: string; accent: string }
> = {
  frontend: { label: "Frontend", accent: "#12A594" },
  backend: { label: "Backend", accent: "#3D7AE0" },
  database: { label: "Data", accent: "#E07A3D" },
  tools: { label: "Platform", accent: "#8B5CF6" },
};

export function TechStrip({ techStack }: Props) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface py-16 md:py-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-clay/10 blur-3xl" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Technology"
          title="Stacks engineered for shipping"
          description="A modern toolkit for durable products — not just logos on a page."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {techStack.map((item) => {
            const meta = groupMeta[item.group];
            return (
              <article
                key={item.id}
                className="stack-card rounded-3xl border border-line bg-surface-2 p-5"
              >
                <div
                  className="mb-8 grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold text-white"
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
  );
}
