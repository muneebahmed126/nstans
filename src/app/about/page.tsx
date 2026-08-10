import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutStory, aboutValues, workSteps } from "@/data/company";
import { getCompany, getFounders, getTeam } from "@/lib/api";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Nstans founders and engineering team building modern software products.",
};

export default async function AboutPage() {
  const [founders, team, company] = await Promise.all([
    getFounders(),
    getTeam(),
    getCompany(),
  ]);

  return (
    <div className="bg-paper">
      <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(145deg,#102027_0%,#0c1419_55%,#0c7f73_140%)] pb-20 pt-32 text-white">
        <div className="pointer-events-none absolute left-1/3 top-10 h-64 w-64 rounded-full bg-teal/20 blur-3xl" />
        <div className="container-page relative">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-glow">
            About us
          </p>
          <h1 className="display max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            A studio that treats shipping as a craft
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            {company.aboutLong}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(18,165,148,0.12),transparent_55%)]" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Who we are"
            title="Built for founders who need momentum"
            description="Nstans combines product sense with full-stack execution — so ideas don’t stall between design slides and production."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {aboutValues.map((value, index) => (
              <article
                key={value.id}
                className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-6 transition duration-300 hover:-translate-y-2 hover:border-teal/40 hover:shadow-[var(--shadow)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-50 transition duration-300 group-hover:scale-x-100"
                  style={{ background: value.accent }}
                />
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition duration-300 group-hover:opacity-100"
                  style={{ background: value.accent }}
                />
                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold text-white shadow-lg transition duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(145deg, ${value.accent}, color-mix(in oklab, ${value.accent} 35%, #0c1419))`,
                      }}
                    >
                      {value.icon}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">
                      Principle
                    </span>
                  </div>
                  <h3 className="display text-2xl font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{value.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-line bg-night text-white shadow-[var(--shadow)]">
            <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-teal/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-clay/20 blur-3xl" />
            <div className="relative grid gap-0 lg:grid-cols-[1.05fr_1fr]">
              <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-glow">
                  {aboutStory.eyebrow}
                </p>
                <h2 className="display mt-4 max-w-md text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  {aboutStory.title}
                </h2>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {aboutStory.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition hover:border-teal/40 hover:bg-white/10"
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
              </div>
              <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
                {aboutStory.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-sm leading-8 text-white/72 sm:text-[0.95rem]"
                  >
                    {paragraph}
                  </p>
                ))}
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

      <section className="border-y border-line bg-surface py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Founders"
            title="Leadership behind Nstans"
            description="Asadullah Ijaz and Abdullah guide vision, partnerships, and delivery quality across the studio."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {founders.map((founder) => (
              <PersonCard key={founder.id} person={founder} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Team"
            title="The builders who ship with you"
            description="Engineering leadership and specialists across frontend and backend."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <PersonCard key={member.id} person={member} compact />
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-line bg-surface p-8 md:p-10">
            <h2 className="display text-3xl font-bold text-ink">How we work</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {workSteps.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-paper p-5 transition hover:border-teal/35"
                >
                  <p className="display text-xl font-bold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation">Free Consultation</Button>
              <Button href="/contact" variant="outline-light">
                Hire Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PersonCard({
  person,
  compact = false,
}: {
  person: {
    id: string;
    name: string;
    role: string;
    bio: string;
    initials: string;
    accent: string;
  };
  compact?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-line bg-paper transition hover:-translate-y-1 hover:shadow-[var(--shadow)]">
      <div
        className={[
          "relative flex items-end p-6",
          compact ? "h-44" : "h-56",
        ].join(" ")}
        style={{
          background: `linear-gradient(145deg, ${person.accent} 0%, #0c1419 75%)`,
        }}
      >
        <div className="absolute right-6 top-6 grid h-20 w-20 place-items-center rounded-[1.4rem] bg-white/15 text-2xl font-bold text-white backdrop-blur-sm">
          {person.initials}
        </div>
        <div>
          <h3 className="display text-2xl font-bold text-white">{person.name}</h3>
          <p className="mt-1 text-sm text-white/75">{person.role}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm leading-7 text-slate">{person.bio}</p>
      </div>
    </article>
  );
}
