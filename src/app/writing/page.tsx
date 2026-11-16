import type { CSSProperties } from "react";
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
    <main className="page-col">
      <header className="page-header">
        <h1>Writing</h1>
        <p className="intro">
          Case studies and notes on building products: architecture, team workflows, and working with AI agents along
          the way.
        </p>
      </header>

      {/* ── Series ── */}
      {series.length > 0 && (
        <section className="block">
          <h3>Series</h3>
          <div className="series-grid">
            {series.map((s) => (
              <div key={s.name} className="surface">
                <span className="rowrole">
                  {s.posts.length} {s.posts.length === 1 ? "part" : "parts"}
                </span>
                <h2>{s.name}</h2>
                <ol className="series-list">
                  {s.posts.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/writing/${post.slug}`}>
                        <b>{post.part}</b>
                        <span>{post.title}</span>
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
      <section className="block">
        <h3>All posts</h3>
        {years.map((year) => (
          <div key={year} className="year-group">
            <p className="year">{year}</p>
            <div className="surface entries">
              {posts
                .filter((post) => post.date.startsWith(year))
                .map((post) => (
                  <Link key={post.slug} href={`/writing/${post.slug}`} className="entry">
                    <span className="meta">
                      <span className="num" title={formatDate(post.date)}>
                        {shortDate(post.date)}
                      </span>
                      <span className="tagline" style={{ "--c": "var(--brand)" } as CSSProperties}>
                        {post.type}
                      </span>
                      <span>{post.readingMinutes} min read</span>
                    </span>
                    <b>{post.title}</b>
                    <p>{post.summary}</p>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
