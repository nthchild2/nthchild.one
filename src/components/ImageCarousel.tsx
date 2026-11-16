"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/data/projects";

const SLIDE_HEIGHT = 460;

export default function ImageCarousel({
  images,
  label,
}: {
  images: GalleryImage[];
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
      className={`iconbtn carousel-arrow ${dir === 1 ? "next" : "prev"}`}
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
    <div className="surface carousel">
      <div
        ref={scroller}
        onScroll={update}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`${label} screenshots`}
        className="carousel-track"
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className="carousel-slide"
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
