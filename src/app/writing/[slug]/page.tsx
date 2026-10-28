import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MdxComponents";
import { formatDate, getPost, getPosts } from "@/lib/writing";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Carlos Cortes`,
    description: post.summary,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <Link
        href="/writing"
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
        All writing
      </Link>

      <header className="section-fade mb-12">
        <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-3 font-medium">
          {formatDate(post.date)}
          {post.series && <> &middot; {post.series}</>}
        </p>
        <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-5 text-balance">
          {post.title}
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
          {post.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-sm rounded-lg bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article className="section-fade">
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>

      <footer className="section-fade pt-12 mt-12">
        <div className="gradient-divider mb-8" />
        <Link
          href="/writing"
          className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4"
        >
          ← More writing
        </Link>
      </footer>
    </main>
  );
}
