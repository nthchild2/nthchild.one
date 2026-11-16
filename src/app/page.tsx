import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Badge, CALL_URL, Icon } from "@/components/kit";
import { initial, PostRow, RoleRow } from "@/components/Rows";
import { projects, socialLinks } from "@/data/projects";
import { getPosts } from "@/lib/writing";

const highlights = [
  { value: "9+", label: "Years of Experience", icon: "clock", role: "var(--years)" },
  { value: "3", label: "Greenfield Products", icon: "play", role: "var(--launches)" },
  { value: "4M+", label: "Users Reached", icon: "user", role: "var(--reach)" },
] as const;

const socialIcons = {
  GitHub: <FaGithub aria-hidden="true" />,
  LinkedIn: <FaLinkedin aria-hidden="true" />,
  Email: <Icon name="mail" />,
} as Record<string, JSX.Element>;

export default function Home() {
  const posts = getPosts().slice(0, 3);
  const now = projects[0];

  return (
    <main className="page-col">
      {/* ── Hero ── */}
      <section className="hero">
        <Image className="avatar" src="/images/carlos.jpg" alt="Carlos Cortes" width={112} height={112} priority />
        <span className="pill ok avail">
          <span className="dot" />
          Available for new projects
        </span>
        <h1>
          Shipping mobile products <span>from zero to scale.</span>
        </h1>
        <p>
          Senior React Native engineer with 9+ years specializing in TypeScript and mobile architecture. I architect,
          build, and ship cross-platform products across fintech, education, and consumer platforms.
        </p>
        <div className="toolbar">
          <a className="button" href={CALL_URL} target="_blank" rel="noopener noreferrer">
            <Icon name="visit" />
            Schedule a call
          </a>
          <a className="button quiet" href="mailto:nthchild1@gmail.com">
            Get in touch
          </a>
        </div>
      </section>

      {/* ── Now ── */}
      <Link className="surface now" href={`/work/${now.slug}`}>
        <div className="surface-head">
          <h3>Now</h3>
          <span>{now.period}</span>
        </div>
        <div className="lead">
          <span className="mono lg">{initial(now.company)}</span>
          <div>
            <b>{now.company}</b>
            <span>
              {now.role} · {now.location}
            </span>
          </div>
        </div>
        <p>{now.summary}</p>
        <div className="factchips">
          {now.tags.map((t) => (
            <span key={t} className="factchip">
              {t}
            </span>
          ))}
        </div>
        {now.gallery && (
          <div className="shots">
            {now.gallery.map((g) => (
              <Image key={g.src} src={g.src} alt={g.alt} width={g.width} height={g.height} sizes="70px" />
            ))}
          </div>
        )}
      </Link>

      {/* ── Highlights ── */}
      <section className="figures" aria-label="Highlights">
        {highlights.map((h) => (
          <div key={h.label} className="surface stat" style={{ "--c": h.role } as CSSProperties}>
            <span className="caption">
              <Badge icon={h.icon} color={h.role} />
              {h.label}
            </span>
            <div className="figure">{h.value}</div>
          </div>
        ))}
      </section>

      {/* ── About ── */}
      <section className="block">
        <h3>About</h3>
        <div className="surface about">
          <p>
            I&apos;m a software engineer based in Mexico City with a passion for building polished, performant mobile
            experiences. Over the past 9+ years, I&apos;ve shipped products across fintech, education, and consumer
            platforms — from greenfield apps to scaling existing products past 4 million users.
          </p>
          <p>
            My core expertise is in React Native and TypeScript, but I&apos;m comfortable across the full mobile stack
            including native modules in Kotlin and Swift, automated testing with Jest and Detox, and CI/CD pipelines. I
            care deeply about code quality, accessibility, and shipping things that actually work.
          </p>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="block">
        <h3>Experience</h3>
        <div className="surface">
          <div className="stack">
            {projects.map((p) => (
              <RoleRow key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Writing ── */}
      <section id="writing" className="block">
        <div className="block-head">
          <h3>Writing</h3>
          <Link href="/writing">All writing →</Link>
        </div>
        <div className="surface">
          <div className="stack">
            {posts.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Carlos Cortes</p>
        <div>
          {socialLinks.map((item) => (
            <a
              key={item.name}
              className="topnav-icon"
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              {socialIcons[item.name]}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
