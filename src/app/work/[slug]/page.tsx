import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ImageCarousel from "@/components/ImageCarousel";
import { Badge, Icon } from "@/components/kit";
import ProjectLinks from "@/components/ProjectLinks";
import { projects } from "@/data/projects";

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
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <main className="page-col">
      <Link href="/" className="chipbtn ghost back">
        <Icon name="back" />
        Back to home
      </Link>

      {/* Header */}
      <header className="page-header">
        <h3>
          {project.period} · {project.location}
        </h3>
        <h1>{project.company}</h1>
        <p className="role">{project.role}</p>
        <div className="factchips">
          {project.tags.map((tag) => (
            <span key={tag} className="factchip">
              {tag}
            </span>
          ))}
        </div>
        {project.links && <ProjectLinks links={project.links} />}
      </header>

      {/* Screenshots */}
      {project.gallery && <ImageCarousel images={project.gallery} label={project.company} />}

      {/* Overview */}
      <section className="block">
        <h3>Overview</h3>
        <p className="lede">{project.summary}</p>
      </section>

      {project.caseStudy && (
        <Link href={`/writing/${project.caseStudy}`} className="rowlink casestudy">
          <Badge icon="doc" color="var(--brand)" large />
          <div>
            <span className="rowrole">Case study</span>
            <b>Read how we built the workflow behind it</b>
          </div>
          <em aria-hidden="true">›</em>
        </Link>
      )}

      {/* Key Contributions */}
      <section className="block">
        <h3>Key Contributions</h3>
        <ul className="points">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      {/* Navigation */}
      <nav className="prevnext" aria-label="More roles">
        {prevProject ? (
          <Link href={`/work/${prevProject.slug}`} className="surface">
            <span>‹ Previous</span>
            <b>{prevProject.company}</b>
            <small>{prevProject.role}</small>
          </Link>
        ) : (
          <div />
        )}
        {nextProject ? (
          <Link href={`/work/${nextProject.slug}`} className="surface next">
            <span>Next ›</span>
            <b>{nextProject.company}</b>
            <small>{nextProject.role}</small>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </main>
  );
}
