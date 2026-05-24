"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onShowcase = pathname?.startsWith("/work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide the navbar on the home menu — it has its own header.
  if (!onShowcase) return null;

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-[9000] transition-all duration-500",
        scrolled ? "py-2.5" : "py-5"
      )}
    >
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          data-cursor="hover"
          className={cn(
            "group flex items-center gap-2 rounded-full px-4 py-2 font-display text-sm font-semibold tracking-tight transition-all",
            scrolled ? "glass" : "bg-transparent"
          )}
        >
          <span className="relative grid h-6 w-6 place-items-center overflow-hidden rounded-full">
            <span className="absolute inset-0 bg-gradient-to-br from-violet to-cyan" />
            <span className="relative font-mono text-[10px] font-bold text-ink">4K</span>
          </span>
          <span>
            4 Knotts <span className="text-gradient-static">Kreativ</span>
          </span>
        </Link>

        <Link
          href="/"
          data-cursor="hover"
          className={cn(
            "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all",
            scrolled ? "glass" : "bg-white/[0.04] border border-white/10"
          )}
        >
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          All presentations
        </Link>
      </div>
    </motion.header>
  );
}
