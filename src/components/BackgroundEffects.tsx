/**
 * Decorative background orbs and grain texture.
 * Purely cosmetic — pointer-events-none, behind all content.
 */
export default function BackgroundEffects() {
  return (
    <>
      {/* Mesh gradient overlay */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none bg-mesh"
        aria-hidden
      />

      {/* Floating gradient orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden>
        {/* Top-right emerald orb */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06] blur-3xl animate-float" />
        {/* Bottom-left teal orb */}
        <div className="absolute -bottom-48 -left-48 w-[32rem] h-[32rem] rounded-full bg-teal-500/[0.03] dark:bg-teal-500/[0.05] blur-3xl animate-float-delayed" />
        {/* Center-right subtle violet orb */}
        <div className="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-violet-500/[0.02] dark:bg-violet-500/[0.04] blur-3xl animate-float" />
      </div>
    </>
  );
}
