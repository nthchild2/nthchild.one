import type { ComponentPropsWithoutRef, ReactNode } from "react";

/** Numbered pipeline used in case studies to show how work flows */
function Workflow({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="card rounded-xl p-4 flex gap-3">
      <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0">
        {n}
      </span>
      <div className="min-w-0 text-sm leading-relaxed text-[hsl(var(--muted-foreground))] [&>p]:my-0">
        <p className="font-display font-semibold text-[hsl(var(--foreground))] mb-0.5">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 text-[hsl(var(--foreground))] leading-relaxed [&>p]:my-0">
      {children}
    </aside>
  );
}

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="font-display text-2xl font-bold tracking-tight mt-14 mb-4 text-[hsl(var(--foreground))]"
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
      <span>{children}</span>
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
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-8 border-l-2 border-emerald-500 pl-5 text-lg text-[hsl(var(--muted-foreground))] italic"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="px-1.5 py-0.5 rounded bg-[hsl(var(--muted))] text-[0.9em] font-mono"
      {...props}
    />
  ),
  Workflow,
  Step,
  Callout,
};
