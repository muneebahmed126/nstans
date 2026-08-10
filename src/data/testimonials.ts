export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  about: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Muneeb Ahmed",
    role: "Frontend Partner Review",
    company: "Product UI delivery",
    about: "Frontend excellence",
    quote:
      "Clients consistently praise how quickly ideas become polished interfaces — clear components, strong responsiveness, and a frontend that feels premium from day one.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rutaba",
    role: "Backend Partner Review",
    company: "API & systems reliability",
    about: "Backend strength",
    quote:
      "From auth flows to complex business logic, backend delivery stays clean and dependable. Integrations work, endpoints make sense, and handoff to the frontend team is seamless.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Asadullah Ijaz",
    role: "Founder Partner Review",
    company: "Leadership & delivery",
    about: "Vision & trust",
    quote:
      "Projects stay aligned because communication is direct and priorities are honest. Stakeholders always know what is shipping next — and why it matters.",
    rating: 5,
  },
];

export const clients = [
  { id: "c1", name: "Launchly" },
  { id: "c2", name: "MediPort" },
  { id: "c3", name: "Northbeam" },
  { id: "c4", name: "FolioBase" },
  { id: "c5", name: "Kitra" },
  { id: "c6", name: "OrbitOps" },
];
