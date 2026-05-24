"use client";

import type { FrameSection, Project } from "@/lib/data";

/**
 * A composed "fake website" rendered as a long vertical document.
 * Designed to be scaled / clipped inside Laptop and Phone mockup viewports.
 *
 * Sized in fixed-ish units (px) so we can predictably translate/scale it.
 */
export default function ProjectPreviewFrame({
  project,
  width = 1280,
  compact = false,
}: {
  project: Project;
  width?: number;
  compact?: boolean;
}) {
  const styleVars = {
    "--bg": project.themeBg,
    "--primary": project.themePrimary,
    "--accent": project.themeAccent,
  } as React.CSSProperties;

  return (
    <div
      style={{ width, ...styleVars }}
      className="relative font-sans text-white"
    >
      <div className="bg-[var(--bg)]">
        {project.frame.map((s, i) => (
          <FrameBlock key={i} section={s} compact={compact} />
        ))}
      </div>
    </div>
  );
}

function FrameBlock({
  section,
  compact,
}: {
  section: FrameSection;
  compact: boolean;
}) {
  switch (section.kind) {
    case "nav":
      return (
        <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-10 py-5 backdrop-blur">
          <div className="font-display text-lg font-semibold text-white">
            {section.brand}
          </div>
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.18em] text-white/65 sm:flex">
            <span>Work</span>
            <span>About</span>
            <span>Journal</span>
            <span>Contact</span>
          </nav>
          <span className="rounded-full bg-[var(--primary)] px-4 py-1.5 text-xs font-medium text-black">
            Visit
          </span>
        </div>
      );

    case "hero":
      return (
        <section className="relative overflow-hidden px-10 py-24">
          <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[var(--primary)] opacity-25 blur-3xl" />
          <div className="absolute -right-32 -bottom-32 h-[420px] w-[420px] rounded-full bg-[var(--accent)] opacity-25 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              New release
            </div>
            <h1
              className={`font-display font-medium tracking-tight text-white ${
                compact ? "text-3xl leading-tight" : "text-6xl leading-[1.05]"
              }`}
            >
              {section.title}
            </h1>
            {section.subtitle && (
              <p
                className={`mt-5 max-w-xl text-white/65 ${
                  compact ? "text-sm" : "text-lg"
                }`}
              >
                {section.subtitle}
              </p>
            )}
            {section.cta && (
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-black">
                  {section.cta}
                </span>
                <span className="rounded-full border border-white/20 px-6 py-3 text-sm text-white">
                  Learn more
                </span>
              </div>
            )}
          </div>
        </section>
      );

    case "marquee":
      return (
        <div className="border-y border-white/10 bg-black/40 py-4 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-white/55">
            {[...section.words, ...section.words, ...section.words].map((w, i) => (
              <span key={i} className="flex items-center gap-12">
                <span className="h-1 w-1 rounded-full bg-[var(--primary)]" />
                {w}
              </span>
            ))}
          </div>
        </div>
      );

    case "grid":
      return (
        <section className="px-10 py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2
              className={`font-display font-medium ${
                compact ? "text-xl" : "text-3xl"
              }`}
            >
              Featured
            </h2>
            <span className="text-xs uppercase tracking-[0.2em] text-white/55">
              View all →
            </span>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {section.items.map((it, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div
                  className="aspect-[4/5] bg-gradient-to-br"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--accent), var(--primary))`,
                  }}
                />
                <div className="p-4">
                  <div
                    className={`font-medium ${compact ? "text-xs" : "text-sm"}`}
                  >
                    {it.title}
                  </div>
                  {it.sub && (
                    <div className="mt-1 text-[11px] text-white/55">
                      {it.sub}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case "splitImage":
      return (
        <section className="grid grid-cols-12 gap-10 px-10 py-24">
          <div className="col-span-6 overflow-hidden rounded-3xl border border-white/10">
            <div
              className="aspect-[4/3] w-full"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--primary), var(--accent))`,
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <h2
              className={`font-display font-medium tracking-tight ${
                compact ? "text-2xl" : "text-4xl"
              }`}
            >
              {section.title}
            </h2>
            <p
              className={`mt-5 text-white/65 ${
                compact ? "text-sm" : "text-base"
              }`}
            >
              {section.body}
            </p>
            <div className="mt-7 flex gap-3">
              <span className="rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black">
                Read story
              </span>
              <span className="rounded-full border border-white/20 px-5 py-2.5 text-xs text-white">
                Watch
              </span>
            </div>
          </div>
        </section>
      );

    case "feature":
      return (
        <section className="px-10 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-6 h-px w-20 bg-white/30" />
            <h2
              className={`font-display font-medium ${
                compact ? "text-2xl" : "text-4xl"
              }`}
            >
              {section.title}
            </h2>
            <p className="mt-4 text-white/65">{section.body}</p>
          </div>
        </section>
      );

    case "cta":
      return (
        <section
          className="relative overflow-hidden px-10 py-24 text-center"
          style={{
            backgroundImage: `linear-gradient(135deg, var(--accent), var(--primary))`,
          }}
        >
          <h2
            className={`font-display font-medium text-black ${
              compact ? "text-2xl" : "text-5xl"
            }`}
          >
            {section.title}
          </h2>
          <div className="mt-6 inline-block rounded-full bg-black px-7 py-3 text-sm font-medium text-white">
            {section.cta} →
          </div>
        </section>
      );

    case "footer":
      return (
        <footer className="grid grid-cols-3 gap-10 border-t border-white/10 bg-black/40 px-10 py-12 text-xs text-white/55">
          <div>
            <div className="font-display text-base text-white">
              {section.brand}
            </div>
            <p className="mt-3 max-w-xs">
              © {new Date().getFullYear()} — All rights reserved.
            </p>
          </div>
          <div>
            <div className="mb-3 uppercase tracking-[0.18em] text-white/40">
              Sitemap
            </div>
            <ul className="space-y-1.5">
              <li>Home</li>
              <li>Work</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="mb-3 uppercase tracking-[0.18em] text-white/40">
              Follow
            </div>
            <ul className="space-y-1.5">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Behance</li>
            </ul>
          </div>
        </footer>
      );

    default:
      return null;
  }
}
