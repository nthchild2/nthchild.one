// The site's versions of vault-kit's small parts. The kit's React components need React 19 and this site runs React 18,
// so these draw the same markup the kit's components draw, and the kit's ui.css styles them.
import type { CSSProperties, ReactNode } from "react";
import ThemeButton from "./ThemeButton";

const PATHS = {
  // from the kit's icon set
  home: <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />,
  trends: <path d="M3 17l5-6 4 3 5-7 4 4M3 21h18" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </>
  ),
  visit: (
    <>
      <rect x="4" y="4" width="16" height="17" rx="3" />
      <path d="M8 2v4M16 2v4M4 10h16" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l5.5 3.5-5.5 3.5z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />,
  auto: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M12 7a5 5 0 0 1 0 10z" fill="currentColor" stroke="none" />
    </>
  ),
  // the site's own, on the kit's 24 grid
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  out: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  back: <path d="M15 6l-6 6 6 6" />,
};
export type IconName = keyof typeof PATHS;

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

/** An icon on a tint of its own colour. */
export function Badge({ icon, color, large }: { icon: IconName; color: string; large?: boolean }) {
  return (
    <span className={`badge${large ? " lg" : ""}`} style={{ "--c": color } as CSSProperties}>
      <Icon name={icon} />
    </span>
  );
}

export const CALL_URL = "https://calendar.app.google/5k2gNrEZK8haq1nK9";

/** A screen's header: its title, one line of facts, its own controls, then the tools every screen carries. */
export function PageHead({ title, sub, children }: { title: ReactNode; sub?: ReactNode; children?: ReactNode }) {
  return (
    <div className="topbar">
      <div>
        <h1>{title}</h1>
        {sub && <p className="sub">{sub}</p>}
      </div>
      <div className="tools">
        {children}
        <a className="button" href={CALL_URL} target="_blank" rel="noopener noreferrer">
          <Icon name="visit" />
          Schedule a call
        </a>
        <ThemeButton />
      </div>
    </div>
  );
}

/** A link out of the site, as one of the kit's chip buttons. */
export function ExternalChip({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="chipbtn" href={href} target="_blank" rel="noopener noreferrer">
      <Icon name="out" />
      {children}
    </a>
  );
}
