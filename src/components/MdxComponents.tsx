import { Children, Fragment } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* ── Case-study building blocks ── */

const heroQuotes = [
  "What if the technician doesn't show up?",
  "Is the commission on labor or on the full price?",
  "Customers should be able to send photos of the problem.",
];

const heroOutputs = ["Decision", "ADR", "Figma frame", "Build ticket"];

function HeroArrow() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 rotate-90 lg:rotate-0 text-accent-text"
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
  );
}

/** Opening graphic: meeting talk on the left, the AI layer in the middle, the product on the right */
function ConversationHero({ image, alt }: { image: string; alt: string }) {
  return (
    <figure className="my-12 -mx-4 sm:mx-0 sm:rounded-3xl overflow-hidden border-y sm:border border-[color:var(--line-2)] bg-gradient-to-br from-accent/10 via-[color:var(--bg)] to-accent/10">
      <div className="grid lg:grid-cols-[1fr_auto_auto_auto_1fr] items-center gap-5 lg:gap-4 px-4 py-8 sm:p-8">
        {/* Conversation */}
        <div className="flex flex-col gap-3 min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--text-3)]">
            Recorded call
          </p>
          {heroQuotes.map((quote, i) => (
            <p
              key={quote}
              className={`max-w-[17rem] rounded-2xl rounded-bl-md px-4 py-2.5 text-sm leading-snug bg-[color:var(--card-solid)] border border-[color:var(--line-2)] shadow-sm text-[color:var(--text)] ${
                i === 1 ? "lg:ml-6" : ""
              }`}
            >
              {quote}
            </p>
          ))}
        </div>

        <div className="flex justify-center">
          <HeroArrow />
        </div>

        {/* AI layer */}
        <div className="flex flex-col items-center gap-3">
          <span className="px-4 py-2 rounded-full bg-accent text-white text-sm font-display font-semibold shadow-lg shadow-accent/25">
            Claude + MCP
          </span>
          <div className="flex flex-wrap lg:flex-col justify-center gap-1.5">
            {heroOutputs.map((output) => (
              <span
                key={output}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[color:var(--card-solid)] border border-[color:var(--line-2)] text-[color:var(--text-3)]"
              >
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {output}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <HeroArrow />
        </div>

        {/* Product */}
        <div className="flex justify-center lg:justify-end min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={alt}
            className="w-[240px] sm:w-[260px] rounded-2xl shadow-2xl shadow-black/20"
          />
        </div>
      </div>
    </figure>
  );
}

/** Wide opening illustration for a post. */
function PostHero({ image, alt }: { image: string; alt: string }) {
  return (
    <figure className="my-12 -mx-4 sm:mx-0 overflow-hidden sm:rounded-3xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={alt} className="block w-full h-auto" />
    </figure>
  );
}

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
      <div className="text-3xl font-display font-bold text-accent-text tabular-nums">
        {value}
      </div>
      <div className="text-sm text-[color:var(--text-3)] mt-1 leading-snug">
        {label}
      </div>
    </div>
  );
}

/** Dated trail of one item moving through the system */
function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative my-10 ml-2 border-l border-dashed border-accent/40 space-y-7">
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
      <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[color:var(--bg)] border-2 border-accent" />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--text-3)] tabular-nums">
          {date}
        </span>
        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-accent/10 text-accent-text">
          {where}
        </span>
      </div>
      <p className="font-display font-semibold text-[color:var(--text)]">
        {title}
      </p>
      {children && (
        <div className="text-sm text-[color:var(--text-3)] leading-relaxed mt-1 [&_p]:my-0 [&_p]:text-[color:var(--text-3)]">
          {children}
        </div>
      )}
    </li>
  );
}

/** Numbered pipeline; steps flow left to right, top to bottom. `note` replaces the line under the steps; an empty note leaves it out. */
function Workflow({
  children,
  note = "One direction: each step links back to the one before it.",
}: {
  children: ReactNode;
  note?: string;
}) {
  return (
    <div className="my-10 rounded-2xl border border-[color:var(--line-2)] bg-[color:var(--fill)] p-3 sm:p-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
      {note && (
        <p className="mt-3 px-1 text-xs text-[color:var(--text-3)] flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-accent" />
          {note}
        </p>
      )}
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
        <span className="font-display text-2xl font-bold text-accent-text tabular-nums leading-none">
          {n.padStart(2, "0")}
        </span>
        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[color:var(--fill)] text-[color:var(--text-3)]">
          {tool}
        </span>
      </div>
      <p className="font-display font-semibold text-[color:var(--text)]">
        {title}
      </p>
      <div className="text-sm leading-relaxed text-[color:var(--text-3)] [&_p]:my-0 [&_p]:text-[color:var(--text-3)]">
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
          ? "border-accent/40 bg-accent/5"
          : "border-[color:var(--line-2)] bg-[color:var(--card-solid)]"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-text mb-3">
        {title}
      </p>
      <div className="text-sm [&_ul]:my-0 [&_ul]:space-y-2.5 [&_p]:my-0 [&_ul+p]:mt-4 [&_ul+p]:text-[color:var(--text-3)]">
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
    <figure className="my-10 rounded-2xl border border-[color:var(--line-2)] bg-[color:var(--fill)] p-3 sm:p-4">
      <div className="grid gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch">
        {lanes.map((lane, i) => (
          <Fragment key={i}>
            {i > 0 && (
              <div
                aria-hidden="true"
                className="flex items-center justify-center text-accent-text"
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
      <figcaption className="mt-3 px-1 text-xs text-[color:var(--text-3)]">
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
          ? "border border-accent/50 bg-accent/5 shadow-lg shadow-accent/10"
          : "card"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-text mb-3">
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
    <div className="my-12 -mx-4 sm:mx-0 overflow-x-auto">
      <div className="flex gap-5 px-4 sm:px-0 pb-8 sm:justify-center snap-x snap-mandatory">
        {children}
      </div>
    </div>
  );
}

function Screen({ src, caption, alt }: { src: string; caption: string; alt?: string }) {
  return (
    <figure className="snap-center shrink-0 w-[180px] sm:w-[164px] sm:even:translate-y-8 transition-transform duration-300 hover:-translate-y-1 sm:even:hover:translate-y-7">
      <div className="rounded-[1.75rem] p-1.5 bg-[hsl(224_14%_10%)] shadow-xl shadow-black/15 ring-1 ring-black/5 dark:ring-white/10">
        <div className="rounded-[1.4rem] overflow-hidden aspect-[390/844] bg-[color:var(--fill)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt ?? caption}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-center text-[color:var(--text-3)]">
        {caption}
      </figcaption>
    </figure>
  );
}

/** `darkSrc` swaps in a dark-theme version of the same picture when the site is dark. */
function Figure({
  src,
  darkSrc,
  alt,
  caption,
}: {
  src: string;
  darkSrc?: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-10 -mx-4 sm:mx-0">
      <div className="overflow-hidden border-y sm:border sm:rounded-2xl border-[color:var(--line-2)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`block w-full h-auto${darkSrc ? " dark:hidden" : ""}`}
        />
        {darkSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={darkSrc} alt={alt} loading="lazy" className="hidden dark:block w-full h-auto" />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 px-4 sm:px-0 text-sm text-[color:var(--text-3)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** A highlighted point in the author's own words, marked by an accent bar. */
function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-10 rounded-2xl border border-accent/30 border-l-4 border-l-accent bg-accent/5 p-6 text-lg leading-relaxed [&_p]:my-0">
      {children}
    </aside>
  );
}

/* ── Markdown elements ── */

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="font-display text-2xl sm:text-3xl font-bold tracking-tight mt-16 mb-4 text-balance text-[color:var(--text)]"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="font-display text-lg font-semibold mt-10 mb-3 text-[color:var(--text)]"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="my-5 leading-relaxed text-[color:var(--text)]"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-5 space-y-3" {...props} />
  ),
  li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className="flex gap-3 leading-relaxed" {...props}>
      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
      <span className="min-w-0">{children}</span>
    </li>
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-accent-text underline underline-offset-4 hover:no-underline"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-[color:var(--text)]" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="px-1.5 py-0.5 rounded bg-[color:var(--fill)] text-[0.9em] font-mono"
      {...props}
    />
  ),
  ConversationHero,
  PostHero,
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
  Figure,
  Callout,
};
