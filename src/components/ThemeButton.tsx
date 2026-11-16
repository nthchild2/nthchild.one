"use client";

// The kit's theme button: it steps through the system's theme, Daylight and Night, and keeps the choice in the browser.
// The kit's tokens follow `data-theme` (or the system when it is unset); the post building blocks use Tailwind's `dark` class, so both are kept in step.
import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

function apply(theme: Theme) {
  const root = document.documentElement;
  const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;
  root.classList.toggle("dark", dark);
}

/** Runs in <head> before the page paints, so the page never flashes the other theme. */
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');var r=document.documentElement;if(t==='light'||t==='dark')r.dataset.theme=t;var d=t==='dark'||((!t||t==='system')&&matchMedia('(prefers-color-scheme: dark)').matches);r.classList.toggle('dark',d);}catch(e){}})();`;

const icons: Record<Theme, JSX.Element> = {
  system: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M12 7a5 5 0 0 1 0 10z" fill="currentColor" stroke="none" />
    </>
  ),
  light: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  dark: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />,
};

export default function ThemeButton() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    let stored: Theme = "system";
    try {
      const t = localStorage.getItem("theme");
      if (t === "light" || t === "dark") stored = t;
    } catch {
      /* private mode */
    }
    setTheme(stored);
  }, []);

  // while following the system, follow it when it changes
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const cycle = () => {
    const next: Theme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(next);
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode */
    }
  };

  const label = theme === "system" ? "System" : theme === "light" ? "Daylight" : "Night";
  return (
    <button className="iconbtn" type="button" onClick={cycle} title={`Theme: ${label}`} aria-label={`Theme: ${label}. Change theme`}>
      <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
        {icons[theme]}
      </svg>
    </button>
  );
}
