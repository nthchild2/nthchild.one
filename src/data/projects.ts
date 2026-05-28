export type Project = {
  slug: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  image: string;
  gradient: string;
  aspect: "portrait" | "landscape";
  tags: string[];
};

export type SkillCategory = {
  category: string;
  color: string;
  items: string[];
};

export const projects: Project[] = [
  {
    slug: "nestle-purina",
    company: "Nestle Purina",
    role: "Software Engineer → Senior Software Engineer",
    period: "Jun 2022 — Present",
    location: "Remote · Mexico City",
    summary:
      "Building myPurina from the ground up — joined as a contractor to define the architecture and ship the MVP, then promoted to Senior Engineer to lead mobile development as the app scaled past 1 million users.",
    highlights: [
      "Contributed to the greenfield development of the myPurina mobile application, a core product within Purina's New Business Model initiative, designed as a long-term consumer ecosystem.",
      "Partnered closely with the Tech Lead to define application architecture, state management, and foundational engineering patterns for a React Native codebase.",
      "Built MVP versions of core user-facing features including Pet Profile, Pet Food Finder, and Feeding Guide, enabling early product validation.",
      "Designed and implemented the first version of the app's design system, enabling consistent UI and scalable feature development.",
      "Set up core infrastructure including environment configuration, React Navigation, internationalization (i18n-js), and build/release pipelines using Expo EAS.",
      "Implemented authentication and identity management using AWS Cognito and configured Apollo GraphQL Client for data-driven features.",
      "Played a key role in the evolution of myPurina from a small engineering team to a large, cross-functional organization with dedicated QA, backend, design, and product teams.",
      "Introduced and maintained automated testing strategies, including unit testing with Jest and ts-jest and end-to-end testing with Detox, improving release reliability.",
      "Led a major React Native upgrade (0.76 → 0.81), addressing breaking changes and ensuring production stability.",
      "Migrated and modernized native modules, including Java → Kotlin (Android) and Objective-C → Swift (iOS).",
      "Supported the growth phase of myPurina as it surpassed 1 million users, reaching tens of thousands of daily active users.",
      "Integrated with Axe Dev Tools like Axe Mobile Analyzer and Axe Dev Tools Linter to deliver a WCAG 2.5 compliant experience for screen reader users.",
      "Pioneered the integration of AI tools into the development cycle such as GitHub Copilot and Figma MCP.",
    ],
    image: "/images/work/nerdery/mypurina-screens.webp",
    gradient: "from-red-500/20 to-orange-500/20",
    aspect: "landscape",
    tags: [
      "React Native",
      "TypeScript",
      "Apollo GraphQL",
      "Jest",
      "Detox",
      "Swift",
      "Kotlin",
    ],
  },
  {
    slug: "dreambox-learning",
    company: "DreamBox Learning",
    role: "Software Engineer",
    period: "Dec 2021 — Jun 2022",
    location: "Remote · Mexico City",
    summary:
      "Worked on DreamBox Math, an adaptive, game-based mathematics learning platform operated by DreamBox Learning (part of Discovery Education), used by schools across the United States.",
    highlights: [
      "Worked on DreamBox Math, an adaptive, game-based mathematics learning platform operated by DreamBox Learning, part of Discovery Education, and used by schools across the United States.",
      "Implemented a replay feature enabling educators to review student gameplay sessions and identify learning challenges.",
      "Developed systems allowing teachers to visualize student problem-solving paths for targeted classroom intervention.",
      "Built features using TypeScript and a custom in-house game engine built on CreateJS.",
      "Applied object-oriented programming (OOP) principles to design reusable and maintainable gameplay systems.",
    ],
    image: "/images/work/encora/dreambox-002.png",
    gradient: "from-green-500/20 to-emerald-500/20",
    aspect: "landscape",
    tags: ["TypeScript", "CreateJS", "Game Engine", "OOP"],
  },
  {
    slug: "banco-pagatodo",
    company: "Banco PagaTodo",
    role: "Mobile Engineer",
    period: "Dec 2020 — Dec 2021",
    location: "Mexico City, Mexico",
    summary:
      "Greenfield development of Obtén Más, a consumer-facing digital wallet application within Banco PagaTodo's financial services ecosystem.",
    highlights: [
      "Worked on the greenfield development of Obtén Más, a consumer-facing digital wallet application within Banco PagaTodo's financial services ecosystem.",
      "Built and maintained mobile features using React Native and TypeScript, with Redux for scalable state management.",
      "Implemented core wallet functionality supporting financial transactions, balance visualization, and account flows.",
      "Collaborated with design, QA, backend, and product teams to deliver reliable, user-friendly mobile experiences.",
      "Participated in structured Agile development workflows, contributing to sprint planning and incremental delivery.",
    ],
    image: "/images/work/pagatodo/obtenmas-appstore-1.png",
    gradient: "from-blue-500/20 to-indigo-500/20",
    aspect: "portrait",
    tags: ["React Native", "Redux", "TypeScript"],
  },
  {
    slug: "yofio",
    company: "YoFio",
    role: "Mobile Application Developer",
    period: "Jan 2020 — Dec 2020",
    location: "Mexico City, Mexico",
    summary:
      "Built consumer and merchant mobile apps for an early-stage fintech startup delivering digital credit and lending solutions. Owned the full mobile lifecycle from native module development to production releases.",
    highlights: [
      "Built and maintained consumer-facing mobile applications for an early-stage fintech startup delivering digital credit and lending solutions.",
      "Developed the primary customer mobile app using React Native and TypeScript, enabling loan requests, repayment flows, account visibility, and payment tracking.",
      "Designed and implemented a merchant-facing mobile application, sharing a common core codebase and reusable UI components to support multiple user roles efficiently.",
      "Built a web-based back-office administration panel using React, enabling internal teams to manage user properties, transactions, and operational workflows.",
      "Established and maintained a shared front-end architecture to support multiple applications while minimizing duplication and improving maintainability.",
      "Implemented and maintained native Android modules using Java and Kotlin to access device-level capabilities required for risk analysis and credit modeling.",
      "Integrated third-party platforms including Firebase, Twilio, Branch, Mixpanel, and Segment to support authentication, messaging, deep linking, analytics, and user behavior tracking.",
      "Implemented secure data collection and transmission workflows to a machine-learning backend hosted on Google Cloud Platform (GCP).",
      "Owned QA coordination, release preparation, and production deployments, managing submissions through App Store Connect and Google Play Console in a fast-paced startup environment.",
    ],
    image: "/images/work/paloit/yofio-001.png",
    gradient: "from-violet-500/20 to-purple-500/20",
    aspect: "landscape",
    tags: ["React Native", "Java", "Kotlin", "Firebase", "React", "GCP"],
  },
  {
    slug: "frik-in",
    company: "Frik-in",
    role: "Full Stack Engineer",
    period: "Jan 2019 — Dec 2019",
    location: "Mexico City, Mexico",
    summary:
      "Joined an early-stage startup building Frik-in, a mobile and web platform for content and community engagement. Worked across mobile app, web application, and CMS systems.",
    highlights: [
      "Joined an early-stage startup building Frik-in, a mobile and web platform for content and community engagement.",
      "Worked across mobile app, web application, and CMS systems, contributing to a unified product ecosystem.",
      "Helped build the mobile application using React Native, supporting dynamic content delivery.",
      "Contributed to the web application using React and Next.js, adopting serverless and static rendering patterns.",
      "Developed WordPress-based content panels and implemented a headless REST API powering mobile and web clients.",
      "Applied Redux and client–server architecture principles to manage state and data flow.",
      "Integrated backend services using PHP, JavaScript, HTTP APIs, and Firebase.",
      "Rapidly ramped up on a modern full-stack ecosystem, applying engineering fundamentals to real-world product challenges.",
    ],
    image: "/images/work/presicionqa/frikin-creadores.webp",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    aspect: "portrait",
    tags: [
      "React Native",
      "Next.js",
      "WordPress",
      "PHP",
      "Redux",
      "Firebase",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  { category: "Mobile", color: "cyan", items: ["React Native CLI", "Expo"] },
  {
    category: "Languages",
    color: "violet",
    items: [
      "TypeScript",
      "JavaScript",
      "Swift",
      "Kotlin",
      "Java",
      "Objective-C",
    ],
  },
  {
    category: "State & Data",
    color: "amber",
    items: ["Redux", "Apollo GraphQL"],
  },
  { category: "Web", color: "blue", items: ["React", "Next.js", "WordPress"] },
  {
    category: "CI/CD & Release",
    color: "orange",
    items: [
      "Expo EAS",
      "GitHub Actions",
      "App Store Connect",
      "Google Play Console",
    ],
  },
  { category: "Testing", color: "lime", items: ["Jest", "Detox"] },
  {
    category: "Integrations",
    color: "rose",
    items: ["Firebase", "Twilio", "Branch", "Mixpanel", "Segment"],
  },
  {
    category: "AI Tools",
    color: "fuchsia",
    items: ["Claude Code", "GitHub Copilot", "Figma MCP", "Jira MCP"],
  },
];

export const education = [
  {
    school: "School of Engineering, UNAM",
    degree: "Computer Engineering",
    period: "2014 — 2018",
  },
  {
    school: "SODVI",
    degree: "Game Development — Unity Engine & C#",
    period: "2018 — 2020",
  },
];

/** Social links used in navbar and footer */
export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/nthchild1",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nthchild1",
  },
  {
    name: "Email",
    href: "mailto:nthchild1@gmail.com",
  },
];

/** Navigation items */
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/#experience" },
];
