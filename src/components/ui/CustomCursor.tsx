"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);
  const enabledRef = useRef(true);

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    enabledRef.current = isFine;
    if (!isFine) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onEnter = () => setHidden(false);
    const onLeave = () => setHidden(true);

    const interactiveSelector =
      "a, button, [role='button'], input, textarea, [data-cursor='hover']";
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest && t.closest(interactiveSelector)) setHover(true);
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest && t.closest(interactiveSelector)) setHover(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [x, y]);

  if (!enabledRef.current && typeof window !== "undefined") return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <div className="h-2 w-2 rounded-full bg-white" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hover ? 1.8 : 1,
          opacity: hidden ? 0 : 1,
          borderColor: hover ? "rgba(0,229,255,0.9)" : "rgba(255,255,255,0.55)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-9 w-9 rounded-full border" />
      </motion.div>
    </>
  );
}
