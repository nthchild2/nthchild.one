import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExternalChip, Icon, PageHead } from "@/components/kit";
import { PostRow, RoleRow } from "@/components/Rows";
import { projects } from "@/data/projects";
import { getPost } from "@/lib/writing";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.company} — ${project.role} | Carlos Cortes`;
  return {
    title,
    description: project.summary,
    openGraph: {
      title,
      description: project.summary,
      url: `/work/${project.slug}`,
      siteName: "Carlos Cortes",
      images: [{ url: "/images/carlos.jpg", width: 800, height: 800 }],
    },
    twitter: { card: "summary", title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const newer = index > 0 ? projects[index - 1] : null;
  const older = index < projects.length - 1 ? projects[index + 1] : null;
  const caseStudy = project.caseStudy ? getPost(project.caseStudy) : null;

  return (
    <>
      <Link className="chipbtn ghost back" href="/experience">
        <Icon name="back" />
        Experience
      </Link>
      <PageHead title={project.company} sub={`${project.role} · ${project.period} · ${project.location}`}>
        {project.links?.map((l) => (
          <ExternalChip key={l.href} href={l.href}>
            {l.label}
          </ExternalChip>
        ))}
      </PageHead>

      <div className="grid split">
        <section className="surface">
          <div className="surface-head">
            <h2>What I did</h2>
          </div>
          <p className="lede">{project.summary}</p>
          <ul className="points">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        <div className="aside-stack">
          <section className="surface">
            <div className="surface-head">
              <h3>Stack</h3>
            </div>
            <div className="factchips">
              {project.tags.map((t) => (
                <span key={t} className="factchip">
                  {t}
                </span>
              ))}
            </div>
          </section>

          {caseStudy && (
            <section className="surface">
              <div className="surface-head">
                <h3>Case study</h3>
              </div>
              <PostRow post={caseStudy} />
            </section>
          )}
        </div>
      </div>

      {project.gallery && (
        <section className="surface">
          <div className="surface-head">
            <h2>Screens</h2>
          </div>
          <div className="gallery">
            {project.gallery.map((g) => (
              <Image
                key={g.src}
                className={g.width > g.height ? "wide" : undefined}
                src={g.src}
                alt={g.alt}
                width={g.width}
                height={g.height}
                sizes="(max-width: 900px) 70vw, 360px"
              />
            ))}
          </div>
        </section>
      )}

      <nav className="grid g2" aria-label="More roles" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {newer ? <RoleRow project={newer} prefix="Newer" /> : <span />}
        {older && <RoleRow project={older} prefix="Older" />}
      </nav>
    </>
  );
}
