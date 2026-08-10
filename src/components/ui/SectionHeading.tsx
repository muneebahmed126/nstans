import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "mb-10 flex flex-col gap-4 md:mb-12",
        align === "center" ? "items-center text-center" : "items-start",
        action ? "md:flex-row md:items-end md:justify-between" : "",
      ].join(" ")}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow ? (
          <p
            className={[
              "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
              light ? "text-teal-glow" : "text-teal-deep",
            ].join(" ")}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={[
            "display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[2.75rem]",
            light ? "section-title-light" : "section-title",
          ].join(" ")}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={[
              "mt-4 text-base leading-7 sm:text-lg",
              light ? "text-white/75" : "text-slate",
              align === "center" ? "mx-auto" : "",
            ].join(" ")}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
