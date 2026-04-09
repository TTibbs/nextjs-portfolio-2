type NavLink = "work" | "about" | "clients" | "experience";
export const navLinks: NavLink[] = ["work", "about", "clients", "experience"];

type Project = {
  type: string;
  title: string;
  desc: string;
  stack: string[];
  images?: string[];
  highlight?: string;
  highlightLabel?: string;
  link?: string;
};
export const projects: Project[] = [
  {
    type: "Website Rebuild",
    title: "SAPUK",
    desc: "Rebuilt the SAPUK website to improve performance, accessibility, and SEO. Includes a custom CMS for managing content amongst other features.",
    stack: ["Next.js", "TailwindCSS", "TypeScript", "React", "Shadcn/UI"],
    images: [
      "https://bi4a1aeb4i.ufs.sh/f/akEZKbpzclMNNDgSMzJhPBY2x6AW35zyICHElrVJZeaKw0c9",
      "https://bi4a1aeb4i.ufs.sh/f/akEZKbpzclMNCFQxhGf74nQ1PD5RGM8oxFAX2Ju6sK9yIrUE",
      "https://bi4a1aeb4i.ufs.sh/f/akEZKbpzclMN5myLBgQQDzYblRcrHvj5xAw6JLBmyM082uTV",
      "https://bi4a1aeb4i.ufs.sh/f/akEZKbpzclMNGEjlEnvXSY6vRrlKdVkht9Han72iA1DxMqcO",
      "https://bi4a1aeb4i.ufs.sh/f/akEZKbpzclMNPBiGhaWLi3vBmhrD0MVN4cbfCuRa1P7JgwZX",
      "https://bi4a1aeb4i.ufs.sh/f/akEZKbpzclMNWhKaQy8qSzjF3IhceVQR5AYaDifr7Zv9g4Mp",
    ],
    highlight: "Website Rebuild",
    highlightLabel: "Improved performance, accessibility, and SEO",
    link: "https://suicideapuk.co.uk",
  },
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
    images: [
      "https://7f3lbeatxp.ufs.sh/f/3DX3TPuFHmx7YU84yVgRyra1c6Aji9pulhsg3tBJxLIwGHqb",
      "https://7f3lbeatxp.ufs.sh/f/3DX3TPuFHmx7xCpnZxSm4YW8J7I5raUXGtA9edxgvf2Qio1n",
      "https://7f3lbeatxp.ufs.sh/f/3DX3TPuFHmx7DflTNXpaoTQb3Y9DpgVIymU7v4PeJlGKfdM1",
      "https://7f3lbeatxp.ufs.sh/f/3DX3TPuFHmx7rUXM8wcfFmBer0pHkDC4oaLydWOAs1IJ8E56",
    ],
    highlight: "API-First",
    highlightLabel: "Built around reusable endpoints",
    link: "https://task-breakdown-api.vercel.app",
  },
  {
    type: "Task Management",
    title: "Trade Track",
    desc: "Trade Track is a simple way to keep on top of your jobs without overcomplicating things.",
    stack: ["React Native", "Expo", "TypeScript", "SQLite", "NativeWind"],
    images: [
      "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgnxfcr4po92SnlIH3MLYJF64GajKpvDgcUZz1y",
      "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgnQmlOyBveajRyT2O3JACdEGLFqN0bMB4scmrI",
      "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgnphSSvp56BTbkLxjWXns57f0mEUAMO1J4o8DV",
      "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgnPEaY1FxLacuZNeh2dVlbmkOg8GS67vT3xwis",
      "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgn4hp5fumgbpSYr9KqszZN6xQCAohFi13Gny7u",
      "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgnQj3CE1veajRyT2O3JACdEGLFqN0bMB4scmrI",
      "https://s2pw3n9f1f.ufs.sh/f/GNMrlX3JRPgnhoqKpRbjXdT90NKqtkWMFLUSx51Hc8vEzCBe",
    ],
    highlight: "Mobile MVP",
    highlightLabel: "Designed for daily, on-site use",
    link: "https://trade-track.vercel.app",
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
    images: [
      "https://dxgjph0nw8.ufs.sh/f/fuQKGtDZvoF0YDw9NOt3m4gcCRZTw0PSxMEuVtGW67lhf1Op",
      "https://dxgjph0nw8.ufs.sh/f/fuQKGtDZvoF0rcP4tJTjW6q39X1vse2Sn5KCiHbltBoxFgfZ",
    ],
    highlight: "Builder UX",
    highlightLabel: "Fast drag-and-drop workflow",
    link: "https://snap-template.vercel.app",
  },
  {
    type: "Event Management",
    title: "Events Platform",
    desc: "Events platform for managing events and tickets.",
    stack: ["TypeScript", "PostgreSQL", "Express", "React", "Next.js"],
    images: [
      "https://c5znixeqj7.ufs.sh/f/Jf9D0EOZjwR5KeAxjbsrGMB8LJT2N31vW7DSoC5OqdyhfsUt",
      "https://c5znixeqj7.ufs.sh/f/Jf9D0EOZjwR5rCZVAFh4ScXJ607ewstvO3u2GfKimQM8hUFz",
      "https://c5znixeqj7.ufs.sh/f/Jf9D0EOZjwR5fHu1UyMI5Ysuqm42aDRy7Ck6oSJEdZwlcijT",
      "https://c5znixeqj7.ufs.sh/f/Jf9D0EOZjwR5doKgVmzHRhzqcLXre3uUvYEFBdwjOx0Mms9i",
      "https://c5znixeqj7.ufs.sh/f/Jf9D0EOZjwR5tJssx9by54hVKZeMdvDuRrOqIAYwgsjzH8QT",
      "https://c5znixeqj7.ufs.sh/f/Jf9D0EOZjwR5aJOvu7U0Ap2qgE5QCOcWr04odyGViHUTfb1I",
      "https://c5znixeqj7.ufs.sh/f/Jf9D0EOZjwR5I1kNvET09ZJpjL1ey2wk6xtdQIm5SEDAzGTv",
    ],
    highlight: "Core Flows",
    highlightLabel: "Ticketing and event ops implemented",
  },
  {
    type: "Developer Tool",
    title: "Create MVC Server",
    desc: "CLI dev tool for scaffolding MVC API projects to help speed up development.",
    stack: ["TypeScript", "JavaScript", "Node.js"],
    images: [
      "https://vhl9cxhadz.ufs.sh/f/hXT2d4cc3r9aZLsTe3Ojl4q0UyFR5bL7e8HmEXhZ9rvig2N3",
      "https://vhl9cxhadz.ufs.sh/f/hXT2d4cc3r9aLWEDsMoJTk1cxfYX82ilWdQbCBnDVKaN35Mp",
      "https://vhl9cxhadz.ufs.sh/f/hXT2d4cc3r9aXg43XfCz9gnBtQ8msV0pcCTdKlLDIkUuYx5F",
      "https://vhl9cxhadz.ufs.sh/f/hXT2d4cc3r9amgh7rnjGYMhCBicSZLRK6ADU14keTHu2yrnP",
    ],
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
