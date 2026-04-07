type NavLink = "work" | "about" | "clients" | "experience";
export const navLinks: NavLink[] = ["work", "about", "clients", "experience"];

type Project = {
  type: string;
  title: string;
  desc: string;
  stack: string[];
  highlight?: string;
  highlightLabel?: string;
};
export const projects: Project[] = [
  {
    type: "Task Management",
    title: "Task Breakdown API",
    desc: "Building an API-first platform focused on turning high-level tasks into structured, actionable data for real-world use cases.",
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "OpenAI API",
      "Next.js",
      "Stripe",
    ],
    highlight: "API-First",
    highlightLabel: "Built around reusable endpoints",
  },
  {
    type: "Task Management",
    title: "Trade Track",
    desc: "Trade Track is a simple way to keep on top of your jobs without overcomplicating things.",
    stack: ["React Native", "Expo", "TypeScript", "SQLite", "NativeWind"],
    highlight: "Mobile MVP",
    highlightLabel: "Designed for daily, on-site use",
  },
  {
    type: "Template Builder",
    title: "Snap Template",
    desc: "A lightweight, developer-friendly drag-and-drop email template builder focused on speed, reusable blocks, and clean output.",
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Next.js",
      "Stripe",
    ],
    highlight: "Builder UX",
    highlightLabel: "Fast drag-and-drop workflow",
  },
  {
    type: "Event Management",
    title: "Events Platform",
    desc: "Events platform for managing events and tickets.",
    stack: ["TypeScript", "PostgreSQL", "Express", "React", "Next.js"],
    highlight: "Core Flows",
    highlightLabel: "Ticketing and event ops implemented",
  },
  {
    type: "Developer Tool",
    title: "Create MVC Server",
    desc: "CLI dev tool for scaffolding MVC API projects to help speed up development.",
    stack: ["TypeScript", "JavaScript", "Node.js"],
    highlight: "CLI Automation",
    highlightLabel: "Reduces repetitive project setup",
  },
];

type Skill = {
  category: string;
  skills: string[];
};
export const skills: Skill[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "REST"],
  },
  {
    category: "Practices",
    skills: ["TDD", "System Design", "Agile / Scrum", "Code Review"],
  },
];

type Service = {
  num: string;
  name: string;
  desc: string;
};
export const services: Service[] = [
  {
    num: "01",
    name: "Full-Stack Web Applications",
    desc: "From MVP to production-grade. I design, build, and deploy complete web products - frontend, backend, database.",
  },
  {
    num: "02",
    name: "API Design & Integration",
    desc: "RESTful APIs, third-party integrations, payment gateways, auth systems - built to a spec you actually understand.",
  },
  {
    num: "03",
    name: "Performance & Scaling",
    desc: "Slow apps, database bottlenecks, flaky infrastructure. I audit, diagnose, and fix.",
  },
  {
    num: "04",
    name: "Technical Consulting",
    desc: "Architecture reviews, tech stack decisions, team structure. Hourly or retainer - no bloated agency markup.",
  },
];

type EngagementType = {
  plan: string;
  detail: string;
};
export const engagementTypes: EngagementType[] = [
  {
    plan: "Fixed-Price Project",
    detail: "Defined scope, defined cost. No surprises.",
  },
  { plan: "Hourly Rate", detail: "£60–£100 / hour" },
  { plan: "Day Rate", detail: "£400–£750 / day" },
  { plan: "Monthly Retainer", detail: "Ongoing support, priority response" },
];

type Experience = {
  date: string;
  role: string;
  company: string;
  desc: string;
};
export const experience: Experience[] = [
  {
    date: "2022 — Present",
    role: "Senior Software Engineer",
    company: "Helix Systems, London",
    desc: "Led backend architecture for a data platform serving 200k+ daily active users. Drove a 3× throughput improvement through query optimisation and caching strategy. Mentored 4 junior engineers.",
  },
  {
    date: "2020 — 2022",
    role: "Full-Stack Engineer",
    company: "Vantage Digital Agency, Manchester",
    desc: "Delivered 15+ client projects across e-commerce, SaaS, and media. Introduced CI/CD pipelines that cut deployment time from days to minutes.",
  },
  {
    date: "2018 — 2020",
    role: "Junior Developer",
    company: "Orbit Labs, Remote",
    desc: "Built internal tooling and customer-facing features for a SaaS CRM. First engineering hire — helped establish code review culture and testing standards.",
  },
];

type Testimonial = {
  tag: string;
  quote: string;
  author: string;
  role: string;
};
export const testimonials: Testimonial[] = [
  {
    tag: "Employer",
    quote:
      "One of the most reliable engineers I've managed. Delivers on time and elevates the whole team.",
    author: "Sarah Chen",
    role: "VP Engineering · Helix Systems",
  },
  {
    tag: "Client",
    quote:
      "Took our vague brief and turned it into a product that actually works and converts.",
    author: "James O'Brien",
    role: "Founder · Forge Commerce",
  },
  {
    tag: "Client",
    quote:
      "The API he built handles more load than we expected, and it's been rock solid.",
    author: "Priya Nair",
    role: "CTO · FinStack Ltd",
  },
];

type ContactLink = {
  href: string;
  label: string;
};
export const contactLinks: ContactLink[] = [
  { href: "https://linkedin.com/in/terry-www", label: "LinkedIn" },
  { href: "https://github.com/TTibbs", label: "GitHub" },
];
