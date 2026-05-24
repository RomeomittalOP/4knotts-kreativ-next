"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/lib/data";
import LaptopMockup from "@/components/showcase/LaptopMockup";
import PhoneMockup from "@/components/showcase/PhoneMockup";
import GalleryWall from "@/components/showcase/GalleryWall";

export default function ShowcaseClient({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project;
  next: Project;
}) {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <>
      {/* ------------ HERO ------------ */}
      <section
        ref={heroRef}
        className={`relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-gradient-to-br pt-32 pb-16 noise ${project.accent}`}
      >
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-10 object-cover opacity-80"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent to-ink/95" />

        <motion.div style={{ y: heroY }} className="container-px relative mx-auto w-full max-w-7xl">
          <Link
            href="/"
            data-cursor="hover"
            className="group inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
          >
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            All presentations
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/85">
                {project.tag}
              </span>
              <span className="h-px w-12 bg-white/30" />
              <span className="font-mono text-[11px] text-white/65">{project.year}</span>
            </div>

            <h1 className="mt-5 font-display text-[clamp(2.6rem,9vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base text-white/85 md:text-xl">
              {project.longIntro}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ------------ LAPTOP SHOWCASE ------------ */}
      <section className="relative section-py">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet to-cyan" />
              Live preview
            </div>
            <h2 className="mt-5 font-display text-balance text-3xl font-medium tracking-tight md:text-5xl">
              {project.shortIntro}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20"
          >
            <LaptopFitted project={project} />
          </motion.div>
        </div>
      </section>

      {/* ------------ PHONE + COPY ------------ */}
      <section className="relative section-py">
        <div className="container-px mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              Designed for every screen
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-5xl">
              Mobile-first by craft, not by checklist.
            </h2>
            <p className="mt-5 max-w-lg text-white/65 md:text-lg">
              Every layout was composed to feel inevitable on a phone first — then re-orchestrated for tablet and desktop with the same intent.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/85"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-violet to-cyan text-ink">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex justify-center"
          >
            <PhoneMockup project={project} width={280} />
          </motion.div>
        </div>
      </section>

      {/* ------------ GALLERY ------------ */}
      <section className="relative section-py">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                Gallery
              </span>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-5xl">
                A closer look.
              </h2>
            </div>
            <span className="hidden text-xs uppercase tracking-[0.2em] text-white/45 md:inline">
              {project.gallery.length} stills
            </span>
          </div>

          {/* Auto-scrolling gallery wall — full images, never cropped.
              One column shows the reel script (when provided). */}
          <GalleryWall
            items={project.gallery}
            projectTitle={project.title}
            scriptCards={project.reelScript}
          />
        </div>
      </section>

      {/* ------------ PREV / NEXT ------------ */}
      <section className="relative section-py">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2">
            <NavCard label="Previous project" project={prev} direction="prev" />
            <NavCard label="Next project" project={next} direction="next" />
          </div>
        </div>
      </section>
    </>
  );
}

/* Laptop sized to fit responsively. The mockup uses a fixed CSS width,
   so we render two sizes via Tailwind hidden/block. */
function LaptopFitted({ project }: { project: Project }) {
  return (
    <>
      <div className="hidden md:block">
        <LaptopMockup project={project} width={980} />
      </div>
      <div className="hidden sm:block md:hidden">
        <LaptopMockup project={project} width={640} />
      </div>
      <div className="sm:hidden">
        <LaptopMockup project={project} width={340} />
      </div>
    </>
  );
}

function NavCard({
  label,
  project,
  direction,
}: {
  label: string;
  project: Project;
  direction: "prev" | "next";
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="hover"
      className="group relative block overflow-hidden rounded-3xl border border-white/10"
    >
      <div className={`relative aspect-[16/9] bg-gradient-to-br ${project.accent}`}>
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-between gap-6 p-6 md:p-10">
          <div className="text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-90">
              {label}
            </div>
            <div className="mt-2 font-display text-3xl font-medium tracking-tight md:text-5xl">
              {project.title}
            </div>
            <div className="mt-1 text-xs text-white/70">{project.tag}</div>
          </div>
          <div
            className={`hidden h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-ink transition-transform duration-500 md:grid ${
              direction === "next"
                ? "group-hover:translate-x-2"
                : "group-hover:-translate-x-2"
            }`}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              style={direction === "prev" ? { transform: "scaleX(-1)" } : undefined}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
