// Every role on one time axis, one row each, drawn with the kit's span pills.
// Following the kit's rules, a role whose dates are only known to the year is outlined, and one still going is left open at the end.
import type { CSSProperties } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { span } from "@/lib/career";

export default function Career() {
  const spans = projects.map((p) => ({ p, ...span(p) }));
  const t0 = Math.floor(Math.min(...spans.map((s) => s.from.t)));
  const t1 = Math.ceil(Math.max(...spans.map((s) => s.to.t)));
  const x = (t: number) => ((t - t0) / (t1 - t0)) * 100;
  const years = Array.from({ length: t1 - t0 + 1 }, (_, i) => t0 + i);

  return (
    <section className="surface career" aria-label="Career">
      <div className="surface-head">
        <h2>Career</h2>
        <span>
          {t0} to today · one row per role
        </span>
      </div>
      <div className="career-rows">
        <div className="career-grid" aria-hidden="true">
          {years.map((y) => (
            <i key={y} style={{ left: `${x(y)}%` }} />
          ))}
        </div>
        {spans.map(({ p, from, to, roughly }) => {
          const a = x(from.t);
          const w = Math.max(0.9, x(to.t) - a);
          const labelRight = a + w < 70;
          const title = `${p.company} · ${p.role} · ${p.period}${roughly ? " (dates known to the year)" : ""}`;
          return (
            <div key={p.slug} className="career-row">
              <Link
                className={`span-pill${roughly ? " outlined" : ""}${to.open ? " open" : ""}`}
                style={{ "--c": "var(--career)", left: `${a}%`, width: `${w}%` } as CSSProperties}
                href={`/work/${p.slug}`}
                title={title}
                aria-label={title}
              />
              <span
                className="career-label"
                aria-hidden="true"
                style={labelRight ? { left: `calc(${a + w}% + 8px)` } : { right: `calc(${100 - a}% + 8px)` }}
              >
                {p.company}
                <em>{p.period}</em>
              </span>
            </div>
          );
        })}
      </div>
      <div className="career-axis" aria-hidden="true">
        {years.slice(0, -1).map((y) => (
          <span key={y} style={{ left: `${x(y + 0.5)}%` }}>
            {y}
          </span>
        ))}
      </div>
      <div className="legend">
        <span>
          <i className="span-key" />
          Dates known to the month
        </span>
        <span>
          <i className="span-key outlined" />
          Known to the year
        </span>
      </div>
    </section>
  );
}
