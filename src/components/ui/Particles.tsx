"use client";

import { useEffect, useRef } from "react";

type Props = {
  density?: number;
  className?: string;
  interactive?: boolean;
};

export default function Particles({
  density = 70,
  className,
  interactive = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999, active: false };

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      hue: number;
    };
    let particles: P[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor((density * Math.min(width, 1600)) / 1200);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        hue: Math.random() < 0.5 ? 255 : 187,
      }));
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const TWO_PI = Math.PI * 2;
    const MAX = 116;
    const MAX2 = MAX * MAX;

    // Respect users / devices that prefer no motion: render one static frame.
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      if (reduceMotion) {
        // single static frame, no animation loop
        renderFrame();
        return;
      }
      // Skip work entirely when the tab is hidden — saves battery/CPU.
      if (typeof document !== "undefined" && document.hidden) {
        raf = requestAnimationFrame(draw);
        return;
      }
      renderFrame();
      raf = requestAnimationFrame(draw);
    };

    const renderFrame = () => {

      ctx.clearRect(0, 0, width, height);

      // 1) integrate motion + mouse repulsion
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (interactive && mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 14000) {
            const f = (1 - d2 / 14000) * 0.6;
            const inv = f / Math.sqrt(d2 + 1);
            p.x += dx * inv;
            p.y += dy * inv;
          }
        }
      }

      // 2) draw all dots of each colour in ONE batched path (no per-dot shadow)
      for (let pass = 0; pass < 2; pass++) {
        const hue = pass === 0 ? 255 : 187;
        ctx.fillStyle = pass === 0 ? "rgba(108,99,255,0.8)" : "rgba(0,229,255,0.8)";
        ctx.beginPath();
        for (const p of particles) {
          if (p.hue !== hue) continue;
          ctx.moveTo(p.x + p.r, p.y);
          ctx.arc(p.x, p.y, p.r, 0, TWO_PI);
        }
        ctx.fill();
      }

      // 3) connection lines — cheap early-outs before any sqrt
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          if (dx > MAX || dx < -MAX) continue;
          const dy = a.y - b.y;
          if (dy > MAX || dy < -MAX) continue;
          const d2 = dx * dx + dy * dy;
          if (d2 < MAX2) {
            const o = 1 - Math.sqrt(d2) / MAX;
            ctx.strokeStyle = `rgba(180,170,255,${o * 0.16})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    if (interactive) {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseout", onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseout", onLeave);
      }
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
    />
  );
}
