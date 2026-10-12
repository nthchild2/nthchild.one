export type ProjectLink = {
  kind: "ios" | "android" | "web";
  label: string;
  href: string;
};

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  slug: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  gallery?: GalleryImage[];
  gradient: string;
  tags: string[];
  links?: ProjectLink[];
};

export type SkillCategory = {
  category: string;
  color: string;
  items: string[];
};

export const projects: Project[] = [
  {
    slug: "nestle-purina",
    company: "Nestlé Purina",
    role: "Software Engineer → Senior Software Engineer",
    period: "Jun 2022 — Present",
    location: "Remote · Mexico City",
    summary:
      "Joined myPurina as a contractor to help define its architecture, then moved into a full-time Senior Engineer role in April 2024, leading mobile work as the app grew from a small team to a large cross-functional organization and past 4 million users.",
    highlights: [
      "Partnered closely with the Tech Lead to define application architecture, state management, and foundational engineering patterns.",
      "Set up core infrastructure including environment configuration (dotenv), React Navigation, internationalization (i18n), and build/release pipelines using Expo EAS.",
      "Implemented authentication and identity management using AWS Cognito.",
      "Integrated Firebase (remote config, Crashlytics) and Google Analytics (GTM) services for analytics and platform tooling.",
      "Contributed to the greenfield development and subsequent growth of the myPurina mobile application, helping scale the platform from a small engineering team to a large cross-functional organization supporting over 4 million users.",
      "Introduced and maintained automated testing strategies, including unit testing with Jest and React Native Testing Library, running on Bitbucket pipelines and subsequently on GitHub Actions, improving release reliability.",
      "Led a major React Native upgrade (0.76 → 0.81), addressing breaking changes and ensuring production stability.",
      "Migrated and modernized native modules, including Java → Kotlin (Android) and Objective-C → Swift (iOS).",
      "Pioneered the adoption of AI-assisted development tools, including GitHub Copilot and Figma MCP, and participated in the pilot rollout of the company's agentic AI-driven software development lifecycle (AIDLC) framework.",
      "Integrated Axe Dev Tools (Axe Mobile Analyzer and Axe Dev Tools Linter) to deliver a WCAG 2.2 compliant experience for screen reader users.",
      "Worked extensively with stakeholders and designers using Jira and Figma agile workflows.",
    ],
    gallery: [
      {
        src: "/images/work/nerdery/mypurina-002.png",
        width: 1020,
        height: 1813,
        alt: "myPurina screenshot 2",
      },
      {
        src: "/images/work/nerdery/mypurina-appstore-2.jpg",
        width: 600,
        height: 1298,
        alt: "myPurina screenshot 4",
      },
      {
        src: "/images/work/nerdery/mypurina-appstore-3.jpg",
        width: 600,
        height: 1298,
        alt: "myPurina screenshot 5",
      },
      {
        src: "/images/work/nerdery/mypurina-appstore-4.jpg",
        width: 600,
        height: 1298,
        alt: "myPurina screenshot 6",
      },
    ],
    gradient: "from-red-500/20 to-orange-500/20",
    tags: [
      "React Native",
      "TypeScript",
      "Expo EAS",
      "AWS Cognito",
      "Jest",
      "Swift",
      "Kotlin",
      "AIDLC",
    ],
    links: [
      {
        kind: "ios",
        label: "App Store",
        href: "https://apps.apple.com/us/app/mypurina-pet-rewards-care/id1658539065",
      },
      {
        kind: "android",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.nestle.us.purina.fellowshipapp",
      },
    ],
  },
  {
    slug: "goodlook",
    company: "GoodLook",
    role: "Mobile and Web Tech Lead (contract)",
    period: "Mar 2022 — Aug 2022",
    location: "Remote · San Pedro Garza García",
    summary:
      "Tech lead for the MVP of GoodLook, a beauty services marketplace, coordinating delivery across React and React Native.",
    highlights: [
      "Served as Web & Mobile Tech Lead during the MVP development of GoodLook, a beauty services marketplace, coordinating technical delivery across React and React Native.",
      "Designed the Redux state management strategy for the app.",
      "Led technical planning, backlog grooming, and feature estimation with product stakeholders, designers, and backend engineers.",
      "Mentored junior developers through architecture discussions, code reviews, and day-to-day technical guidance, enabling them to independently deliver production features.",
    ],
    gradient: "from-sky-500/20 to-cyan-500/20",
    tags: ["React Native", "React", "Redux", "Tech Lead"],
    links: [
      {
        kind: "web",
        label: "goodlookcorp.com",
        href: "https://goodlookcorp.com/",
      },
    ],
  },
  {
    slug: "dreambox-learning",
    company: "DreamBox Learning",
    role: "Software Engineer",
    period: "Dec 2021 — Jun 2022",
    location: "Remote · Mexico City",
    summary:
      "Worked on DreamBox Math, an adaptive learning platform used by schools across the U.S., including a replay system for reviewing student sessions.",
    highlights: [
      "Developed features for DreamBox Math, an adaptive learning platform used by schools across the U.S.",
      "Built a replay system that helped educators review student sessions and identify learning challenges through gameplay analysis.",
      "Built features using TypeScript and a custom in-house game engine built on CreateJS.",
    ],
    gallery: [
      {
        src: "/images/work/encora/dreambox-002.png",
        width: 2016,
        height: 1520,
        alt: "DreamBox Math screenshot 1",
      },
      {
        src: "/images/work/encora/dreambox-001.png",
        width: 981,
        height: 644,
        alt: "DreamBox Math screenshot 2",
      },
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    tags: ["TypeScript", "CreateJS", "Game Engine", "OOP"],
    links: [
      { kind: "web", label: "dreambox.com", href: "https://www.dreambox.com/" },
    ],
  },
  {
    slug: "banco-pagatodo",
    company: "Banco PagaTodo",
    role: "Mobile Engineer",
    period: "Dec 2020 — Dec 2021",
    location: "Mexico City, Mexico",
    summary:
      "Greenfield development of Obtén Más, Banco PagaTodo's digital wallet.",
    highlights: [
      "Contributed to the greenfield development of Obtén Más, Banco PagaTodo's digital wallet, building React Native features with TypeScript and Redux for account management, balance visualization, and financial transactions.",
      "Collaborated closely with design, QA, backend, and product teams in an Agile environment, contributing to sprint planning and delivering reliable, user-focused mobile features.",
    ],
    gallery: [
      {
        src: "/images/work/pagatodo/obtenmas-appstore-1.png",
        width: 600,
        height: 1067,
        alt: "Obtén Más screenshot 1",
      },
      {
        src: "/images/work/pagatodo/obtenmas-appstore-2.png",
        width: 600,
        height: 1067,
        alt: "Obtén Más screenshot 4",
      },
      {
        src: "/images/work/pagatodo/obtenmas-appstore-3.png",
        width: 600,
        height: 1067,
        alt: "Obtén Más screenshot 5",
      },
    ],
    gradient: "from-blue-500/20 to-indigo-500/20",
    tags: ["React Native", "Redux", "TypeScript"],
    links: [
      {
        kind: "ios",
        label: "App Store",
        href: "https://apps.apple.com/mx/app/id1527432051",
      },
      {
        kind: "android",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.pagatodomobile.obtenmas",
      },
    ],
  },
  {
    slug: "yofio",
    company: "YoFio",
    role: "Full Stack Engineer",
    period: "Apr 2020 — Dec 2020",
    location: "Mexico City, Mexico",
    summary:
      "Built consumer and merchant React Native apps for an early-stage fintech startup, and owned QA coordination and production releases.",
    highlights: [
      "Built and maintained consumer and merchant React Native applications for an early-stage fintech startup, implementing digital lending features including loan requests, repayment flows, account management, and payment tracking.",
      "Implemented and maintained native Android modules using Java and Kotlin to access device-level capabilities required for risk analysis and credit modeling.",
      "Integrated third-party platforms including Firebase, Twilio, Branch, Mixpanel, and Segment to support authentication, messaging, deep linking, analytics, and user behavior tracking.",
      "Supported the backend developer in building and maintaining NestJS services, contributing to REST API endpoints, request validation, and business logic for lending and account management features.",
      "Owned QA coordination, release preparation, and production deployments, managing submissions through App Store Connect and Google Play Console in a fast-paced startup environment.",
    ],
    gallery: [
      {
        src: "/images/work/paloit/yofio-001.png",
        width: 1024,
        height: 1024,
        alt: "YoFio screenshot 1",
      },
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
    tags: ["React Native", "Java", "Kotlin", "NestJS", "Firebase"],
  },
  {
    slug: "frik-in",
    company: "Frik-in",
    role: "Full Stack Engineer",
    period: "Jan 2019 — Mar 2020",
    location: "Mexico City, Mexico",
    summary:
      "Early-stage startup building Frik-in, a content and community platform spanning mobile, web, and CMS applications.",
    highlights: [
      "Joined an early-stage startup building Frik-in, a content and community platform spanning mobile, web, and CMS applications.",
      "Worked across the full stack, developing the React Native mobile app, the React/Next.js web application, and a headless WordPress CMS with REST APIs powering both clients.",
      "Integrated backend services using PHP, Firebase, and HTTP APIs while applying Redux and client-server architecture principles to build a cohesive, scalable product ecosystem.",
    ],
    gallery: [
      {
        src: "/images/work/presicionqa/frikin-creadores.webp",
        width: 1080,
        height: 2178,
        alt: "Frik-in screenshot 1",
      },
      {
        src: "/images/work/presicionqa/frikin-appstore-1.jpg",
        width: 600,
        height: 1067,
        alt: "Frik-in screenshot 2",
      },
      {
        src: "/images/work/presicionqa/frikin-appstore-2.jpg",
        width: 600,
        height: 1067,
        alt: "Frik-in screenshot 3",
      },
      {
        src: "/images/work/presicionqa/frikin-appstore-3.jpg",
        width: 600,
        height: 1067,
        alt: "Frik-in screenshot 4",
      },
    ],
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    tags: ["React Native", "Next.js", "WordPress", "PHP", "Redux", "Firebase"],
    links: [
      {
        kind: "android",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.frik_in",
      },
    ],
  },
  {
    slug: "radar-magazine",
    company: "Radar Magazine",
    role: "Co-Founder & WordPress Developer",
    period: "2017 — 2018",
    location: "Mexico City, Mexico",
    summary:
      "Co-founded a digital media outlet and led the end-to-end technical implementation of its WordPress platform.",
    highlights: [
      "Co-founded a digital media outlet, leading the end-to-end technical implementation of a WordPress platform, including infrastructure, site customization, SEO optimization, and publishing workflows in collaboration with a team of editors and writers.",
    ],
    gradient: "from-slate-500/20 to-zinc-500/20",
    tags: ["WordPress", "SEO", "Infrastructure"],
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
  {
    category: "Web",
    color: "blue",
    items: ["React", "Next.js", "WordPress (headless)", "HTML", "CSS"],
  },
  {
    category: "Backend",
    color: "emerald",
    items: [
      "PHP (WordPress REST API)",
      "Node",
      "NestJS",
      "Supabase",
      "Firestore",
    ],
  },
  {
    category: "CI/CD & Release",
    color: "orange",
    items: [
      "Expo EAS",
      "Bitbucket pipelines",
      "GitHub Actions",
      "App Store Connect",
      "Google Play Console",
    ],
  },
  { category: "Testing & Quality", color: "lime", items: ["Jest", "Detox"] },
  {
    category: "Observability & Analytics",
    color: "cyan",
    items: ["Firebase Crashlytics", "Google Analytics tags", "New Relic"],
  },
  {
    category: "Integrations",
    color: "rose",
    items: [
      "Twilio",
      "Branch",
      "Mixpanel",
      "Segment",
      "AppsFlyer",
      "LaunchDarkly",
      "Auth0",
    ],
  },
  {
    category: "AI",
    color: "fuchsia",
    items: [
      "Jira MCP",
      "Figma MCP",
      "Context engineering",
      "AIDLC",
      "Claude Code",
      "Open Claw agents",
    ],
  },
];

export const education = [
  {
    school: "School of Engineering, UNAM",
    degree: "Computer Engineering",
    period: "Aug 2014 — Dec 2018",
  },
];

export const languages = [
  { name: "Spanish", level: "Native speaker" },
  { name: "English", level: "Highly proficient" },
];

/** Social links used in navbar and footer */
export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/nthchild2",
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
