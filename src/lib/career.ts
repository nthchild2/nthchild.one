import type { Project } from "@/data/projects";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** A point in time as a fractional year, and how well it is known. */
export type When = { t: number; exact: boolean; open?: boolean };

function now(): number {
  const d = new Date();
  return d.getFullYear() + (d.getMonth() + 0.5) / 12;
}

/** "Oct 2026" is known to the month; a bare "2026" only to the year; "Present" is today. */
function when(text: string, isEnd: boolean): When {
  const s = text.trim();
  if (/present/i.test(s)) return { t: now(), exact: true, open: true };
  const m = s.match(/^([A-Z][a-z]{2}) (\d{4})$/);
  if (m) return { t: Number(m[2]) + (MONTHS.indexOf(m[1]) + (isEnd ? 1 : 0)) / 12, exact: true };
  return { t: Number(s) + (isEnd ? 1 : 0), exact: false };
}

/** A role's period ("Jun 2022 — Oct 2026") as a span on the time axis. */
export function span(project: Project) {
  const [a, b] = project.period.split("—");
  const from = when(a, false);
  const to = when(b ?? a, true);
  return { from, to, roughly: !from.exact || !to.exact };
}

/** The first letter of a company, for its mark. */
export function initial(company: string) {
  return company.replace(/^Banco /, "").charAt(0);
}
