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
    type: "Component Library",
    title: "TT UI",
    desc: "A component library designed to save time and effort for building complex UIs.",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS", "Shadcn/UI"],
    images: [
      "https://27weakknzu.ufs.sh/f/wmDx73gLbOVpDBnBj3LyMZLOArkomcvsb2KpE473SjuIW6l1",
    ],
    highlight: "shadcn/ui registry",
    highlightLabel:
      "Built around reusable components for speed and consistency",
    link: "https://ui.tibbstech.co.uk",
  },
  {
    type: "Data Manipulation",
    title: "JSON Transformer",
    desc: "Transform JSON data without using tokens and prompting agents to do tedious work.",
    stack: ["React", "Next.js", "TypeScript"],
    images: [
      "https://6ncn53suo3.ufs.sh/f/O2huFlpct4n5HijEJ78Iq9jBClJ6oDSOHmsF8QaYdtGAbhf5",
    ],
    highlight: "Data Transformation Tool",
    highlightLabel:
      "No more prompting agents to do tedious work - just transform your data",
    link: "https://json-formatter-web-one.vercel.app/",
  },
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
    date: "2025 - Present",
    role: "Full-Stack Developer",
    company: "SAPUK",
    desc: "Volunteered to rebuild the SAPUK website to improve performance, accessibility, and SEO. Includes a custom CMS for managing content amongst other features.",
  },
  {
    date: "Apr 2025 - May 2025",
    role: "Freelance Project Consultant",
    company: "Tech Returners",
    desc: "Created a full-stack web events platform for Tech Returners, similar to Ticketmaster, with a custom CMS for managing content amongst other features.",
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
