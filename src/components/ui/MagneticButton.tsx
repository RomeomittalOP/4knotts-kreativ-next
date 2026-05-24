"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <span
        className={cn(
          "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors",
          variant === "primary"
            ? "text-ink"
            : "border border-white/15 text-snow hover:border-white/40",
          className
        )}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-violet to-cyan transition-transform duration-700 group-hover:scale-110" />
        )}
        {variant === "primary" && (
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan to-violet opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}
        <span className="relative z-10">{children}</span>
        <svg
          className="relative z-10 h-4 w-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
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
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} data-cursor="hover">
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} data-cursor="hover" type="button">
      {content}
    </button>
  );
}
