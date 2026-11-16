import type { Metadata } from "next";
import { PageHead } from "@/components/kit";
import { RoleRow } from "@/components/Rows";
import { education, languages, projects, skillCategories } from "@/data/projects";

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

export default function ExperiencePage() {
  return (
    <>
      <PageHead title="Experience" sub="Every role since 2017, newest first" />

      <div className="grid split">
        <section className="surface">
          <div className="surface-head">
            <h2>Roles</h2>
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
