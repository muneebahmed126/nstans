import { Button } from "@/components/ui/Button";
import { clients } from "@/data/testimonials";

export function Hero() {
  return (
    <section className="grain relative min-h-[100svh] overflow-hidden bg-night text-white">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,20,25,0.72)_0%,rgba(12,20,25,0.78)_45%,rgba(12,20,25,0.92)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/50 to-transparent" />
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
      <div className="absolute -right-16 bottom-24 h-64 w-64 rounded-full bg-clay/20 blur-3xl" />

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-center pb-28 pt-32">
        <p className="fade-up mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-teal-glow">
          Software studio
        </p>
        <h1 className="display fade-up fade-up-delay-1 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
          Nstans
        </h1>
        <p className="fade-up fade-up-delay-2 mt-5 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
          We build SaaS products, MVPs, and custom business systems that look
          sharp, ship fast, and scale with your team.
        </p>

        <div className="fade-up fade-up-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="ghost" size="lg">
            Hire Us
            <ArrowIcon />
          </Button>
          <Button href="/consultation" size="lg">
            Free Consultation
            <ArrowIcon />
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-night/40 backdrop-blur-md">
        <div className="container-page overflow-hidden py-5">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
            Trusted by ambitious teams
          </p>
          <div className="relative overflow-hidden">
            <div className="marquee-track flex w-max gap-10">
              {[...clients, ...clients].map((client, index) => (
                <span
                  key={`${client.id}-${index}`}
                  className="display text-lg font-semibold tracking-tight text-white/70"
                >
                  {client.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-xs">
      ↗
    </span>
  );
}
