// Rows that open one thing: a role or a post, drawn as the kit's row links.
import Link from "next/link";
import type { Project } from "@/data/projects";
import { formatDate, type PostMeta } from "@/lib/writing";
import { Badge } from "./kit";

/** The first letter of a company, for its mark. */
export function initial(company: string) {
  return company.replace(/^Banco /, "").charAt(0);
}

export function RoleRow({ project, prefix }: { project: Project; prefix?: string }) {
  return (
    <Link className="rowlink" href={`/work/${project.slug}`}>
      <span className="mono">{initial(project.company)}</span>
      <div>
        <b>
          {prefix ? `${prefix} · ` : ""}
          {project.company}
        </b>
        <p>
          {project.role} · {project.period}
        </p>
      </div>
      <em aria-hidden="true">›</em>
    </Link>
  );
}

export function PostRow({ post }: { post: PostMeta }) {
  return (
    <Link className="rowlink" href={`/writing/${post.slug}`}>
      <Badge icon="doc" color="var(--brand)" large />
      <div>
        <b>{post.title}</b>
        <p>
          {post.type} · {formatDate(post.date)} · {post.readingMinutes} min read
        </p>
      </div>
      <em aria-hidden="true">›</em>
    </Link>
  );
}
