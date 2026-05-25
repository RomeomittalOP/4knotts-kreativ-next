"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Particles from "@/components/ui/Particles";
import { type Project } from "@/lib/data";

function ProjectMark({ project }: { project: Project }) {
  // If a logo image is provided, use it instead of the hand-drawn fallback.
  if (project.logoImage) {
    return (
      <div className="grid h-full w-full place-items-center">
        <div className="relative h-[55%] w-[55%]">
          <Image
            src={project.logoImage}
            alt={`${project.title} logo`}
            fill
            sizes="(max-width: 768px) 60vw, 30vw"
            className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            priority={false}
            unoptimized
          />
        </div>
      </div>
    );
  }
  const slug = project.slug;
  if (slug === "4-knotts-stationery") {
    return (
      <div className="text-center text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <div className="font-display text-7xl font-medium leading-none md:text-9xl">4K.</div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.4em] opacity-80">Stationery Co.</div>
      </div>
    );
  }
  if (slug === "omega") {
    return (
      <div className="text-center text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
        <div className="font-display text-8xl font-light leading-none md:text-[10rem]">Ω</div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.4em] opacity-80">OMEGA · 2024</div>
      </div>
    );
  }
  if (slug === "vriksh") {
    return (
      <div className="text-center text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <svg viewBox="0 0 120 120" className="mx-auto h-28 w-28 md:h-36 md:w-36">
          <g fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
            <path d="M60 110 V60" />
            <path d="M60 60 C40 50, 30 35, 32 18 C50 24, 60 38, 60 58" />
            <path d="M60 60 C80 50, 90 35, 88 18 C70 24, 60 38, 60 58" />
            <path d="M60 78 C45 72, 38 62, 40 50" opacity="0.6" />
            <path d="M60 78 C75 72, 82 62, 80 50" opacity="0.6" />
          </g>
        </svg>
        <div className="mt-2 font-display text-2xl tracking-wide">vriksh</div>
      </div>
    );
  }
  if (slug === "veloura") {
    return (
      <div className="text-center text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        <div className="font-display text-5xl font-light tracking-[0.32em] md:text-7xl">
          VELOURA
        </div>
        <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.4em] opacity-80">
          by 4 Knotts
        </div>
      </div>
    );
  }
  return (
    <div className="text-center text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      <div className="font-display text-7xl font-medium tracking-[0.06em] md:text-9xl">ACCD</div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.4em] opacity-80">Air Cargo Club · Delhi</div>
    </div>
  );
}

function PresentationTile({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 16 });
  const sy = useSpring(y, { stiffness: 120, damping: 16 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.03);
    y.set((e.clientY - r.top - r.height / 2) * 0.03);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.55 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="hover"
        aria-label={`Open ${project.title} presentation`}
        className="group block"
      >
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          onMouseEnter={() => setHovered(true)}
          style={{ x: sx, y: sy }}
          className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10"
        >
          {/* Glow halo */}
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-violet/30 to-cyan/30 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

          {/* Cover */}
          <motion.div
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
          >
           {project.coverImage ? (
  <div className="relative h-full w-full overflow-hidden">
    <Image
      src={project.coverImage}
      fill
      className="object-cover"
      alt={project.title}
      sizes="(max-width:768px) 100vw, 50vw"
      unoptimized
    />
  </div>
) : null} 
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
            {!project.coverImage && (
              <div className="absolute inset-0 mix-blend-overlay opacity-50">
                <svg width="100%" height="100%" aria-hidden>
                  <defs>
                    <pattern id={`p-${project.slug}`} width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#p-${project.slug})`} />
                </svg>
              </div>
            )}
            {!project.coverImage && (
              <div className="absolute inset-0 grid place-items-center">
                <ProjectMark project={project} />
              </div>
            )}
            {project.coverImage && project.logoImage && (
              // When a cover is set, the logo floats top-left as a small mark.
              <div className="absolute left-5 top-5 h-10 w-24">
                <Image
                  src={project.logoImage}
                  alt={`${project.title} logo`}
                  fill
                  sizes="160px"
                  className="object-contain object-left drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
                  unoptimized
                />
              </div>
            )}
          </motion.div>

          {/* Bottom gradient */}
          <motion.div
            animate={{ opacity: hovered ? 0.65 : 0.35 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"
          />

          {/* Meta + Enter pill */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/80">
                0{index + 1} · {project.tag}
              </div>
              <div className="mt-2 font-display text-3xl font-medium tracking-tight text-white md:text-5xl">
                {project.title}
              </div>
            </div>
            <motion.div
              animate={{
                opacity: hovered ? 1 : 0.7,
                x: hovered ? 0 : -4,
              }}
              transition={{ duration: 0.4 }}
              className="hidden shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-ink md:inline-flex"
            >
              Enter
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function PresentationMenu({ projects }: { projects: Project[] }) {
  return (
    <main className="relative isolate min-h-[100svh] overflow-hidden noise">
      {/* Background */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,99,255,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,229,255,0.14),transparent_55%)]" />
      </div>
      <div className="blob top-[-12%] left-[-6%] h-[45vw] w-[45vw] bg-violet/35" />
      <div className="blob bottom-[-18%] right-[-10%] h-[45vw] w-[45vw] bg-cyan/35" />
      <div className="absolute inset-0 -z-20">
        <Particles className="absolute inset-0 h-full w-full" density={36} />
      </div>

      <div className="container-px relative mx-auto flex min-h-[100svh] max-w-7xl flex-col px-6 pt-10 pb-16 md:pt-16">
        {/* Top brand row */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between"
        >
          <Link
            href="/"
            data-cursor="hover"
            className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight"
          >
            <span className="relative grid h-6 w-6 place-items-center overflow-hidden rounded-full">
              <span className="absolute inset-0 bg-gradient-to-br from-violet to-cyan" />
              <span className="relative font-mono text-[10px] font-bold text-ink">4K</span>
            </span>
            <span>
              4 Knotts <span className="text-gradient-static">Kreativ</span>
            </span>
          </Link>

          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
            {projects.length} presentations
          </div>
        </motion.header>

        {/* Title block */}
        <div className="mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-white/70 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-cyan" />
            </span>
            Project Presentations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.03em]"
          >
            Pick a project to <span className="text-gradient">present</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 max-w-xl text-balance text-white/60 md:text-lg"
          >
            Open any tile to enter a full-screen presentation — large mockups, live previews, and a closer look at each project.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid flex-1 grid-cols-1 gap-6 md:mt-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <PresentationTile key={p.slug} project={p} index={i} />
          ))}
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-white/40"
        >
          <span>© {new Date().getFullYear()} · 4 Knotts Kreativ</span>
          <span>Press a tile to begin</span>
        </motion.div>
      </div>
    </main>
  );
}
