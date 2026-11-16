import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Career from "@/components/Career";
import { PageHead } from "@/components/kit";
import { RoleRow } from "@/components/Rows";
import { education, languages, projects, skillCategories } from "@/data/projects";
import { span } from "@/lib/career";

const description = "Every role since 2017: what I worked on, where, and with which tools.";

export const metadata: Metadata = {
  title: "Experience | Carlos Cortes",
  description,
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience | Carlos Cortes",
    description,
    url: "/experience",
    siteName: "Carlos Cortes",
    images: [{ url: "/images/carlos.jpg", width: 800, height: 800 }],
  },
  twitter: { card: "summary", title: "Experience | Carlos Cortes", description },
};

/** Tools named on more than one role, counted from each role's tags. */
function sharedTools() {
  const counts = new Map<string, number>();
  for (const p of projects) for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts]
    .filter(([, n]) => n > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

export default function ExperiencePage() {
  const first = Math.floor(Math.min(...projects.map((p) => span(p).from.t)));
  const tools = sharedTools();
  const max = Math.max(1, ...tools.map(([, n]) => n));

  return (
    <>
      <PageHead title="Experience" sub={`${projects.length} roles · ${first} to today`} />
      <Career />

      <div className="grid split">
        <section className="surface">
          <div className="surface-head">
            <h2>Roles</h2>
            <span>Newest first</span>
          </div>
          <div className="stack">
            {projects.map((p) => (
              <RoleRow key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <div className="aside-stack">
          <section className="surface">
            <div className="surface-head">
              <h2>Used in more than one role</h2>
            </div>
            <ol className="rank" aria-label="Tools by number of roles" style={{ "--c": "var(--brand)" } as CSSProperties}>
              {tools.map(([label, n]) => (
                <li key={label}>
                  <span className="rank-name" title={label}>
                    {label}
                  </span>
                  <span className="rank-track">
                    <i style={{ width: `${Math.max(0.4, (n / max) * 86)}%` }} />
                    <b>{n}</b>
                  </span>
                </li>
              ))}
            </ol>
            <p className="small muted" style={{ margin: "14px 0 0" }}>
              Counted from the tags on each role.
            </p>
          </section>

          <section className="surface">
            <div className="surface-head">
              <h2>Education</h2>
            </div>
            {education.map((e) => (
              <div key={e.school} className="kv-row">
                <span>
                  <b>{e.school}</b>
                  <br />
                  <span className="muted small">{e.degree}</span>
                </span>
                <span className="kv-right num">{e.period}</span>
              </div>
            ))}
          </section>

          <section className="surface">
            <div className="surface-head">
              <h2>Languages</h2>
            </div>
            {languages.map((l) => (
              <div key={l.name} className="kv-row">
                <b>{l.name}</b>
                <span className="kv-right">{l.level}</span>
              </div>
            ))}
          </section>
        </div>
      </div>

      <section className="surface skills">
        <div className="surface-head">
          <h2>Skills</h2>
        </div>
        {skillCategories.map((c) => (
          <div key={c.category} className="kv-row">
            <h3>{c.category}</h3>
            <div className="factchips">
              {c.items.map((i) => (
                <span key={i} className="factchip">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
