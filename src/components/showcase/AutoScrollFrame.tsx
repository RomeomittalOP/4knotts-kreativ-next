"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * Renders children inside a clipped viewport that auto-scrolls vertically.
 * The children are expected to be a long composed "fake website" element.
 *
 * `scaledContentWidth` is the natural (CSS) width of the children; we scale it
 * to match `viewportWidth` and ping-pong the y translate through the visible
 * portion. Distance is computed from the measured natural height × scale.
 */
export default function AutoScrollFrame({
  children,
  viewportWidth,
  viewportHeight,
  scaledContentWidth,
  speed = 28, // px per second in scaled pixel space
  pauseOnHover = true,
  className,
}: {
  children: ReactNode;
  viewportWidth: number;
  viewportHeight: number;
  scaledContentWidth: number;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}) {
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [naturalH, setNaturalH] = useState(0);
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  const scale = viewportWidth / scaledContentWidth;
  const scaledH = naturalH * scale;
  const distance = Math.max(0, scaledH - viewportHeight);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const measure = () => setNaturalH(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (distance <= 0) return;
    const duration = distance / speed;

    let cancelled = false;
    const loop = async () => {
      while (!cancelled) {
        if (hovered && pauseOnHover) {
          await new Promise((r) => setTimeout(r, 200));
          continue;
        }
        await controls.start({
          y: -distance,
          transition: { duration, ease: "linear" },
        });
        if (cancelled) break;
        await new Promise((r) => setTimeout(r, 700));
        if (cancelled) break;
        await controls.start({
          y: 0,
          transition: { duration: duration * 0.55, ease: "easeInOut" },
        });
        await new Promise((r) => setTimeout(r, 500));
      }
    };
    loop();
    return () => {
      cancelled = true;
      controls.stop();
    };
  }, [distance, speed, controls, hovered, pauseOnHover]);

  return (
    <div
      className={"relative overflow-hidden " + (className ?? "")}
      style={{ width: viewportWidth, height: viewportHeight }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* y-translate animator (in scaled px space) */}
      <motion.div animate={controls} initial={{ y: 0 }} style={{ willChange: "transform" }}>
        {/* scale wrapper */}
        <div
          style={{
            width: scaledContentWidth,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {/* measure target */}
          <div ref={measureRef}>{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
