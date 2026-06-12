"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export function HeroGreenBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.4 + 0.15,
        opacity: Math.random() * 0.5 + 0.1,
      }));
    };

    const drawAurora = (time: number) => {
      const t = time * 0.0003;

      const blobs = [
        { x: 0.2, y: 0.3, r: 0.45, ox: Math.sin(t) * 0.08, oy: Math.cos(t * 0.7) * 0.06 },
        { x: 0.75, y: 0.55, r: 0.4, ox: Math.cos(t * 0.8) * 0.1, oy: Math.sin(t * 0.6) * 0.08 },
        { x: 0.5, y: 0.8, r: 0.35, ox: Math.sin(t * 1.2) * 0.06, oy: Math.cos(t) * 0.05 },
      ];

      blobs.forEach((blob, i) => {
        const cx = (blob.x + blob.ox) * width;
        const cy = (blob.y + blob.oy) * height;
        const radius = blob.r * Math.min(width, height);

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        const alpha = i === 0 ? 0.18 : i === 1 ? 0.12 : 0.08;
        gradient.addColorStop(0, `rgba(34, 211, 99, ${alpha})`);
        gradient.addColorStop(0.4, `rgba(34, 211, 99, ${alpha * 0.4})`);
        gradient.addColorStop(1, "rgba(34, 211, 99, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });
    };

    const drawParticles = () => {
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 99, ${p.opacity})`;
        ctx.fill();
      });
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      drawAurora(time);
      drawParticles();
      frame = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
