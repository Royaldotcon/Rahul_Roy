"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  index?: number;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  index = 0,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  /* 3-D tilt */
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const springRY = useSpring(rotateY, { stiffness: 120, damping: 18 });

  /* Shine spotlight that follows cursor */
  const shineX = useMotionValue(50);
  const shineY = useMotionValue(50);

  const handleMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top)  / rect.height;
    rotateX.set((py - 0.5) * -14);
    rotateY.set((px - 0.5) *  14);
    shineX.set(px * 100);
    shineY.set(py * 100);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    shineX.set(50);
    shineY.set(50);
  };

  /* Accent colours cycling per card */
  const accents = [
    { color: "var(--neon-cyan)",   glow: "var(--glow-cyan)"   },
    { color: "var(--neon-purple)", glow: "var(--glow-purple)" },
    { color: "var(--neon-pink)",   glow: "var(--glow-pink)"   },
    { color: "var(--neon-cyan)",   glow: "var(--glow-cyan)"   },
  ];
  const accent = accents[index % accents.length];

  return (
    <motion.a
      ref={cardRef}
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX: springRX,
        rotateY: springRY,
        transformStyle: "preserve-3d",
        perspective: 900,
        textDecoration: "none",
      }}
      className="relative flex flex-col overflow-hidden rounded-2xl group"
    >
      {/* ── ANIMATED NEON BORDER ── */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          padding: "1px",
          background: `linear-gradient(135deg, ${accent.color}, transparent 40%, ${accent.color})`,
          backgroundSize: "300% 300%",
          animation: "borderRotate 3s linear infinite",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          borderRadius: "1rem",
        }}
      />

      {/* ── BASE CARD ── */}
      <div
        className="relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          background: "var(--bg-glass)",
          border: "1px solid var(--border-subtle)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          transform: "translateZ(0)",
        }}
      >
        {/* ── IMAGE AREA ── */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src={src}
            alt={title}
            width={800}
            height={450}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(2,0,8,0.6) 100%)",
            }}
          />

          {/* Cursor spotlight */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
            style={{
              background: useTransform(
                [shineX, shineY],
                ([sx, sy]) =>
                  `radial-gradient(circle 180px at ${sx}% ${sy}%, rgba(255,255,255,0.08), transparent 70%)`
              ),
            }}
          />

          {/* Scan line sweep */}
          <div
            className="absolute inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)`,
              boxShadow: `0 0 8px ${accent.color}`,
              animation: "scanSweep 1.8s ease-in-out infinite",
              animationPlayState: "paused",
            }}
          />

          {/* Index badge */}
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{
              background: "rgba(0,0,0,0.6)",
              border: `1px solid ${accent.color}44`,
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: accent.color, boxShadow: `0 0 6px ${accent.color}` }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: accent.color,
                letterSpacing: "0.12em",
              }}
            >
              PROJECT_{String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* External link icon — top right */}
          <div
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
            style={{
              background: "rgba(0,0,0,0.6)",
              border: `1px solid ${accent.color}44`,
              backdropFilter: "blur(8px)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H5M10 2V7"
                stroke={accent.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ── CONTENT AREA ── */}
        <div className="relative flex flex-col gap-3 p-5" style={{ transform: "translateZ(20px)" }}>
          {/* Top accent line */}
          <div
            className="absolute top-0 left-5 right-5 h-px"
            style={{
              background: `linear-gradient(90deg, ${accent.color}44, ${accent.color}88, ${accent.color}44)`,
            }}
          />

          <h2
            className="font-bold leading-tight transition-all duration-300"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h2>

          <p
            className="text-sm leading-relaxed line-clamp-3"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "var(--font-body)",
              lineHeight: "1.7",
            }}
          >
            {description}
          </p>

          {/* Footer row */}
          <div className="flex items-center justify-between mt-1 pt-3"
            style={{ borderTop: "1px solid var(--border-subtle)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
              }}
            >
              VIEW PROJECT
            </span>
            <span
              className="flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: accent.color,
                textShadow: `0 0 8px ${accent.color}`,
              }}
            >
              OPEN ↗
            </span>
          </div>
        </div>

        {/* ── BOTTOM GLOW ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${accent.color}0f, transparent)`,
          }}
        />
      </div>
    </motion.a>
  );
};