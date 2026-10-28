import { Children, Fragment } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* ── Case-study building blocks ── */

/** Row of headline figures */
function Stats({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
      {children}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card rounded-xl p-5">
      <div className="text-3xl font-display font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
        {value}
      </div>
      <div className="text-sm text-[hsl(var(--muted-foreground))] mt-1 leading-snug">
        {label}
      </div>
    </div>
  );
}

/** Dated trail of one item moving through the system */
function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative my-10 ml-2 border-l border-dashed border-emerald-500/40 space-y-7">
      {children}
    </ol>
  );
}

function Moment({
  date,
  where,
  title,
  children,
}: {
  date: string;
  where: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="relative pl-7">
      <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[hsl(var(--background))] border-2 border-emerald-500" />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))] tabular-nums">
          {date}
        </span>
        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
          {where}
        </span>
      </div>
      <p className="font-display font-semibold text-[hsl(var(--foreground))]">
        {title}
      </p>
      {children && (
        <div className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mt-1 [&_p]:my-0 [&_p]:text-[hsl(var(--muted-foreground))]">
          {children}
        </div>
      )}
    </li>
  );
}

/** Numbered pipeline; steps flow left to right, top to bottom */
function Workflow({ children }: { children: ReactNode }) {
  return (
    <div className="my-10 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted)/0.5)] p-3 sm:p-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
      <p className="mt-3 px-1 text-xs text-[hsl(var(--muted-foreground))] flex items-center gap-2">
        <span className="inline-block w-6 h-px bg-emerald-500" />
        One direction: each step links back to the one before it.
      </p>
    </div>
  );
}

function Step({
  n,
  title,
  tool,
  children,
}: {
  n: string;
  title: string;
  tool: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative card rounded-xl p-4 flex flex-col gap-2 min-w-0">
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-2xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums leading-none">
          {n.padStart(2, "0")}
        </span>
        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]">
          {tool}
        </span>
      </div>
      <p className="font-display font-semibold text-[hsl(var(--foreground))]">
        {title}
      </p>
      <div className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))] [&_p]:my-0 [&_p]:text-[hsl(var(--muted-foreground))]">
        {children}
      </div>
    </div>
  );
}

/** Two-column comparison */
function Split({ children }: { children: ReactNode }) {
  return <div className="my-10 grid gap-3 sm:grid-cols-2">{children}</div>;
}

function Side({
  title,
  accent,
  children,
}: {
  title: string;
  accent?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-xl p-5 border ${
        accent
          ? "border-emerald-500/40 bg-emerald-500/5"
          : "border-[hsl(var(--border))] bg-[hsl(var(--card))]"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
        {title}
      </p>
      <div className="text-sm [&_ul]:my-0 [&_ul]:space-y-2.5 [&_p]:my-0">
        {children}
      </div>
    </div>
  );
}

/** Lanes joined by arrows, with a caption underneath */
function SystemMap({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  const lanes = Children.toArray(children);
  return (
    <figure className="my-10 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--muted)/0.5)] p-3 sm:p-4">
      <div className="grid gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch">
        {lanes.map((lane, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <div
                aria-hidden="true"
                className="flex items-center justify-center text-emerald-600 dark:text-emerald-400"
              >
                <svg
                  className="w-5 h-5 rotate-90 lg:rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            )}
            {lane}
          </Fragment>
        ))}
      </div>
      <figcaption className="mt-3 px-1 text-xs text-[hsl(var(--muted-foreground))]">
        {caption}
      </figcaption>
    </figure>
  );
}

function Lane({
  title,
  accent,
  children,
}: {
  title: string;
  accent?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-xl p-4 min-w-0 ${
        accent
          ? "border border-emerald-500/50 bg-emerald-500/5 shadow-lg shadow-emerald-500/10"
          : "card"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
        {title}
      </p>
      <div className="text-sm [&_ul]:my-0 [&_ul]:space-y-2 [&_p]:my-0">
        {children}
      </div>
    </div>
  );
}

/** Phone screens shown in device frames; scrolls sideways on narrow screens */
function Screens({ children }: { children: ReactNode }) {
  return (
    <div className="my-12 -mx-6 sm:mx-0 overflow-x-auto">
      <div className="flex gap-5 px-6 sm:px-0 pb-8 sm:justify-center snap-x snap-mandatory">
        {children}
      </div>
    </div>
  );
}

function Screen({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="snap-center shrink-0 w-[180px] sm:w-[164px] sm:even:translate-y-8 transition-transform duration-300 hover:-translate-y-1 sm:even:hover:translate-y-7">
      <div className="rounded-[1.75rem] p-1.5 bg-[hsl(224_14%_10%)] shadow-xl shadow-black/15 ring-1 ring-black/5 dark:ring-white/10">
        <div className="rounded-[1.4rem] overflow-hidden aspect-[390/844] bg-[hsl(var(--muted))]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={caption}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-center text-[hsl(var(--muted-foreground))]">
        {caption}
      </figcaption>
    </figure>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="relative my-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 pl-14 text-lg leading-relaxed [&_p]:my-0">
      <span
        aria-hidden="true"
        className="absolute left-5 top-3 font-display text-5xl leading-none text-emerald-500/60"
      >
        “
      </span>
      {children}
    </aside>
  );
}

/* ── Markdown elements ── */

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="font-display text-2xl sm:text-3xl font-bold tracking-tight mt-16 mb-4 text-balance text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="font-display text-lg font-semibold mt-10 mb-3 text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="my-5 leading-relaxed text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-5 space-y-3" {...props} />
  ),
  li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className="flex gap-3 leading-relaxed" {...props}>
      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
      <span className="min-w-0">{children}</span>
    </li>
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-emerald-600 dark:text-emerald-400 underline underline-offset-4 hover:no-underline"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-[hsl(var(--foreground))]" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="px-1.5 py-0.5 rounded bg-[hsl(var(--muted))] text-[0.9em] font-mono"
      {...props}
    />
  ),
  Stats,
  Stat,
  Timeline,
  Moment,
  Workflow,
  Step,
  Split,
  Side,
  SystemMap,
  Lane,
  Screens,
  Screen,
  Callout,
};
