export type ConsultationOption = {
  id: string;
  label: string;
  description?: string;
};

export type ConsultationQuestion = {
  id: string;
  title: string;
  subtitle: string;
  type: "single" | "multi" | "text" | "textarea";
  required?: boolean;
  options?: ConsultationOption[];
  placeholder?: string;
};

export const consultationQuestions: ConsultationQuestion[] = [
  {
    id: "serviceType",
    title: "What type of service do you need?",
    subtitle: "Pick the closest match — we can refine this on the call.",
    type: "single",
    required: true,
    options: [
      {
        id: "saas",
        label: "SaaS / Product Build",
        description: "From scratch or major feature work",
      },
      {
        id: "mvp",
        label: "MVP Development",
        description: "Fast first version to validate",
      },
      {
        id: "custom",
        label: "Custom Software",
        description: "Tailored internal or customer tools",
      },
      {
        id: "api",
        label: "API / Backend",
        description: "Architecture, integrations, optimization",
      },
      {
        id: "dashboard",
        label: "Admin Dashboard",
        description: "Panels, reporting, operations tools",
      },
      {
        id: "other",
        label: "Something else",
        description: "Tell us in the next steps",
      },
    ],
  },
  {
    id: "projectType",
    title: "What are you building?",
    subtitle: "Choose one primary product type.",
    type: "single",
    required: true,
    options: [
      { id: "dynamic-website", label: "Dynamic Website" },
      { id: "crm", label: "CRM" },
      { id: "custom-software", label: "Custom Software" },
      { id: "booking", label: "Booking / Appointment System" },
      { id: "ecommerce", label: "E-commerce / Ordering" },
      { id: "portal", label: "Portal (LMS, Healthcare, FinTech, etc.)" },
      { id: "not-sure", label: "Not sure yet" },
    ],
  },
  {
    id: "techStack",
    title: "Any preferred tech stack?",
    subtitle: "Select all that apply. We can recommend if you’re open.",
    type: "multi",
    required: true,
    options: [
      { id: "react", label: "React.JS" },
      { id: "next", label: "Next.JS" },
      { id: "node", label: "Node.JS" },
      { id: "nest", label: "Nest.JS" },
      { id: "express", label: "Express.JS" },
      { id: "mongo", label: "MongoDB" },
      { id: "open", label: "Open to recommendations" },
    ],
  },
  {
    id: "timeline",
    title: "What’s your preferred timeline?",
    subtitle: "An honest range helps us plan scope.",
    type: "single",
    required: true,
    options: [
      { id: "asap", label: "ASAP (under 4 weeks)" },
      { id: "1-2-months", label: "1–2 months" },
      { id: "3-4-months", label: "3–4 months" },
      { id: "flexible", label: "Flexible / phased" },
    ],
  },
  {
    id: "budget",
    title: "What’s your estimated budget?",
    subtitle: "Ranges keep the conversation practical.",
    type: "single",
    required: true,
    options: [
      { id: "under-2k", label: "Under $2,000" },
      { id: "2k-5k", label: "$2,000 – $5,000" },
      { id: "5k-10k", label: "$5,000 – $10,000" },
      { id: "10k-plus", label: "$10,000+" },
      { id: "discuss", label: "Prefer to discuss" },
    ],
  },
  {
    id: "details",
    title: "Anything else we should know?",
    subtitle: "Goals, must-haves, current tools, or pain points.",
    type: "textarea",
    required: false,
    placeholder:
      "Example: We need a booking system for 3 clinics with Google Calendar sync...",
  },
  {
    id: "contact",
    title: "How can we reach you?",
    subtitle: "We’ll use this to confirm your free consultation.",
    type: "text",
    required: true,
    placeholder: "Full name",
  },
];

export const consultationContactFields = [
  {
    id: "name",
    label: "Full name",
    type: "text",
    placeholder: "Your name",
    required: true,
  },
  {
    id: "email",
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    required: true,
  },
  {
    id: "phone",
    label: "Phone / WhatsApp",
    type: "tel",
    placeholder: "+92 ...",
    required: false,
  },
] as const;
