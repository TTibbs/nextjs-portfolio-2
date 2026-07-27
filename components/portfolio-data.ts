type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};
export const navLinks: NavLink[] = [
  { label: "tt ui", href: "https://ui.tibbstech.co.uk", external: true },
  { label: "tools", href: "https://tools.tibbstech.co.uk", external: true },
  { label: "blog", href: "/posts" },
];

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
    desc: "A component library I use to stop rebuilding the same interface pieces from scratch.",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS", "Shadcn/UI"],
    images: [
      "https://27weakknzu.ufs.sh/f/wmDx73gLbOVpDBnBj3LyMZLOArkomcvsb2KpE473SjuIW6l1",
      "https://27weakknzu.ufs.sh/f/wmDx73gLbOVpi5w5KzCOZgFV6Ba0vnSu3wEM84UYmPp2cQkA",
    ],
    highlight: "shadcn/ui registry",
    highlightLabel: "Reusable components for quicker, more consistent builds",
    link: "https://ui.tibbstech.co.uk",
  },
  {
    type: "Data Manipulation",
    title: "JSON Transformer",
    desc: "A small tool for reshaping JSON when the job needs deterministic output, not another prompt.",
    stack: ["React", "Next.js", "TypeScript"],
    images: [
      "https://6ncn53suo3.ufs.sh/f/O2huFlpct4n5HijEJ78Iq9jBClJ6oDSOHmsF8QaYdtGAbhf5",
    ],
    highlight: "Data cleanup",
    highlightLabel: "Transforms structured data without burning model tokens",
    link: "https://json-formatter-web-one.vercel.app/",
  },
  {
    type: "Website Rebuild",
    title: "SAPUK",
    desc: "A volunteer rebuild for a mental health charity, focused on clearer content, better accessibility, and easier updates.",
    stack: ["Next.js", "TailwindCSS", "TypeScript", "React", "Shadcn/UI"],
    images: [
      "https://bi4a1aeb4i.ufs.sh/f/akEZKbpzclMNNDgSMzJhPBY2x6AW35zyICHElrVJZeaKw0c9",
      "https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4KuNTgnRpT6F1HCrQWNasAUhpqJEw9Smc4BfnP",
      "https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4Kl6yLMpNNeW2UZpcL75iwaCrfJQS9skAyK3j8",
      "https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4KGec3uCf4mdb5SFkuzxZWliAXh0saKTE73wvR",
      "https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4KYdliMD73N8OzhDlkbxrMXTdqEBPagV5f7i60",
    ],
    highlight: "Website Rebuild",
    highlightLabel: "Performance, accessibility, SEO, and content editing",
    link: "https://suicideapuk.co.uk",
  },
  {
    type: "Developer Tool",
    title: "Create MVC Server",
    desc: "A CLI for scaffolding MVC API projects so setup decisions are repeatable instead of copied from memory.",
    stack: ["TypeScript", "JavaScript", "Node.js"],
    images: [
      "https://vhl9cxhadz.ufs.sh/f/hXT2d4cc3r9aZLsTe3Ojl4q0UyFR5bL7e8HmEXhZ9rvig2N3",
      "https://vhl9cxhadz.ufs.sh/f/hXT2d4cc3r9aLWEDsMoJTk1cxfYX82ilWdQbCBnDVKaN35Mp",
      "https://vhl9cxhadz.ufs.sh/f/hXT2d4cc3r9aXg43XfCz9gnBtQ8msV0pcCTdKlLDIkUuYx5F",
      "https://vhl9cxhadz.ufs.sh/f/hXT2d4cc3r9amgh7rnjGYMhCBicSZLRK6ADU14keTHu2yrnP",
    ],
    highlight: "CLI Automation",
    highlightLabel: "Repeatable API setup with database options",
    link: "https://create-mvc-server.vercel.app",
  },
  {
    type: "Task Management",
    title: "Task Breakdown API",
    desc: "An API-first product for turning loose tasks into structured steps that other tools can use.",
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
    highlightLabel: "Reusable endpoints for structured task data",
    link: "https://task-breakdown-api.vercel.app",
  },
  {
    type: "Event Management",
    title: "Events Platform",
    desc: "A full-stack events platform covering listings, ticket flows, and admin content management.",
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
];

export const aboutCopy = {
  heading: ["I like the", "messy middle.", "That is the job."],
  paragraphs: [
    "I am a full-stack developer with 5+ years of experience turning vague requirements into working, maintainable software.",
    "The part I enjoy most is the messy middle: shaping the data, tightening the interface, finding the awkward edge case, and explaining the trade-offs clearly enough that a team can move.",
    "I am useful when something needs to be thought through, built properly, and finished without a lot of theatre.",
  ],
  cta: "Start a conversation",
};

type Skill = {
  category: string;
  detail: string;
  skills: string[];
};
export const skills: Skill[] = [
  {
    category: "Tools I reach for",
    detail:
      "React, typed interfaces, and UI systems that are easy to keep extending.",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    category: "Systems I enjoy",
    detail:
      "APIs, database-backed products, and the glue between product ideas and real workflows.",
    skills: ["Node.js", "Express", "PostgreSQL", "REST"],
  },
  {
    category: "How I work",
    detail:
      "Small decisions written down, code reviewed honestly, and tests where they reduce risk.",
    skills: ["TDD", "System Design", "Agile / Scrum", "Code Review"],
  },
];

type WorkingNote = {
  title: string;
  text: string;
};
export const workingNotes: WorkingNote[] = [
  {
    title: "I ask early",
    text: "The cheapest fixes usually happen before code, when the shape of the problem is still flexible.",
  },
  {
    title: "I ship in slices",
    text: "I prefer visible progress, tight feedback loops, and fewer surprise rewrites at the end.",
  },
  {
    title: "I explain the why",
    text: "Good engineering work should be understandable to the people depending on it.",
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
    name: "Product builds",
    desc: "For new tools, dashboards, portals, and internal apps where the frontend, backend, and database need to fit together.",
  },
  {
    num: "02",
    name: "API design and integration",
    desc: "For REST APIs, auth, payments, and third-party services that need clear contracts and predictable failure modes.",
  },
  {
    num: "03",
    name: "Performance and cleanup",
    desc: "For slow pages, awkward data flows, brittle components, or codebases that need calmer foundations.",
  },
  {
    num: "04",
    name: "Technical sounding board",
    desc: "For architecture reviews, stack decisions, and practical second opinions before a build gets expensive.",
  },
];

type EngagementType = {
  plan: string;
  detail: string;
};
export const engagementTypes: EngagementType[] = [
  {
    plan: "Scoped project",
    detail: "A defined piece of work with clear outcomes before build starts.",
  },
  {
    plan: "Hourly support",
    detail: "£60-£100 / hour for focused help or reviews.",
  },
  {
    plan: "Day rate",
    detail: "£400-£750 / day for deeper build or cleanup work.",
  },
  {
    plan: "Ongoing retainer",
    detail: "A steady slot for support, iteration, and maintenance.",
  },
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
    desc: "Rebuilding the public website for a mental health charity, with a custom CMS so content can be updated without developer hand-holding.",
  },
  {
    date: "Apr 2025 - May 2025",
    role: "Freelance Project Consultant",
    company: "Tech Returners",
    desc: "Delivered a full-stack events platform with ticketing-style flows and admin tools for managing event content.",
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

export const contactCopy = {
  heading: ["Tell me what", "you are building."],
  intro:
    "If there is a role, product, or messy technical problem where I might be useful, send me the shape of it. I will reply with a thoughtful next step.",
  responseNote: "I usually reply within 24 hours.",
};
