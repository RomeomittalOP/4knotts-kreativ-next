"use client";

/**
 * A long vertical stack of screenshots, each rendered at the container width
 * with intrinsic aspect ratio. Designed to live inside an AutoScrollFrame,
 * replacing the hand-composed ProjectPreviewFrame when a project provides real
 * preview screenshots.
 *
 * Uses plain <img> so each image keeps its natural height — the autoscroll
 * measures the resulting stack height after load.
 */
export default function PreviewStack({
  images,
  width,
  alt,
}: {
  images: string[];
  width: number;
  alt: string;
}) {
  return (
    <div style={{ width, background: "#0a0a0b" }}>
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={src}
          alt={`${alt} screenshot ${i + 1}`}
          width={width}
          style={{
            display: "block",
            width,
            height: "auto",
          }}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
}
