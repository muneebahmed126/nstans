import { Button } from "@/components/ui/Button";

type Props = {
  stats: readonly { id: string; value: string; label: string }[];
  email: string;
};

export function HomeCta({ stats, email }: Props) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0c1419_0%,#163039_55%,#0c7f73_130%)] px-6 py-12 text-white md:px-12 md:py-16">
          <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-teal/30 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-glow">
                Let’s build
              </p>
              <h2 className="display max-w-xl text-3xl font-extrabold tracking-tight sm:text-5xl">
                Ready to ship your next product with Nstans?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                Start with a free consultation, or jump straight to hire us.
                Prefer email? Reach us at{" "}
                <a className="text-teal-glow underline" href={`mailto:${email}`}>
                  {email}
                </a>
                .
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/consultation" size="lg">
                  Free Consultation
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Hire Us
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="display text-3xl font-bold">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
