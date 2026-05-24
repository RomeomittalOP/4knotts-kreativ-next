"use client";

import AutoScrollFrame from "./AutoScrollFrame";
import ProjectPreviewFrame from "./ProjectPreviewFrame";
import PreviewStack from "./PreviewStack";
import ScreenVideo from "./ScreenVideo";
import InstagramMock from "./InstagramMock";
import type { Project } from "@/lib/data";

type Props = {
  project: Project;
  width?: number;
};

/**
 * A pure-CSS realistic phone shell with an inner viewport that hosts an
 * auto-scrolling project preview. Designed to feel like a modern flagship —
 * thin bezels, rounded corners, dynamic-island notch.
 */
export default function PhoneMockup({ project, width = 280 }: Props) {
  // Aspect ratio ~ 19.5/9 modern flagship
  const ratio = 19.5 / 9;
  const w = width;
  const h = Math.round(w * ratio);

  const bezel = Math.round(w * 0.025);
  const radius = Math.round(w * 0.13);

  const viewportW = w - bezel * 2;
  const viewportH = h - bezel * 2;

  return (
    <div
      className="relative"
      style={{ width: w }}
      aria-label={`${project.title} — phone preview`}
    >
      {/* Floor shadow */}
      <div
        className="pointer-events-none absolute left-1/2 -bottom-6 -translate-x-1/2"
        style={{
          width: w * 0.8,
          height: 30,
          background:
            "radial-gradient(ellipse at center, rgba(0,229,255,0.30), rgba(0,0,0,0) 65%)",
          filter: "blur(14px)",
        }}
      />

      {/* Outer frame */}
      <div
        className="relative bg-gradient-to-b from-[#1d1d22] to-[#0b0b10] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
        style={{ width: w, height: h, borderRadius: radius, padding: bezel }}
      >
        {/* Side button hints */}
        <span
          className="absolute -right-[2px] top-[18%] block w-[2px] rounded-r bg-white/10"
          style={{ height: w * 0.18 }}
        />
        <span
          className="absolute -left-[2px] top-[20%] block w-[2px] rounded-l bg-white/10"
          style={{ height: w * 0.08 }}
        />
        <span
          className="absolute -left-[2px] top-[32%] block w-[2px] rounded-l bg-white/10"
          style={{ height: w * 0.12 }}
        />

        {/* Screen */}
        <div
          className="relative overflow-hidden bg-black"
          style={{
            width: viewportW,
            height: viewportH,
            borderRadius: radius - bezel,
          }}
        >
          {/* Dynamic island */}
          <div
            className="absolute left-1/2 z-20 -translate-x-1/2 rounded-full bg-black"
            style={{ top: 8, width: w * 0.32, height: w * 0.085 }}
          />

          {project.previewVideoMobile ? (
            <ScreenVideo
              src={project.previewVideoMobile}
              width={viewportW}
              height={viewportH}
            />
          ) : project.instagramPosts && project.instagramPosts.length > 0 ? (
            <InstagramMock
              project={project}
              width={viewportW}
              height={viewportH}
            />
          ) : (
            <AutoScrollFrame
              viewportWidth={viewportW}
              viewportHeight={viewportH}
              scaledContentWidth={420}
              speed={22}
            >
              {project.previewImages && project.previewImages.length > 0 ? (
                <PreviewStack
                  images={project.previewImages}
                  width={420}
                  alt={project.title}
                />
              ) : (
                <ProjectPreviewFrame project={project} width={420} compact />
              )}
            </AutoScrollFrame>
          )}

          {/* Glare */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(125deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
