"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/data/projects";

const SLIDE_HEIGHT = 460;

export default function ImageCarousel({
  images,
  gradient,
  label,
}: {
  images: GalleryImage[];
  gradient: string;
  label: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = scroller.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByPage(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByPage(-1);
    }
  };

  const arrow = (dir: 1 | -1, enabled: boolean) => (
    <button
      type="button"
      onClick={() => scrollByPage(dir)}
      disabled={!enabled}
      aria-label={dir === 1 ? "Next screenshots" : "Previous screenshots"}
      className={`absolute top-1/2 -translate-y-1/2 ${dir === 1 ? "right-3" : "left-3"} z-10 hidden sm:flex w-10 h-10 items-center justify-center rounded-full card border border-[hsl(var(--border))] text-[hsl(var(--foreground))] shadow-md transition-all hover:border-emerald-500/40 disabled:opacity-0 disabled:pointer-events-none`}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            dir === 1
              ? "M8.25 4.5l7.5 7.5-7.5 7.5"
              : "M15.75 19.5L8.25 12l7.5-7.5"
          }
        />
      </svg>
    </button>
  );

  return (
    <div
      className={`relative rounded-2xl bg-gradient-to-br ${gradient} card overflow-hidden`}
    >
      <div
        ref={scroller}
        onScroll={update}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`${label} screenshots`}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth p-6 sm:p-8 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&>:first-child]:ml-auto [&>:last-child]:mr-auto"
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className="snap-center shrink-0 overflow-hidden rounded-xl shadow-lg"
            style={{
              height: SLIDE_HEIGHT,
              aspectRatio: img.width / img.height,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={Math.round((SLIDE_HEIGHT * img.width) / img.height)}
              height={SLIDE_HEIGHT}
              priority={i < 2}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          {arrow(-1, canPrev)}
          {arrow(1, canNext)}
        </>
      )}
    </div>
  );
}
