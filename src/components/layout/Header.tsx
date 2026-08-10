"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Home top: transparent over dark hero → always white labels
  // Elsewhere / scrolled: solid surface with theme-aware ink colors
  const overDarkHero = isHome && !scrolled && !open;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        overDarkHero
          ? "bg-transparent"
          : "border-b border-line bg-paper/95 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl",
      ].join(" ")}
    >
      <div className="container-page flex min-h-16 items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal to-teal-deep text-sm font-bold text-white shadow-[0_10px_24px_rgba(18,165,148,0.35)] transition group-hover:scale-[1.03]">
            N
          </span>
          <span
            className={[
              "display text-xl font-bold tracking-tight transition",
              overDarkHero ? "text-white" : "text-ink",
            ].join(" ")}
          >
            Nstans
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                data-active={active}
                className={[
                  "nav-link text-sm font-semibold",
                  overDarkHero
                    ? active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                    : active
                      ? "text-teal-deep"
                      : "text-[color:var(--header-muted)] hover:text-[color:var(--header-fg)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeToggle lightOnDark={overDarkHero} />
          <Button href="/consultation" size="md">
            Free Consultation
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle lightOnDark={overDarkHero} />
          <button
            type="button"
            aria-label="Toggle menu"
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-xl",
              overDarkHero ? "bg-white/10 text-white" : "bg-mist text-ink",
            ].join(" ")}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={[
                  "block h-0.5 w-5 transition",
                  open ? "translate-y-2 rotate-45" : "",
                  overDarkHero ? "bg-white" : "bg-ink",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-0.5 w-5 transition",
                  open ? "opacity-0" : "",
                  overDarkHero ? "bg-white" : "bg-ink",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-0.5 w-5 transition",
                  open ? "-translate-y-2 -rotate-45" : "",
                  overDarkHero ? "bg-white" : "bg-ink",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper px-4 py-5 md:hidden">
          <div className="container-page flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="nav-link w-fit text-base font-semibold text-ink"
                data-active={pathname === item.href}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/consultation" className="w-full">
              Free Consultation
            </Button>
            <Button href="/contact" variant="outline-light" className="w-full">
              Hire Us
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
