import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getPosts } from "@/lib/writing";

const baseUrl = "https://www.nthchild.one";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.date,
  }));
  const work = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
  }));

  return [{ url: baseUrl }, { url: `${baseUrl}/writing` }, ...posts, ...work];
}
