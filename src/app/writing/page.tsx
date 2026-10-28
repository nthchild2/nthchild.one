import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, getPosts, getSeries } from "@/lib/writing";

const description =
  "Case studies and notes on building products: architecture, team workflows, and working with AI agents.";

export const metadata: Metadata = {
  title: "Writing | Carlos Cortes",
  description,
  openGraph: {
    title: "Writing | Carlos Cortes",
    description,
    url: "/writing",
    siteName: "Carlos Cortes",
    images: [{ url: "/images/carlos.jpg", width: 800, height: 800 }],
  },
  twitter: { card: "summary", title: "Writing | Carlos Cortes", description },
};

function shortDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function WritingPage() {
  const posts = getPosts();
  const series = getSeries();
  const years = [...new Set(posts.map((post) => post.date.slice(0, 4)))];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      <header className="section-fade mb-14">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
          Writing
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl leading-relaxed">
          Case studies and notes on building products: architecture, team
          workflows, and working with AI agents along the way.
        </p>
      </header>

      {/* ── Series ── */}
      {series.length > 0 && (
        <section className="section-fade mb-16">
          <h2 className="section-heading mb-6">Series</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {series.map((s) => (
              <div key={s.name} className="card rounded-2xl p-5 lg:p-6">
                <p className="text-xs uppercase tracking-widest font-medium text-emerald-600 dark:text-emerald-400 mb-1">
                  {s.posts.length} {s.posts.length === 1 ? "part" : "parts"}
                </p>
                <h3 className="font-display font-semibold text-lg text-[hsl(var(--foreground))] mb-4">
                  {s.name}
                </h3>
                <ol className="space-y-1">
                  {s.posts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/writing/${post.slug}`}
                        className="group flex gap-3 -mx-2 px-2 py-1.5 rounded-lg hover:bg-[hsl(var(--muted))] transition-colors"
                      >
                        <span className="font-display font-bold text-sm text-emerald-600 dark:text-emerald-400 tabular-nums w-5 shrink-0">
                          {post.part}
                        </span>
                        <span className="text-sm text-[hsl(var(--foreground))] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                          {post.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── All posts, by year ── */}
      <section className="section-fade">
        <h2 className="section-heading mb-6">All posts</h2>
        <div className="space-y-10">
          {years.map((year) => (
            <div key={year} className="grid sm:grid-cols-[4rem_1fr] gap-x-6 gap-y-3">
              <p className="font-display font-bold text-[hsl(var(--muted-foreground))] tabular-nums sm:pt-5">
                {year}
              </p>
              <div className="card rounded-2xl divide-y divide-[hsl(var(--border))] min-w-0">
                {posts
                  .filter((post) => post.date.startsWith(year))
                  .map((post) => (
                    <Link
                      key={post.slug}
                      href={`/writing/${post.slug}`}
                      className="group block p-5 first:rounded-t-2xl last:rounded-b-2xl transition-colors hover:bg-[hsl(var(--muted))]"
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 text-xs text-[hsl(var(--muted-foreground))]">
                        <span className="tabular-nums font-medium" title={formatDate(post.date)}>
                          {shortDate(post.date)}
                        </span>
                        <span className="px-2 py-0.5 rounded-md font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                          {post.type}
                        </span>
                        <span>{post.readingMinutes} min read</span>
                      </div>
                      <h3 className="font-display font-semibold text-[hsl(var(--foreground))] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-1.5">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-2">
                        {post.summary}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
