export type AgentReply = {
  id: string;
  keywords: string[];
  answer: string;
};

export const agentWelcome =
  "Hi — I’m the Nstans assistant. Ask me about our services, tech stack, pricing process, timelines, or how to hire the team.";

export const agentSuggestions = [
  "What services do you offer?",
  "Which tech stack do you use?",
  "How can I book a free consultation?",
  "How do I contact Nstans?",
];

export const agentKnowledge: AgentReply[] = [
  {
    id: "services",
    keywords: [
      "service",
      "services",
      "offer",
      "build",
      "saas",
      "mvp",
      "dashboard",
      "what do you",
    ],
    answer:
      "We build MERN/Next.js products including SaaS apps, MVPs, admin dashboards, CRM-style systems, booking tools, APIs, and industry portals (healthcare, LMS, fintech, real estate, and more). Visit the Services page for the full list.",
  },
  {
    id: "stack",
    keywords: [
      "stack",
      "tech",
      "technology",
      "react",
      "next",
      "node",
      "nest",
      "mongo",
    ],
    answer:
      "Our core stack is React.js, Next.js, Node.js, Nest.js, Express, MongoDB/PostgreSQL, and TypeScript. We’re flexible if your project needs a specific setup.",
  },
  {
    id: "consultation",
    keywords: [
      "consult",
      "consultation",
      "free",
      "book",
      "call",
      "quote",
      "estimate",
    ],
    answer:
      "You can start a Free Consultation from the homepage or /consultation. It’s a short questionnaire covering service type, product type, stack preference, timeline, and budget.",
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "phone",
      "whatsapp",
      "reach",
      "talk",
      "hire",
    ],
    answer:
      "Email us at muneebahmed4134@gmail.com, message on WhatsApp at 0332 8379597, or use the Contact page form. Hire Us on the homepage also takes you there.",
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "budget", "rate", "charges"],
    answer:
      "Pricing depends on scope, timeline, and complexity. Most projects start after a quick discovery chat. Share your budget range in the free consultation and we’ll recommend a practical plan.",
  },
  {
    id: "team",
    keywords: [
      "team",
      "founder",
      "who",
      "muneeb",
      "rutaba",
      "asadullah",
      "abdullah",
      "gulzaib",
    ],
    answer:
      "Nstans is led by founders Asadullah Ijaz and Abdullah. Gulzaib Bhatti is Team Lead (Senior Software Engineer). Muneeb Ahmed handles frontend, and Rutaba leads backend.",
  },
  {
    id: "timeline",
    keywords: ["timeline", "how long", "duration", "weeks", "months", "fast"],
    answer:
      "MVPs can often ship in weeks when scope is focused. Larger SaaS and business systems usually run in phased milestones over 1–4 months. Tell us your preferred timeline in the consultation flow.",
  },
  {
    id: "hello",
    keywords: ["hi", "hello", "hey", "salam", "assalam"],
    answer:
      "Hello! How can I help today — services, stack, consultation, or contacting the team?",
  },
];

export const agentFallback =
  "I can help with services, tech stack, timelines, pricing process, our team, or contact options. You can also WhatsApp us at 0332 8379597 or email muneebahmed4134@gmail.com.";
