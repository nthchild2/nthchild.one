/**
 * Color-coded skill badge with hover effects.
 *
 * Uses a static lookup map because Tailwind JIT cannot detect dynamically
 * constructed class names like `bg-${color}-500/10`.
 */

const colorMap: Record<
  string,
  { bg: string; border: string; text: string; hover: string; glow: string }
> = {
  cyan: {
    bg: "bg-cyan-500/8",
    border: "border-cyan-500/15",
    text: "text-cyan-700 dark:text-cyan-400",
    hover: "hover:bg-cyan-500/15 hover:border-cyan-500/30",
    glow: "hover:shadow-[0_0_12px_rgba(6,182,212,0.15)]",
  },
  violet: {
    bg: "bg-violet-500/8",
    border: "border-violet-500/15",
    text: "text-violet-700 dark:text-violet-400",
    hover: "hover:bg-violet-500/15 hover:border-violet-500/30",
    glow: "hover:shadow-[0_0_12px_rgba(139,92,246,0.15)]",
  },
  amber: {
    bg: "bg-amber-500/8",
    border: "border-amber-500/15",
    text: "text-amber-700 dark:text-amber-400",
    hover: "hover:bg-amber-500/15 hover:border-amber-500/30",
    glow: "hover:shadow-[0_0_12px_rgba(245,158,11,0.15)]",
  },
  blue: {
    bg: "bg-blue-500/8",
    border: "border-blue-500/15",
    text: "text-blue-700 dark:text-blue-400",
    hover: "hover:bg-blue-500/15 hover:border-blue-500/30",
    glow: "hover:shadow-[0_0_12px_rgba(59,130,246,0.15)]",
  },
  orange: {
    bg: "bg-orange-500/8",
    border: "border-orange-500/15",
    text: "text-orange-700 dark:text-orange-400",
    hover: "hover:bg-orange-500/15 hover:border-orange-500/30",
    glow: "hover:shadow-[0_0_12px_rgba(249,115,22,0.15)]",
  },
  lime: {
    bg: "bg-lime-500/8",
    border: "border-lime-500/15",
    text: "text-lime-700 dark:text-lime-400",
    hover: "hover:bg-lime-500/15 hover:border-lime-500/30",
    glow: "hover:shadow-[0_0_12px_rgba(132,204,22,0.15)]",
  },
  rose: {
    bg: "bg-rose-500/8",
    border: "border-rose-500/15",
    text: "text-rose-700 dark:text-rose-400",
    hover: "hover:bg-rose-500/15 hover:border-rose-500/30",
    glow: "hover:shadow-[0_0_12px_rgba(244,63,94,0.15)]",
  },
  fuchsia: {
    bg: "bg-fuchsia-500/8",
    border: "border-fuchsia-500/15",
    text: "text-fuchsia-700 dark:text-fuchsia-400",
    hover: "hover:bg-fuchsia-500/15 hover:border-fuchsia-500/30",
    glow: "hover:shadow-[0_0_12px_rgba(217,70,239,0.15)]",
  },
  emerald: {
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/15",
    text: "text-emerald-700 dark:text-emerald-400",
    hover: "hover:bg-emerald-500/15 hover:border-emerald-500/30",
    glow: "hover:shadow-[0_0_12px_rgba(16,185,129,0.15)]",
  },
};

const fallback = colorMap.emerald;

export default function SkillBadge({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  const c = colorMap[color] ?? fallback;
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md
        border transition-all duration-200 cursor-default
        ${c.bg} ${c.border} ${c.text} ${c.hover} ${c.glow}
        hover:scale-[1.04]
      `}
    >
      {name}
    </span>
  );
}
