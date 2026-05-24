"use client";

import { useEffect, useState } from "react";
import type { GalleryItem, ReelCard } from "@/lib/data";

/**
 * A premium auto-scrolling "gallery wall": images split into columns that slide
 * vertically on a seamless infinite loop (alternating directions). Images shown
 * in FULL (natural ratio, never cropped). Optionally one column shows the reel
 * SCRIPT as cards. Pauses on hover; reduced-motion users get a static view.
 */
export default function GalleryWall({
  items,
  projectTitle,
  scriptCards,
}: {
  items: GalleryItem[];
  projectTitle: string;
  scriptCards?: ReelCard[];
}) {
  const [cols, setCols] = useState(3);

  useEffect(() => {
    const set = () => setCols(window.innerWidth < 1024 ? 2 : 3);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const hasScript = !!scriptCards && scriptCards.length > 0;
  if (items.length === 0 && !hasScript) return null;

  // Which column index is the script column (middle on desktop, 2nd otherwise).
  const scriptCol = hasScript ? (cols >= 3 ? 1 : 1) : -1;

  // Distribute images round-robin into the non-script columns.
  const imageColIdx = Array.from({ length: cols }, (_, i) => i).filter(
    (i) => i !== scriptCol
  );
  const imageColumns: GalleryItem[][] = imageColIdx.map(() => []);
  items.forEach((it, i) => imageColumns[i % imageColumns.length].push(it));

  const durations = [32, 40, 28, 36];
  const dirs: ("gallery-up" | "gallery-down")[] = [
    "gallery-up",
    "gallery-down",
    "gallery-up",
    "gallery-down",
  ];

  let imgPtr = 0;

  return (
    <div
      className="gallery-wall relative mt-12 overflow-hidden rounded-3xl border border-white/10"
      style={{
        height: "min(78vh, 720px)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, #000 7%, #000 93%, transparent)",
        maskImage:
          "linear-gradient(to bottom, transparent, #000 7%, #000 93%, transparent)",
      }}
    >
      <div className="flex h-full gap-4 p-4">
        {Array.from({ length: cols }, (_, ci) => {
          const isScript = ci === scriptCol;
          const col = isScript ? null : imageColumns[imgPtr++];
          const animStyle = {
            animationName: dirs[ci % dirs.length],
            animationDuration: `${durations[ci % durations.length]}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          } as const;

          return (
            <div key={ci} className="relative flex-1 overflow-hidden">
              <div className="gallery-col flex flex-col gap-4" style={animStyle}>
                {isScript
                  ? [...scriptCards!, ...scriptCards!].map((c, i) => (
                      <ScriptCard key={i} card={c} />
                    ))
                  : [...(col ?? []), ...(col ?? [])].map((g, i) => (
                      <figure
                        key={i}
                        className="group relative overflow-hidden rounded-2xl border border-white/10"
                      >
                        {g.src ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={g.src}
                            alt={g.label ?? `${projectTitle} still`}
                            loading="lazy"
                            className="block h-auto w-full"
                          />
                        ) : (
                          <div className={`relative aspect-[4/3] bg-gradient-to-br ${g.theme}`}>
                            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
                          </div>
                        )}
                        {g.label && (
                          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 text-white">
                            <div className="font-display text-base font-medium">{g.label}</div>
                          </figcaption>
                        )}
                      </figure>
                    ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
        Hover to pause
      </div>
    </div>
  );
}

function ScriptCard({ card }: { card: ReelCard }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 backdrop-blur">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-violet/40 to-cyan/30 blur-2xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet to-cyan" />
            {card.category}
          </span>
          <span className="font-mono text-[10px] text-white/45">{card.duration}</span>
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-2xl font-medium text-gradient-static">
            {String(card.n).padStart(2, "0")}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
            Reel
          </span>
        </div>

        <h4 className="mt-1.5 font-display text-base font-medium leading-snug tracking-tight text-white">
          {card.title}
        </h4>

        <div className="mt-3 rounded-xl border border-white/10 bg-black/30 p-3">
          <div className="mb-1 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.22em] text-cyan">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
            Hook · On screen
          </div>
          <p className="text-[12px] leading-snug text-white/80">&ldquo;{card.hook}&rdquo;</p>
        </div>
      </div>
    </article>
  );
}
