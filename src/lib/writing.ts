import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  /** "Case study", "Essay" or "Note" */
  type: string;
  series?: string;
  part?: number;
  tags: string[];
  /** Image under /public used for the share card */
  image?: string;
  readingMinutes: number;
};

export type Post = PostMeta & { content: string };

export type Series = {
  name: string;
  posts: PostMeta[];
};

const postsDir = path.join(process.cwd(), "src/content/writing");

function readPost(file: string): Post {
  const slug = file.replace(/\.mdx$/, "");
  const { data, content } = matter(
    fs.readFileSync(path.join(postsDir, file), "utf8"),
  );
  const words = content
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return {
    slug,
    title: data.title,
    summary: data.summary,
    date: data.date,
    type: data.type ?? "Essay",
    series: data.series,
    part: data.part,
    tags: data.tags ?? [],
    image: data.image,
    readingMinutes: Math.max(1, Math.round(words / 230)),
    content,
  };
}

/** All posts, newest first */
export function getPosts(): PostMeta[] {
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const { content: _content, ...meta } = readPost(file);
      return meta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | null {
  const file = `${slug}.mdx`;
  if (!fs.existsSync(path.join(postsDir, file))) return null;
  return readPost(file);
}

/** Series with their parts in order, most recently updated first */
export function getSeries(): Series[] {
  const bySeries = new Map<string, PostMeta[]>();
  for (const post of getPosts()) {
    if (!post.series) continue;
    bySeries.set(post.series, [...(bySeries.get(post.series) ?? []), post]);
  }
  return [...bySeries.entries()].map(([name, posts]) => ({
    name,
    posts: posts.sort((a, b) => (a.part ?? 0) - (b.part ?? 0)),
  }));
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function postLabel(post: PostMeta) {
  return post.series && post.part
    ? `${post.series} · Part ${post.part}`
    : post.type;
}
