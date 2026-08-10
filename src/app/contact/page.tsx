import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { getCompany } from "@/lib/api";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nstans to hire the team or discuss your next build.",
};

export default async function ContactPage() {
  const company = await getCompany();

  return (
    <div className="bg-paper">
      <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(145deg,#102027_0%,#0c1419_55%,#0c7f73_140%)] pb-20 pt-32 text-white">
        <div className="pointer-events-none absolute right-10 top-16 h-56 w-56 rounded-full bg-teal/25 blur-3xl" />
        <div className="container-page relative">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-glow">
            Contact
          </p>
          <h1 className="display max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Let’s start the conversation
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Share your project details and we’ll get back to you. Prefer chat?
            Message us on WhatsApp anytime.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-4">
            <div className="rounded-[2rem] border border-line bg-surface p-7">
              <h2 className="display text-2xl font-bold text-ink">Reach us</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li>
                  <p className="font-semibold text-ink">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block text-slate transition hover:text-teal-deep"
                  >
                    {company.email}
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-ink">WhatsApp</p>
                  <a
                    href={company.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-[#128C7E] transition hover:underline"
                  >
                    {company.phoneDisplay}
                  </a>
                </li>
                <li>
                  <p className="font-semibold text-ink">Location</p>
                  <p className="mt-1 text-slate">{company.location}</p>
                </li>
              </ul>
              <div className="mt-7 flex flex-col gap-3">
                <Button href={company.whatsappUrl} target="_blank">
                  Chat on WhatsApp
                </Button>
                <Button href="/consultation" variant="outline-light">
                  Free Consultation
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-line bg-[linear-gradient(145deg,#0c1419,#0c7f73)] p-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-glow">
                Quick tip
              </p>
              <p className="mt-3 text-lg font-semibold leading-8">
                Not sure how to describe your idea? Start the free consultation
                flow — it walks you through the important questions.
              </p>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
