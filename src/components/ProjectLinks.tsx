import { FaApple, FaGlobe, FaGooglePlay } from "react-icons/fa";
import type { ProjectLink } from "@/data/projects";

const icons = {
  ios: FaApple,
  android: FaGooglePlay,
  web: FaGlobe,
} as const;

export default function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.map((link) => {
        const Icon = icons[link.kind];
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-emerald-500/40 hover:bg-[hsl(var(--muted))] transition-colors"
          >
            <Icon className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
            {link.label}
            <svg
              className="w-3.5 h-3.5 text-[hsl(var(--muted-foreground))] opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        );
      })}
    </div>
  );
}
