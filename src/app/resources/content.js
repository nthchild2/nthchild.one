const person = {
  firstName: "Carlos",
  lastName: "Cortes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Mexico_City", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nthchild1",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nthchild1",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:nthchild1@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Carlos, a Senior Software Engineer crafting scalable mobile and web
      experiences. I specialize in mobile app development
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/5k2gNrEZK8haq1nK9",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Carlos is a Mexico City-based Senior Software Engineer specializing in
        React Native and JavaScript frameworks. He builds scalable,
        high-performance applications across fintech and e-commerce, leading
        teams and optimizing user experiences with a focus on maintainability
        and innovation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "The Nerdery — myPurina",
        timeframe: "2022 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            {" "}
            Spearheaded the development of key features for myPurina, including
            Pet Profiles, Pet Food Finder, Feeding Guide, and the Rewards
            Program.{" "}
          </>,
          <>
            {" "}
            Integrated third-party services such as AWS Cognito, Appsflyer,
            Google Analytics, Firebase, LaunchDarkly, Braze, and Segment.{" "}
          </>,
          <>
            {" "}
            Set up Jest and Detox for testing, integrating them with Bitbucket
            pipelines for automated tests and coverage reports.{" "}
          </>,
        ],
        images: [
          {
            src: "/images/work/nerdery/mypurina-001.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/nerdery/mypurina-003.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Encora — Dreambox Learning",
        timeframe: "2021 - 2022",
        role: "Software Engineer",
        achievements: [
          <>
            {" "}
            Implemented the replay feature in Dreambox's educational game suite,
            allowing teachers to track student gameplay and identify learning
            challenges.{" "}
          </>,
          <>
            {" "}
            Utilized TypeScript and CreateJS to develop lessons running on
            Dreambox's in-house game engine.{" "}
          </>,
        ],
        images: [
          {
            src: "/images/work/encora/dreambox-001.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/encora/dreambox-002.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PagaTodo — ObtenMas",
        timeframe: "2021",
        role: "Mobile Software Engineer",
        achievements: [
          <>
            {" "}
            Contributed to the development of a digital wallet app for financial
            services, supporting bill payments, money transfers, and mobile
            top-ups.{" "}
          </>,
          <>
            {" "}
            Built the app using React Native and TypeScript with Redux for state
            management.{" "}
          </>,
          <>
            {" "}
            Transformed Figma designs into a functional application in
            collaboration with UX and design teams.{" "}
          </>,
        ],
        images: [
          {
            src: "/images/work/pagatodo/obtenmas-001.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/pagatodo/obtenmas-002.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PALO IT — YoFio",
        timeframe: "2020",
        role: "Software Engineer",
        achievements: [
          <>
            {" "}
            Developed mobile applications for a fintech startup providing credit
            solutions.{" "}
          </>,
          <>
            {" "}
            Used React Native with Redux for state management and integrated
            native modules in Java and Kotlin.{" "}
          </>,
          <>
            {" "}
            Contributed to a machine learning algorithm that generated credit
            scores based on user activity.{" "}
          </>,
        ],
        images: [
          {
            src: "/images/work/paloit/yofio-001.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Precision QA — Frik-in",
        timeframe: "2019 - 2020",
        role: "Full Stack Software Engineer",
        achievements: [
          <>
            {" "}
            Built and maintained a multimedia app cataloging events and
            locations for the Mexican geek community.{" "}
          </>,
          <>
            {" "}
            Developed front-end and back-end features using React, PHP, and
            WordPress’ REST API.{" "}
          </>,
        ],
        images: [
          {
            src: "/images/work/presicionqa/frikin-001.png",
            alt: "Once UI Project",
            width: 73 / 3,
            height: 48 / 3,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "National Autonomous University of Mexico",
        description: <>Computer Engineering – Software Engineering</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work };
