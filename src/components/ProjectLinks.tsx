import { FaApple, FaGlobe, FaGooglePlay } from "react-icons/fa";
import type { ProjectLink } from "@/data/projects";

const icons = {
  ios: FaApple,
  android: FaGooglePlay,
  web: FaGlobe,
} as const;

export default function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <div className="toolbar">
      {links.map((link) => {
        const Icon = icons[link.kind];
        return (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="chipbtn">
            <Icon aria-hidden="true" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
