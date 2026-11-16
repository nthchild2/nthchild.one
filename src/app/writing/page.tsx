import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHead } from "@/components/kit";
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

export default function WritingPage() {
  const posts = getPosts();
  const series = getSeries();

  return (
    <>
      <PageHead
        title="Writing"
        sub="Case studies and notes on building products: architecture, team workflows, and working with AI agents along the way."
      />

      <div className="posts">
        {posts.map((post) => (
          <Link key={post.slug} className="surface post-card" href={`/writing/${post.slug}`}>
            {post.image && (
              <Image src={post.image} alt={post.imageAlt ?? ""} width={1200} height={675} sizes="(max-width: 900px) 100vw, 33vw" />
            )}
            <div>
              <div className="meta">
                <span className="tagline" style={{ "--c": "var(--brand)" } as CSSProperties}>
                  {post.type}
                </span>
                <span className="num">{formatDate(post.date)}</span>
                <span>· {post.readingMinutes} min read</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <div className="factchips">
                {post.tags.map((t) => (
                  <span key={t} className="chip-soft">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {series.length > 0 && (
        <div className="grid g2">
          {series.map((s) => (
            <section key={s.name} className="surface">
              <div className="surface-head">
                <h2>{s.name}</h2>
                <span>
                  Series · {s.posts.length} {s.posts.length === 1 ? "part" : "parts"}
                </span>
              </div>
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
            </section>
          ))}
        </div>
      )}
    </>
  );
}
