"use client";

import type { Viewport } from "next";
import { Outfit } from "next/font/google";
import type { PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import WhatsAppButton from "@/components/sub/WhatsAppButton";
import "@/app/globals.css";
import { StarsCanvas } from "@/components/main/star-background";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020008" },
    { media: "(prefers-color-scheme: light)", color: "#f4f0ff" },
  ],
};

/* ─────────────────────────────────────────────
   ANIMATED STARS BACKGROUND
   (parallax layers, shooting stars, nebula glow)
───────────────────────────────────────────── 
function StarsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", resize);

    // ── Star layers (parallax depth) ──
    interface Star {
      x: number; y: number;
      r: number; speed: number;
      opacity: number; twinkleSpeed: number; twinkleOffset: number;
      color: string;
    }

    const COLORS = ["#ffffff", "#ccd6f6", "#a8d8ea", "#00f5ff", "#bf9fff", "#ff6ec7"];
    const COUNTS = [180, 100, 60]; // layers: slow, mid, fast
    const SPEEDS = [1.2, 2.5, 4.5]; // fast — matches blackhole video motion
    const SIZES  = [0.6, 1.0, 1.6];

    const layers: Star[][] = COUNTS.map((count, li) =>
      Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: SIZES[li] * (0.5 + Math.random() * 0.8),
        speed: SPEEDS[li] * (0.7 + Math.random() * 0.6),
        opacity: 0.3 + Math.random() * 0.7,
        twinkleSpeed: 0.005 + Math.random() * 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    );

    // ── Shooting stars ──
    interface Shoot {
      x: number; y: number;
      vx: number; vy: number;
      len: number; life: number; maxLife: number;
      color: string;
    }
    const shoots: Shoot[] = [];

    const spawnShoot = () => {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
      const speed = 8 + Math.random() * 8;
      shoots.push({
        x: Math.random() * W,
        y: Math.random() * H * 0.5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: 80 + Math.random() * 120,
        life: 0,
        maxLife: 40 + Math.random() * 30,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

    // ── Nebula blobs (static, painted once) ──
    const nebulaCanvas = document.createElement("canvas");
    nebulaCanvas.width = W;
    nebulaCanvas.height = H;
    const nc = nebulaCanvas.getContext("2d", { alpha: true })!;
    [
      { x: W * 0.15, y: H * 0.25, r: 260, color: "rgba(0,245,255,0.04)" },
      { x: W * 0.8,  y: H * 0.6,  r: 320, color: "rgba(191,159,255,0.05)" },
      { x: W * 0.5,  y: H * 0.85, r: 200, color: "rgba(255,110,199,0.03)" },
    ].forEach(({ x, y, r, color }) => {
      const g = nc.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, color);
      g.addColorStop(1, "transparent");
      nc.fillStyle = g;
      nc.fillRect(0, 0, W, H);
    });

    let frame = 0;
    let rafId: number;

    const draw = () => {
      frame++;

      // Transparent — page/blackhole bg shows through
      ctx.clearRect(0, 0, W, H);

      // Nebula (static overlay)
      ctx.drawImage(nebulaCanvas, 0, 0);

      // Stars
      layers.forEach((layer) => {
        layer.forEach((s) => {
          // Twinkle
          const tw = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
          const alpha = Math.max(0.1, s.opacity + tw * 0.3);

          // Move downward (parallax drift)
          s.y += s.speed;
          if (s.y > H + 2) { s.y = -2; s.x = Math.random() * W; }

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = s.color;
          ctx.shadowColor = s.color;
          ctx.shadowBlur = s.r > 1.2 ? 6 : 2;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      });

      // Shooting stars
      if (frame % 90 === 0 && Math.random() > 0.3) spawnShoot();

      shoots.forEach((s, i) => {
        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        const progress = s.life / s.maxLife;
        const alpha = progress < 0.3
          ? progress / 0.3
          : 1 - (progress - 0.3) / 0.7;

        const tailX = s.x - s.vx * (s.len / 10);
        const tailY = s.y - s.vy * (s.len / 10);

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(1, s.color);

        ctx.save();
        ctx.globalAlpha = alpha * 0.9;
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
        ctx.restore();

        if (s.life >= s.maxLife) shoots.splice(i, 1);
      });

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,   // in front of video (-2000) but behind all content (z-10+)
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}*/

/* ─────────────────────────────────────────────
   CUSTOM CURSOR
   - Fast dot (no lag)
   - Ring follows at near-same speed (lerp 0.55)
   - Ring interior shows INVERTED color of element under cursor
───────────────────────────────────────────── */
function CyberpunkCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let mouseX = -200,
      mouseY = -200;
    let ringX = -200,
      ringY = -200;
    let rafId: number;
    // Lerp factor: 0.55 = snappy but still smooth, not laggy
    const LERP = 0.55;

    const animate = () => {
      ringX += (mouseX - ringX) * LERP;
      ringY += (mouseY - ringY) * LERP;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot is instant — no lerp
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      // Sample color under cursor
      const el = document.elementFromPoint(
        e.clientX,
        e.clientY,
      ) as HTMLElement | null;
      if (el) {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundColor;
        const rgb = extractRgb(bg);

        if (rgb && !(rgb[0] === 0 && rgb[1] === 0 && rgb[2] === 0)) {
          // Inverted color for ring fill & label
          const inv: [number, number, number] = [
            255 - rgb[0],
            255 - rgb[1],
            255 - rgb[2],
          ];
          const invHex = rgbToHex(inv);
          const srcHex = rgbToHex(rgb);

          // Ring border = sampled color; ring glow = inverted
          ring.style.borderColor = srcHex;
          ring.style.boxShadow = `0 0 10px ${srcHex}88, inset 0 0 14px ${invHex}22`;
          ring.style.background = `${invHex}18`; // subtle inverted tint inside ring
          dot.style.background = srcHex;
          dot.style.boxShadow = `0 0 6px ${srcHex}`;

          // Label = inverted hex
          label.textContent = invHex.toUpperCase();
          label.style.color = invHex;
        } else {
          // Fallback to accent
          label.textContent = "";
          ring.style.borderColor = "var(--neon-cyan)";
          ring.style.boxShadow =
            "0 0 10px var(--neon-cyan), inset 0 0 10px rgba(0,245,255,0.08)";
          ring.style.background = "rgba(0,245,255,0.05)";
          dot.style.background = "var(--neon-cyan)";
          dot.style.boxShadow = "0 0 6px var(--neon-cyan)";
        }
      }
    };

    const onEnterLink = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button")
      ) {
        ring.classList.add("cursor-hover");
      }
    };
    const onLeaveLink = () => ring.classList.remove("cursor-hover");
    const onDown = () => ring.classList.add("cursor-click");
    const onUp = () => ring.classList.remove("cursor-click");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnterLink);
    document.addEventListener("mouseout", onLeaveLink);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnterLink);
      document.removeEventListener("mouseout", onLeaveLink);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} id="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} id="cursor-ring" aria-hidden="true">
        <span ref={labelRef} id="cursor-label" />
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   THEME PROVIDER
───────────────────────────────────────────── */
function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const sys = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
      setTheme(sys);
      document.documentElement.setAttribute("data-theme", sys);
    }

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const t = e.matches ? "light" : "dark";
        setTheme(t);
        document.documentElement.setAttribute("data-theme", t);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    (window as any).__toggleTheme = () => {
      const next = theme === "dark" ? "light" : "dark";
      setTheme(next);
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    };
    (window as any).__currentTheme = theme;
  }, [theme]);

  return <>{children}</>;
}

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document
      .querySelectorAll(".reveal-up, .reveal-fade")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}

/* ─────────────────────────────────────────────
   ROOT LAYOUT
───────────────────────────────────────────── */
export default function ClientLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var s=localStorage.getItem('theme');
                var sys=window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';
                document.documentElement.setAttribute('data-theme',s||sys);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rahul Roy",
              url: "https://www.rahulroy.in",
              image: "https://www.rahulroy.in/og.png",
              sameAs: [
                "https://github.com/royaldotcon",
                "https://linkedin.com/in/rahul-roy-48582b304",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Aitihya",
              },
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "bg-[var(--bg-primary)] overflow-y-scroll overflow-x-hidden",
          outfit.className,
        )}
      >
        <ThemeProvider>
          {/* Stars canvas replaces StarsCanvas import */}
          <StarsCanvas />

          <CyberpunkCursor />
          <ScrollReveal />

          <Navbar />
          <WhatsAppButton />

          <main className="relative">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

/* ─────────────────────────────────────────────
   COLOR UTILITIES
───────────────────────────────────────────── */
function extractRgb(colorStr: string): [number, number, number] | null {
  const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return null;
  return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
}

function rgbToHex([r, g, b]: [number, number, number]): string {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}
