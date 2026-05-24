"use client";

/**
 * Fills the mockup screen with a muted, looping, autoplaying screen-recording
 * of the real website. `object-cover` so it fills the device screen edge-to-edge.
 */
export default function ScreenVideo({
  src,
  width,
  height,
  poster,
}: {
  src: string;
  width: number;
  height: number;
  poster?: string;
}) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      style={{
        width,
        height,
        objectFit: "cover",
        display: "block",
        background: "#0a0a0b",
      }}
    />
  );
}
