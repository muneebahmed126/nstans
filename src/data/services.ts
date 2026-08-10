export type ServiceCategory =
  | "product"
  | "applications"
  | "apis"
  | "systems"
  | "industries";

export type Service = {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  details: string;
  features: string[];
  outcomes: string[];
  idealFor: string[];
  timeline: string;
  stacks: string[];
};

export type TechStackItem = {
  id: string;
  name: string;
  group: "frontend" | "backend" | "database" | "tools";
};

export const serviceCategories: {
  id: ServiceCategory;
  label: string;
  description: string;
  accent: string;
}[] = [
  {
    id: "product",
    label: "Product Development",
    description: "From idea to launch-ready SaaS and MVPs.",
    accent: "#12A594",
  },
  {
    id: "applications",
    label: "Custom Applications",
    description: "Business software tailored to your workflows.",
    accent: "#3D7AE0",
  },
  {
    id: "apis",
    label: "APIs & Architecture",
    description: "Reliable backends, integrations, and performance.",
    accent: "#E07A3D",
  },
  {
    id: "systems",
    label: "Business Systems",
    description: "Operations tools that keep teams moving.",
    accent: "#8B5CF6",
  },
  {
    id: "industries",
    label: "Industry Platforms",
    description: "Domain-ready portals and dashboards.",
    accent: "#0C7F73",
  },
];

const categoryDefaults: Record<
  ServiceCategory,
  {
    timeline: string;
    stacks: string[];
    idealFor: string[];
    features: string[];
    outcomes: string[];
  }
> = {
  product: {
    timeline: "4–12 weeks depending on scope",
    stacks: ["React.JS", "Next.JS", "Node.JS", "MongoDB"],
    idealFor: ["Startups", "Founders validating ideas", "Product teams"],
    features: [
      "Discovery workshop and scoped roadmap",
      "Modern UI with responsive product flows",
      "Auth, roles, and core feature modules",
      "Launch-ready deployment checklist",
    ],
    outcomes: [
      "A shippable product slice users can try",
      "Clear next-iteration roadmap",
      "Codebase ready for growth",
    ],
  },
  applications: {
    timeline: "3–10 weeks depending on modules",
    stacks: ["React.JS", "Next.JS", "Node.JS", "Nest.JS"],
    idealFor: ["Ops teams", "Internal tools", "Growing businesses"],
    features: [
      "Role-based access and admin controls",
      "Tables, filters, and actionable workflows",
      "Dashboards with practical metrics",
      "Clean handoff documentation",
    ],
    outcomes: [
      "Faster day-to-day operations",
      "Less spreadsheet chaos",
      "A tool your team actually wants to use",
    ],
  },
  apis: {
    timeline: "2–8 weeks depending on complexity",
    stacks: ["Node.JS", "Nest.JS", "Express.JS", "PostgreSQL"],
    idealFor: ["Product backends", "Integrations", "Platform teams"],
    features: [
      "Secure authentication patterns",
      "Well-structured endpoints and contracts",
      "Third-party integration support",
      "Performance and reliability improvements",
    ],
    outcomes: [
      "Stable APIs your clients can depend on",
      "Easier frontend/backend collaboration",
      "A foundation ready to scale",
    ],
  },
  systems: {
    timeline: "4–14 weeks depending on modules",
    stacks: ["Next.JS", "Node.JS", "MongoDB", "PostgreSQL"],
    idealFor: ["SMEs", "Operations leaders", "Multi-team companies"],
    features: [
      "Workflow-first screens and permissions",
      "Reporting and status visibility",
      "Notifications and process automation",
      "Modular features you can expand later",
    ],
    outcomes: [
      "Centralized operational control",
      "Better team accountability",
      "Lower manual admin overhead",
    ],
  },
  industries: {
    timeline: "6–16 weeks depending on domain needs",
    stacks: ["React.JS", "Next.JS", "Node.JS", "Nest.JS"],
    idealFor: ["Niche startups", "Service businesses", "Vertical SaaS"],
    features: [
      "Domain-specific user journeys",
      "Admin + customer-facing portals",
      "Integrations for payments or messaging",
      "Secure access and audit-friendly logs",
    ],
    outcomes: [
      "A platform tailored to your industry",
      "Faster onboarding for your users",
      "A product that feels purpose-built",
    ],
  },
};

type ServiceSeed = {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  details?: string;
  features?: string[];
  outcomes?: string[];
  idealFor?: string[];
  timeline?: string;
  stacks?: string[];
};

const serviceSeeds: ServiceSeed[] = [
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    description:
      "End-to-end web apps with MongoDB, Express, React, and Node.js.",
    category: "product",
    details:
      "We design and build full-stack MERN applications with clean architecture, production-ready APIs, and polished React interfaces. Ideal when you want one team owning the entire product path from database to UI.",
    features: [
      "Full MERN architecture from day one",
      "Reusable React components and layouts",
      "Express/Node APIs with auth and validation",
      "MongoDB schema design and indexing basics",
    ],
    stacks: ["React.JS", "Node.JS", "Express.JS", "MongoDB"],
  },
  {
    id: "saas-scratch",
    title: "Build SaaS Applications from Scratch",
    description:
      "Multi-tenant products with auth, billing, and scalable architecture.",
    category: "product",
    details:
      "We help you launch SaaS products with the foundations that matter: authentication, tenant separation, billing hooks, admin tooling, and a roadmap for scale after the first release.",
    features: [
      "Multi-tenant architecture planning",
      "Auth, roles, and workspace patterns",
      "Billing and subscription-ready flows",
      "Admin tools for accounts and usage",
    ],
  },
  {
    id: "mvp",
    title: "MVP Development",
    description:
      "Launch a focused first version fast, validate, then iterate.",
    category: "product",
    details:
      "We cut scope ruthlessly and ship the smallest product that still feels trustworthy — so you can get real users, feedback, and investor or market validation quickly.",
    timeline: "3–8 weeks for a focused MVP",
    features: [
      "Priority feature mapping",
      "Fast UI and API implementation",
      "Launch checklist and feedback loops",
      "Iteration plan after first release",
    ],
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboards",
    description:
      "Role-based control panels with charts, tables, and workflows.",
    category: "applications",
    details:
      "We build admin dashboards that make operations visible and actionable — with clear roles, searchable tables, useful charts, and workflows tailored to your team.",
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    description:
      "Purpose-built web software for unique business requirements.",
    category: "applications",
    details:
      "When off-the-shelf tools fall short, we create custom web applications shaped around your exact process, users, and growth goals.",
  },
  {
    id: "business-management",
    title: "Business Management Systems",
    description:
      "Centralize operations, reporting, and day-to-day decisions.",
    category: "systems",
    details:
      "A central system for running the business: people, processes, status, and reporting in one place so decisions stop depending on scattered chats and sheets.",
  },
  {
    id: "hr-software",
    title: "HR Management Software",
    description:
      "Employees, attendance, payroll hooks, and leave workflows.",
    category: "systems",
    details:
      "HR software that covers employee records, attendance, leave requests, approvals, and payroll-ready exports — built around how your team actually works.",
  },
  {
    id: "project-tools",
    title: "Project Management Tools",
    description:
      "Tasks, boards, timelines, and team collaboration features.",
    category: "systems",
    details:
      "Custom project tools with boards, assignments, timelines, and collaboration features when generic tools are too rigid or too noisy.",
  },
  {
    id: "booking-systems",
    title: "Booking & Appointment Systems",
    description:
      "Scheduling, reminders, payments, and staff availability.",
    category: "systems",
    details:
      "Booking systems for clinics, studios, consultants, and service teams — with availability, reminders, payments, and staff calendars.",
  },
  {
    id: "inventory",
    title: "Inventory Management Systems",
    description:
      "Stock tracking, suppliers, warehouses, and low-stock alerts.",
    category: "systems",
    details:
      "Track stock movement, suppliers, warehouses, and alerts before inventory becomes a bottleneck. Built for clarity on desktop and everyday use.",
  },
  {
    id: "job-board",
    title: "Job Board",
    description:
      "Job listings, applications, employer portals, and search.",
    category: "applications",
    details:
      "A job board platform with employer/candidate journeys, listing management, applications, and search/filtering that feels fast and trustworthy.",
  },
  {
    id: "real-estate",
    title: "Real Estate Portal",
    description:
      "Listings, filters, agent dashboards, and lead capture.",
    category: "industries",
    details:
      "Real estate portals with rich listings, filters, agent dashboards, inquiry capture, and the workflows agencies need to convert interest into deals.",
  },
  {
    id: "admin-panels",
    title: "Admin Panels",
    description:
      "Internal tools for content, users, and operational control.",
    category: "applications",
    details:
      "Internal admin panels for managing users, content, permissions, and day-to-day product operations without needing engineering for every change.",
  },
  {
    id: "rest-api",
    title: "REST API Development",
    description:
      "Clean, documented endpoints with authentication and versioning.",
    category: "apis",
    details:
      "We design REST APIs that are predictable, secure, and easy for frontend or third-party teams to consume — including validation, auth, and versioning strategy.",
  },
  {
    id: "graphql",
    title: "GraphQL APIs",
    description:
      "Flexible data querying for modern client applications.",
    category: "apis",
    details:
      "GraphQL APIs for frontends that need flexible querying, reduced over-fetching, and a clear schema as the product grows.",
    stacks: ["Node.JS", "Nest.JS", "GraphQL", "PostgreSQL"],
  },
  {
    id: "third-party-api",
    title: "Third-party API Integration",
    description:
      "Payments, CRM, messaging, maps, and SaaS tool connections.",
    category: "apis",
    details:
      "Connect your product to the tools your business already uses — payments, CRM, messaging, maps, analytics, and more — with reliable error handling.",
  },
  {
    id: "api-optimization",
    title: "API Optimization",
    description:
      "Latency, caching, pagination, and reliability improvements.",
    category: "apis",
    details:
      "Improve existing APIs with smarter pagination, caching, query tuning, and reliability patterns so clients feel faster and more stable.",
  },
  {
    id: "backend-architecture",
    title: "Backend Architecture",
    description:
      "Service design, data models, queues, and deployment strategy.",
    category: "apis",
    details:
      "We help you design or refactor backend architecture: service boundaries, data models, queues, and deployment choices that stay maintainable.",
  },
  {
    id: "realtime-dashboards",
    title: "Real-time Dashboards",
    description:
      "Live metrics and updates with sockets and event streams.",
    category: "applications",
    details:
      "Dashboards that update as events happen — useful for operations, monitoring, live commerce, and team visibility.",
    stacks: ["React.JS", "Next.JS", "Node.JS", "WebSockets"],
  },
  {
    id: "app-optimization",
    title: "Application Optimization",
    description:
      "Performance, SEO, bundle size, and Core Web Vitals work.",
    category: "product",
    details:
      "We improve existing applications across performance, SEO, bundle size, and Core Web Vitals so product quality and conversion improve together.",
    timeline: "1–4 weeks depending on audit depth",
  },
  {
    id: "healthcare",
    title: "Healthcare Portals",
    description:
      "Patient-facing and admin tools with secure access patterns.",
    category: "industries",
    details:
      "Healthcare portals for patients and admins with careful access control, appointment or record workflows, and interfaces built for clarity under pressure.",
  },
  {
    id: "property-mgmt",
    title: "Property Management Systems",
    description:
      "Tenants, leases, maintenance tickets, and owner reporting.",
    category: "industries",
    details:
      "Manage properties, tenants, leases, maintenance, and owner updates in one system designed for real estate operations teams.",
  },
  {
    id: "lms",
    title: "Education Platforms (LMS)",
    description:
      "Courses, progress tracking, assessments, and enrollments.",
    category: "industries",
    details:
      "Learning platforms with courses, progress, assessments, enrollments, and instructor/admin tools for academies and training businesses.",
  },
  {
    id: "fintech",
    title: "FinTech Dashboards",
    description:
      "Finance ops views with clear reporting and audit trails.",
    category: "industries",
    details:
      "Finance-facing dashboards with clear reporting, operational views, and audit-friendly activity trails for teams that need trust and clarity.",
  },
  {
    id: "restaurant",
    title: "Restaurant Ordering Systems",
    description:
      "Menus, orders, kitchen flow, and delivery-ready integrations.",
    category: "industries",
    details:
      "Ordering systems covering menus, carts, kitchen status, and delivery-ready integrations so restaurants can move faster with fewer mistakes.",
  },
  {
    id: "gym",
    title: "Gym Management Software",
    description:
      "Memberships, check-ins, trainers, and class schedules.",
    category: "industries",
    details:
      "Gym software for memberships, check-ins, trainer schedules, and class bookings — built to keep staff and members in sync.",
  },
];

function enrichService(seed: ServiceSeed): Service {
  const defaults = categoryDefaults[seed.category];
  return {
    id: seed.id,
    title: seed.title,
    description: seed.description,
    category: seed.category,
    details:
      seed.details ??
      `${seed.description} Our team works with you from discovery to launch so the solution fits your users, timeline, and growth plan.`,
    features: seed.features ?? defaults.features,
    outcomes: seed.outcomes ?? defaults.outcomes,
    idealFor: seed.idealFor ?? defaults.idealFor,
    timeline: seed.timeline ?? defaults.timeline,
    stacks: seed.stacks ?? defaults.stacks,
  };
}

export const services: Service[] = serviceSeeds.map(enrichService);

export function getServiceCategory(id: ServiceCategory) {
  return serviceCategories.find((category) => category.id === id);
}

export const techStack: TechStackItem[] = [
  { id: "react", name: "React.JS", group: "frontend" },
  { id: "next", name: "Next.JS", group: "frontend" },
  { id: "node", name: "Node.JS", group: "backend" },
  { id: "nest", name: "Nest.JS", group: "backend" },
  { id: "express", name: "Express.JS", group: "backend" },
  { id: "mongo", name: "MongoDB", group: "database" },
  { id: "postgres", name: "PostgreSQL", group: "database" },
  { id: "tailwind", name: "Tailwind CSS", group: "frontend" },
  { id: "typescript", name: "TypeScript", group: "tools" },
  { id: "graphql-tech", name: "GraphQL", group: "backend" },
];
