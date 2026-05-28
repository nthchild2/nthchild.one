import Link from "next/link";
import { projects, socialLinks } from "@/data/projects";

const highlights = [
  { value: "7+", label: "Years of Experience" },
  { value: "3", label: "Greenfield Products Shipped" },
  { value: "3", label: "Industries" },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      {/* ── Hero ── */}
      <section className="section-fade mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-balance max-w-3xl">
          Shipping mobile products{" "}
          <span className="gradient-text">from zero to scale.</span>
        </h1>

        <p className="text-lg lg:text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl leading-relaxed">
          Senior mobile engineer with 7+ years specializing in React Native and
          TypeScript. I architect, build, and ship cross-platform products across
          fintech, education, and consumer platforms.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://calendar.app.google/5k2gNrEZK8haq1nK9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg text-sm font-medium transition-all shadow-glow-sm hover:shadow-glow-md"
          >
            <svg
              className="w-4 h-4 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <span className="relative z-10">Schedule a call</span>
          </a>
          <a
            href="mailto:nthchild1@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all glass-card hover:shadow-lg"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="section-fade mb-16">
        <div className="grid grid-cols-3 gap-4">
          {highlights.map((stat) => (
            <div
              key={stat.label}
              className="glass-card text-center p-5 lg:p-6 rounded-xl group hover:shadow-glow-sm hover:scale-[1.02] transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-display font-bold gradient-text-static">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section className="section-fade mb-20">
        <h3 className="section-heading mb-8">About</h3>
        <div className="glass-card rounded-2xl p-6 lg:p-8 space-y-3">
          <p className="text-[hsl(var(--foreground))] leading-relaxed">
            I&apos;m a software engineer based in Mexico City with a passion
            for building polished, performant mobile experiences. Over the
            past 7+ years, I&apos;ve shipped products across fintech,
            education, and consumer platforms — from greenfield apps to
            scaling existing products past a million users.
          </p>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm">
            My core expertise is in React Native and TypeScript, but
            I&apos;m comfortable across the full mobile stack including
            native modules in Kotlin and Swift, automated testing with Jest
            and Detox, and CI/CD pipelines. I care deeply about code
            quality, accessibility, and shipping things that actually work.
          </p>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="section-fade mb-20 scroll-mt-24">
        <h3 className="section-heading mb-8">Experience</h3>
        <div className="space-y-0">
          {projects.map((job, i) => (
            <Link
              href={`/work/${job.slug}`}
              key={`${job.company}-${i}`}
              className="group flex items-start gap-4 py-5 border-b border-[hsl(var(--border))] last:border-b-0 -mx-4 px-4 rounded-lg transition-all duration-200 hover:bg-[hsl(var(--muted)/0.5)] hover:border-transparent"
            >
              {/* Timeline dot */}
              <div className="relative mt-2 shrink-0">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:shadow-glow-sm transition-shadow" />
                {/* Connecting line */}
                {i < projects.length - 1 && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-[calc(100%+1.25rem)] bg-[hsl(var(--border))] group-hover:bg-emerald-500/20 transition-colors" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h4 className="font-display font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {job.company}
                  </h4>
                  <span className="text-xs text-[hsl(var(--muted-foreground))] shrink-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-2">
                  {job.role}
                </p>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-2">
                  {job.summary}
                </p>
              </div>

              {/* Arrow */}
              <svg
                className="w-4 h-4 mt-1.5 text-[hsl(var(--muted-foreground))] opacity-0 group-hover:opacity-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all shrink-0 -translate-x-1 group-hover:translate-x-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="section-fade pt-12 mt-8">
        <div className="gradient-divider mb-8" />
        <div className="flex items-center justify-between">
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            &copy; {new Date().getFullYear()} Carlos Cortes
          </p>
          <div className="flex gap-1">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition-colors"
                aria-label={item.name}
              >
                {item.name === "GitHub" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                )}
                {item.name === "LinkedIn" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {item.name === "Email" && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
