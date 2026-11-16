import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Icon } from "@/components/kit";
import { mdxComponents } from "@/components/MdxComponents";
import { formatDate, getPost, getPosts, getSeries, postLabel } from "@/lib/writing";

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
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `/writing/${post.slug}`,
      siteName: "Carlos Cortes",
      publishedTime: post.date,
      authors: ["Carlos Cortes"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const series = post.series ? getSeries().find((s) => s.name === post.series) : undefined;

  return (
    <main className="page-col post-page">
      <Link href="/writing" className="chipbtn ghost back">
        <Icon name="back" />
        All writing
      </Link>

      <header className="page-header">
        <h3>
          {formatDate(post.date)} · {postLabel(post)} · {post.readingMinutes} min read
        </h3>
        <h1>{post.title}</h1>
        <p className="intro">{post.summary}</p>
        <div className="factchips">
          {post.tags.map((tag) => (
            <span key={tag} className="factchip">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article className="post-body">
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>

      {series && (
        <aside className="surface">
          <span className="rowrole">Series</span>
          <h2>{series.name}</h2>
          <ol className="series-list">
            {series.posts.map((part) => (
              <li key={part.slug}>
                <Link href={`/writing/${part.slug}`} aria-current={part.slug === post.slug ? "page" : undefined}>
                  <b>{part.part}</b>
                  <span>{part.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      )}

      <footer className="site-footer">
        <Link href="/writing">← More writing</Link>
      </footer>
    </main>
  );
}
