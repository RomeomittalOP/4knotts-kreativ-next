"use client";

import AutoScrollFrame from "./AutoScrollFrame";
import ProjectPreviewFrame from "./ProjectPreviewFrame";
import PreviewStack from "./PreviewStack";
import ScreenVideo from "./ScreenVideo";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
  width?: number; // overall device width in CSS px
};

/**
 * A pure-CSS realistic laptop shell with an inner viewport that hosts
 * an auto-scrolling project preview.
 */
export default function LaptopMockup({ project, width = 980 }: Props) {
  // Aspect of typical laptop lid: ~16/10 plus hinge below.
  const lidAR = 16 / 10;
  const lidW = width;
  const lidH = Math.round(lidW / lidAR);

  // Viewport inset (the "screen" inside the lid bezel).
  const bezel = Math.round(lidW * 0.018);
  const viewportW = lidW - bezel * 2;
  const viewportH = lidH - bezel * 2;

  const hingeH = Math.round(lidW * 0.018);
  const baseW = Math.round(lidW * 1.06);
  const baseH = Math.round(lidW * 0.022);

  return (
    <div
      className="relative mx-auto"
      style={{ width: baseW }}
      aria-label={`${project.title} — laptop preview`}
    >
      {/* Lid */}
      <div
        className="relative mx-auto rounded-[22px] border border-white/15 bg-gradient-to-b from-[#1f1f24] to-[#0e0e12] p-[6px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)]"
        style={{ width: lidW }}
      >
        <div
          className="relative overflow-hidden rounded-[16px] bg-black"
          style={{ width: viewportW + bezel * 2, height: viewportH + bezel * 2, padding: bezel }}
        >
          {/* Camera notch */}
          <div className="absolute left-1/2 top-[3px] z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#222]" />

          {/* Viewport */}
          <div
            className="relative overflow-hidden rounded-md bg-[#0a0a0b]"
            style={{ width: viewportW, height: viewportH }}
          >
            {project.previewVideo ? (
              <ScreenVideo
                src={project.previewVideo}
                poster={project.coverImage}
                width={viewportW}
                height={viewportH}
              />
            ) : (
              <AutoScrollFrame
                viewportWidth={viewportW}
                viewportHeight={viewportH}
                scaledContentWidth={1280}
                speed={26}
              >
                {project.previewImages && project.previewImages.length > 0 ? (
                  <PreviewStack
                    images={project.previewImages}
                    width={1280}
                    alt={project.title}
                  />
                ) : (
                  <ProjectPreviewFrame project={project} width={1280} />
                )}
              </AutoScrollFrame>
            )}

            {/* Subtle screen glare */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 100%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div
        className="mx-auto bg-gradient-to-b from-[#1c1c22] to-[#0c0c10]"
        style={{ width: lidW, height: hingeH, borderRadius: "0 0 6px 6px" }}
      />

      {/* Base */}
      <div
        className="relative mx-auto rounded-b-[14px] bg-gradient-to-b from-[#1f1f24] to-[#0c0c10] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]"
        style={{ width: baseW, height: baseH }}
      >
        {/* Trackpad notch (visual hint) */}
        <div
          className="absolute left-1/2 top-1/2 h-[3px] w-[14%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50"
        />
      </div>

      {/* Floor shadow */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: -28,
          width: baseW * 0.86,
          height: 32,
          background:
            "radial-gradient(ellipse at center, rgba(108,99,255,0.35), rgba(0,0,0,0) 65%)",
          filter: "blur(14px)",
        }}
      />
    </div>
  );
}
