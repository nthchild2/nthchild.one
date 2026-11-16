"use client";

// The site's top bar, in the kit's parts: its brand mark, its section links and its theme button.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navItems } from "@/data/projects";
import ThemeButton from "./ThemeButton";

export default function TopNav() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="topnav">
      <nav aria-label="Sections">
        <Link href="/" className="brandmark">
          <i>CC</i>
          <span>Carlos Cortes</span>
        </Link>

        <div className="topnav-links">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.replace("/#", "/"));
            return (
              <Link key={item.href} href={item.href} className="navlink" aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
          <span className="topnav-divider" aria-hidden="true" />
          <ThemeButton />
          <a className="topnav-icon" href="https://github.com/nthchild2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub aria-hidden="true" />
          </a>
          <a className="topnav-icon" href="https://www.linkedin.com/in/nthchild1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
