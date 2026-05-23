import type { SkillCategory } from "@/data/projects";
import SkillBadge from "./SkillBadge";

const dotColorMap: Record<string, string> = {
  cyan: "bg-cyan-500",
  violet: "bg-violet-500",
  amber: "bg-amber-500",
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  lime: "bg-lime-500",
  rose: "bg-rose-500",
  fuchsia: "bg-fuchsia-500",
  emerald: "bg-emerald-500",
};

export default function SkillGroup({ category }: { category: SkillCategory }) {
  const dotColor = dotColorMap[category.color] ?? "bg-emerald-500";

  return (
    <div>
      <p className="text-xs font-medium text-[hsl(var(--foreground))] mb-2.5 flex items-center gap-2">
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColor}`}
          aria-hidden
        />
        {category.category}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {category.items.map((item) => (
          <SkillBadge key={item} name={item} color={category.color} />
        ))}
      </div>
    </div>
  );
}
