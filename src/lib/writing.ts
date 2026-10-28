import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  series?: string;
  tags: string[];
};

export type Post = PostMeta & { content: string };

const postsDir = path.join(process.cwd(), "src/content/writing");

function readPost(file: string): Post {
  const slug = file.replace(/\.mdx$/, "");
  const { data, content } = matter(
    fs.readFileSync(path.join(postsDir, file), "utf8"),
  );
  return {
    slug,
    title: data.title,
    summary: data.summary,
    date: data.date,
    series: data.series,
    tags: data.tags ?? [],
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

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
