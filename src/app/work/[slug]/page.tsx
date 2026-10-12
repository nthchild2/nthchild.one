import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectLinks from "@/components/ProjectLinks";
import type { Metadata } from "next";

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
  return {
    title: `${project.company} — ${project.role} | Carlos Cortes`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      {/* Back link */}
      <Link
        href="/"
        className="section-fade inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-12 group"
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to home
      </Link>

      {/* Header */}
      <header className="section-fade mb-12">
        <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-3 font-medium">
          {project.period} &middot; {project.location}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-3">
          {project.company}
        </h1>
        <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mb-6">
          {project.role}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-sm rounded-lg bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.links && <ProjectLinks links={project.links} />}
      </header>

      {/* Hero image */}
      {project.image && (
        <section className="section-fade mb-16">
          <div
            className={`relative ${project.aspect === "portrait" ? "aspect-[3/4] max-w-md mx-auto" : "aspect-[16/10]"} rounded-2xl bg-gradient-to-br ${project.gradient} overflow-hidden card`}
          >
            <div className="absolute inset-6 sm:inset-10">
              <Image
                src={project.image}
                alt={`${project.company} project`}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="section-fade mb-16">
        <h2 className="section-heading mb-4">Overview</h2>
        <p className="text-lg leading-relaxed text-[hsl(var(--foreground))]">
          {project.summary}
        </p>
      </section>

      {/* Key Contributions */}
      <section className="section-fade mb-16">
        <h2 className="section-heading mb-6">Key Contributions</h2>
        <ul className="space-y-4">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-[hsl(var(--foreground))] leading-relaxed">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Navigation */}
      <nav className="section-fade pt-12">
        <div className="gradient-divider mb-8" />
        <div className="grid grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="group p-5 rounded-xl card hover:border-emerald-500/40 transition-all duration-200"
            >
              <p className="text-xs text-[hsl(var(--muted-foreground))] mb-1 flex items-center gap-1">
                <svg
                  className="w-3 h-3 transition-transform group-hover:-translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Previous
              </p>
              <p className="font-display font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {prevProject.company}
              </p>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                {prevProject.role}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group p-5 rounded-xl card hover:border-emerald-500/40 transition-all duration-200 text-right"
            >
              <p className="text-xs text-[hsl(var(--muted-foreground))] mb-1 flex items-center justify-end gap-1">
                Next
                <svg
                  className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </p>
              <p className="font-display font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {nextProject.company}
              </p>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">
                {nextProject.role}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </main>
  );
}
