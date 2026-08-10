import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal text-white shadow-[0_14px_34px_rgba(18,165,148,0.35)] hover:bg-teal-deep",
  secondary:
    "bg-[#0c1419] text-white hover:bg-[#162028] shadow-[0_14px_34px_rgba(12,20,25,0.2)]",
  ghost: "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/16",
  "outline-light":
    "bg-transparent text-ink ring-1 ring-[var(--line-strong)] hover:bg-mist",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentProps<"a">, "className" | "children" | "href">;

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...rest
  } = props;

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    if (isExternal(href)) {
      return (
        <a
          href={href}
          className={classes}
          rel={linkRest.target === "_blank" ? "noreferrer" : undefined}
          {...linkRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
