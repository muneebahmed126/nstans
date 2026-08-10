import Link from "next/link";
import { company, navigation } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-line bg-night text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal text-sm font-bold">
              N
            </span>
            <span className="display text-xl font-bold">{company.name}</span>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/70">
            {company.description}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-glow">
            Explore
          </p>
          <ul className="space-y-3 text-sm text-white/75">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/consultation" className="transition hover:text-white">
                Free Consultation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-glow">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <a
                href={`mailto:${company.email}`}
                className="transition hover:text-white"
              >
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp {company.phoneDisplay}
              </a>
            </li>
            <li>{company.location}</li>
            {company.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Frontend + API-ready mock data for team delivery.</p>
        </div>
      </div>
    </footer>
  );
}
