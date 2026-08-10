export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  group: "founder" | "leadership" | "engineering";
};

export const founders: TeamMember[] = [
  {
    id: "asadullah",
    name: "Asadullah Ijaz",
    role: "Co-Founder",
    bio: "Leads product vision and client partnerships — connecting business goals with shippable software roadmaps.",
    initials: "AI",
    accent: "#12A594",
    group: "founder",
  },
  {
    id: "abdullah",
    name: "Abdullah",
    role: "Co-Founder",
    bio: "Drives studio strategy and delivery standards so every Nstans project stays focused, fast, and high quality.",
    initials: "AB",
    accent: "#E07A3D",
    group: "founder",
  },
];

export const team: TeamMember[] = [
  {
    id: "gulzaib",
    name: "Gulzaib Bhatti",
    role: "Team Lead · Senior Software Engineer",
    bio: "Owns technical leadership across engagements — architecture decisions, code quality, and mentoring the build team.",
    initials: "GB",
    accent: "#3D7AE0",
    group: "leadership",
  },
  {
    id: "muneeb",
    name: "Muneeb Ahmed",
    role: "Frontend Developer",
    bio: "Crafts fast, conversion-ready interfaces with Next.js, React, and polished product UX.",
    initials: "MA",
    accent: "#12A594",
    group: "engineering",
  },
  {
    id: "rutaba",
    name: "Rutaba",
    role: "Backend Developer",
    bio: "Builds secure APIs, data models, and Node.js services that keep products stable in production.",
    initials: "RU",
    accent: "#8B5CF6",
    group: "engineering",
  },
];

export const allPeople = [...founders, ...team];
