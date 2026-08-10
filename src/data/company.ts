export const company = {
  name: "Nstans",
  tagline: "Build software that ships, scales, and drives growth.",
  description:
    "Nstans is a product-focused software studio building modern web apps, SaaS platforms, and custom business systems with the MERN stack and beyond.",
  aboutLong:
    "We help startups and growing businesses turn ideas into reliable software — from MVPs and SaaS platforms to internal tools and industry portals. Our team blends product thinking with hands-on engineering so every release is useful, maintainable, and ready to scale.",
  email: "muneebahmed4134@gmail.com",
  phone: "03328379597",
  phoneDisplay: "0332 8379597",
  whatsapp: "923328379597",
  whatsappUrl: "https://wa.me/923328379597",
  location: "Pakistan · Remote-first",
  socials: [
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
    { id: "github", label: "GitHub", href: "https://github.com" },
    { id: "x", label: "X", href: "https://x.com" },
  ],
} as const;

export const navigation = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { id: "projects", value: "40+", label: "Products shipped" },
  { id: "clients", value: "25+", label: "Happy clients" },
  { id: "stack", value: "MERN", label: "Core expertise" },
  { id: "support", value: "24/7", label: "Async collaboration" },
] as const;

export const aboutValues = [
  {
    id: "clarity",
    title: "Clarity first",
    text: "We scope honestly, communicate often, and never hide behind jargon.",
    accent: "#12A594",
    icon: "01",
  },
  {
    id: "craft",
    title: "Craft in the details",
    text: "Interfaces stay polished, APIs stay clean, and delivery stays predictable.",
    accent: "#E07A3D",
    icon: "02",
  },
  {
    id: "partnership",
    title: "Long-term partnership",
    text: "We build as if we’ll maintain it with you — because often we do.",
    accent: "#3D7AE0",
    icon: "03",
  },
] as const;

export const aboutStory = {
  eyebrow: "Our story",
  title: "Product partners, not ticket-takers",
  paragraphs: [
    "Nstans is a product-focused software studio building modern web apps, SaaS platforms, and custom business systems with the MERN stack and beyond. We work closely with founders and operators to turn fuzzy requirements into phased roadmaps that actually get released.",
    "Whether you need an MVP to validate demand, a custom business system, or a production-grade SaaS, our team stays accountable from discovery through launch.",
  ],
  highlights: [
    { label: "Focus", value: "Ship value early" },
    { label: "Style", value: "Transparent sprints" },
    { label: "Promise", value: "Code you can own" },
  ],
} as const;

export const workSteps = [
  {
    title: "Discover",
    text: "Clarify goals, users, constraints, and the smallest useful release.",
  },
  {
    title: "Design & build",
    text: "Ship in short cycles with transparent progress and clean architecture.",
  },
  {
    title: "Launch & iterate",
    text: "Stabilize production, measure usage, and keep improving what matters.",
  },
] as const;
