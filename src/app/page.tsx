import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge, CALL_URL, Icon, PageHead } from "@/components/kit";
import { initial, PostRow, RoleRow } from "@/components/Rows";
import { projects } from "@/data/projects";
import { getPosts } from "@/lib/writing";

const highlights = [
  { value: "9+", label: "Years of experience", icon: "clock", role: "var(--years)" },
  { value: "3", label: "Greenfield products", icon: "play", role: "var(--launches)" },
  { value: "4M+", label: "Users reached", icon: "user", role: "var(--reach)" },
] as const;

export default function Home() {
  const posts = getPosts().slice(0, 3);
  const now = projects[0];

  return (
    <>
      <PageHead title="Carlos Cortes" sub="Senior React Native engineer · Mexico City" />

      <div className="cols-hero">
        <section className="surface hero">
          <div className="hero-top">
            <Image className="avatar" src="/images/carlos.jpg" alt="Carlos Cortes" width={72} height={72} priority />
            <span className="pill ok avail">
              <span className="dot" />
              Available for new projects
            </span>
          </div>
          <h2>
            Shipping mobile products <span>from zero to scale.</span>
          </h2>
          <p>
            Senior React Native engineer with 9+ years specializing in TypeScript and mobile architecture. I architect,
            build, and ship cross-platform products across fintech, education, and consumer platforms.
          </p>
          <p>
            My core expertise is in React Native and TypeScript, but I&apos;m comfortable across the full mobile stack
            including native modules in Kotlin and Swift, automated testing with Jest and Detox, and CI/CD pipelines. I
            care deeply about code quality, accessibility, and shipping things that actually work.
          </p>
          <div className="toolbar">
            <a className="button" href={CALL_URL} target="_blank" rel="noopener noreferrer">
              <Icon name="visit" />
              Schedule a call
            </a>
            <a className="button quiet" href="mailto:nthchild1@gmail.com">
              <Icon name="mail" />
              Get in touch
            </a>
          </div>
        </section>

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
      </div>

      <div className="figures">
        {highlights.map((h) => (
          <div key={h.label} className="surface stat" style={{ "--c": h.role } as CSSProperties}>
            <span className="caption">
              <Badge icon={h.icon} color={h.role} />
              {h.label}
            </span>
            <div className="figure">{h.value}</div>
          </div>
        ))}
      </div>

      <div className="grid split">
        <section className="surface">
          <div className="surface-head">
            <h2>Experience</h2>
            <Link href="/experience">All {projects.length} roles →</Link>
          </div>
          <div className="stack">
            {projects.slice(0, 4).map((p) => (
              <RoleRow key={p.slug} project={p} />
            ))}
          </div>
        </section>
        <section className="surface">
          <div className="surface-head">
            <h2>Writing</h2>
            <Link href="/writing">All writing →</Link>
          </div>
          <div className="stack">
            {posts.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
