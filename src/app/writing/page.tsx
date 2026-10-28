import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, getPosts } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing | Carlos Cortes",
  description:
    "Case studies and notes on building products, architecture and AI-assisted development workflows.",
};

export default function WritingPage() {
  const posts = getPosts();

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      <header className="section-fade mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
          Writing
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl leading-relaxed">
          Case studies and notes on building products: architecture, team
          workflows, and working with AI agents along the way.
        </p>
      </header>

      <section className="section-fade">
        <div className="card rounded-2xl divide-y divide-[hsl(var(--border))]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group block p-5 lg:p-6 first:rounded-t-2xl last:rounded-b-2xl transition-colors hover:bg-[hsl(var(--muted))]"
            >
              <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-widest mb-2 font-medium">
                {formatDate(post.date)}
                {post.series && <> &middot; {post.series}</>}
              </p>
              <h2 className="font-display font-semibold text-lg text-[hsl(var(--foreground))] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {post.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
