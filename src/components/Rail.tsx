"use client";

// The kit's rail: the brand, the sections, links elsewhere, and a card at its foot. On a phone the kit turns it into a row along the top.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "./kit";

const sections: { href: string; label: string; icon: IconName; match: (p: string) => boolean }[] = [
  { href: "/", label: "Home", icon: "home", match: (p) => p === "/" },
  { href: "/experience", label: "Experience", icon: "trends", match: (p) => p.startsWith("/experience") || p.startsWith("/work/") },
  { href: "/writing", label: "Writing", icon: "doc", match: (p) => p.startsWith("/writing") },
];

const elsewhere: { href: string; label: string; icon: IconName }[] = [
  { href: "https://github.com/nthchild2", label: "GitHub", icon: "code" },
  { href: "https://www.linkedin.com/in/nthchild1", label: "LinkedIn", icon: "user" },
];

const EMAIL = "nthchild1@gmail.com";

export default function Rail() {
  const path = usePathname() ?? "/";
  return (
    <aside className="rail">
      <Link className="brandmark" href="/">
        <i>c</i>
        <span>Carlos Cortes</span>
      </Link>
      <nav aria-label="Sections">
        <div className="navgroup" role="group" aria-label="Sections">
          {sections.map((s) => (
            <Link key={s.href} className="navlink" href={s.href} aria-current={s.match(path) ? "page" : undefined}>
              <Icon name={s.icon} />
              {s.label}
            </Link>
          ))}
        </div>
        <div className="navgroup" role="group" aria-label="Elsewhere">
          <span>Elsewhere</span>
          {elsewhere.map((s) => (
            <a key={s.href} className="navlink" href={s.href} target="_blank" rel="noopener noreferrer">
              <Icon name={s.icon} />
              {s.label}
            </a>
          ))}
          <a className="navlink" href={`mailto:${EMAIL}`}>
            <Icon name="mail" />
            Email
          </a>
        </div>
      </nav>
      <div className="railcard">
        <span className="avail">
          <span className="dot" />
          <b>Available for new projects</b>
        </span>
        <span>Write to me at</span>
        <a className="mail" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </div>
    </aside>
  );
}
