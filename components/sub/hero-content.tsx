"use client";

import { useEffect, useRef, useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

/* ─────────────────────────────────────────────
   MAGNETIC BUTTON
───────────────────────────────────────────── */
function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center gap-2 px-7 py-3 rounded-xl overflow-hidden group"
    >
      {/* Animated border */}
      <span
        className="neon-border absolute inset-0 rounded-xl pointer-events-none"
        style={{ borderRadius: "0.75rem" }}
      />
      {/* Shine sweep */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,245,255,0.12), transparent)",
        }}
      />
      <span
        className="relative z-10 text-sm font-medium tracking-widest uppercase"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--neon-cyan)",
          textShadow: "0 0 10px var(--neon-cyan)",
        }}
      >
        {children}
      </span>
      <span
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        style={{ color: "var(--neon-cyan)" }}
      >
        →
      </span>
    </motion.a>
  );
}

/* ─────────────────────────────────────────────
   3D PROFILE CARD
───────────────────────────────────────────── */
function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const springRY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - cy) / (rect.height / 2)) * -12);
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * 12);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    // Perspective wrapper — must be a separate element from the one that rotates
    <div style={{ perspective: 800 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX: springRX,
          rotateY: springRY,
          transformStyle: "preserve-3d",
        }}
        className="relative group"
      >
        {/* Outer glow ring */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink), var(--neon-cyan))",
            padding: "2px",
            borderRadius: "50%",
            animation: "borderRotate 4s linear infinite",
            filter: "blur(1px)",
          }}
        />
        {/* Image */}
        <div
          className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden"
          style={{
            border: "3px solid transparent",
            background: "var(--bg-primary)",
            zIndex: 1,
          }}
        >
          <img
            src="/pic.jpg"
            alt="Rahul Roy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gloss overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,245,255,0.15) 0%, transparent 60%)",
            }}
          />
        </div>

        {/* Floating status badge */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full whitespace-nowrap"
          style={{
            background: "var(--bg-glass)",
            border: "1px solid var(--border-glow)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            zIndex: 2,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "var(--neon-green)",
              boxShadow: "0 0 6px var(--neon-green)",
              animation: "blink 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--text-secondary)",
              letterSpacing: "0.08em",
            }}
          >
            AVAILABLE FOR WORK
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO CONTENT
───────────────────────────────────────────── */
export const HeroContent = () => {
  const roles = [
    "Fullstack Developer",
    "UI/UX Designer",
    "Graphics Designer",
    "Next.js Engineer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 w-full max-w-7xl mx-auto min-h-screen gap-12 z-30 relative"
    >
      {/* ── LEFT COLUMN ── */}
      <div className="flex flex-col gap-6 w-full lg:max-w-[600px]">

        {/* Badge pill */}
        <motion.div variants={slideInFromTop} className="Welcome-box py-2 px-4">
          <SparklesIcon
            className="mr-2 h-4 w-4"
            style={{ color: "var(--neon-cyan)", filter: "drop-shadow(0 0 6px var(--neon-cyan))" }}
          />
          <span
            className="text-[12px] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}
          >
            Portfolio&nbsp;
          </span>
          <span
            className="text-[12px] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--neon-cyan)", textShadow: "0 0 8px var(--neon-cyan)" }}
          >
            2025
          </span>
        </motion.div>

        {/* Name — glitch effect */}
        <motion.div variants={slideInFromLeft(0.3)} className="flex flex-col gap-1">
          <span
            className="text-[13px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            &lt; Hello, I&apos;m &gt;
          </span>

          <h1
            className="glitch gradient-text leading-none select-none"
            data-text="Rahul Roy"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(3rem, 8vw, 6rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Rahul Roy
          </h1>

          {/* GIF title */}
          <img
            src="/hero-title.gif"
            alt="Web Developer & Graphic Designer"
            className="h-auto mt-1"
            style={{ width: "min(480px, 100%)", marginLeft: "-4px" }}
            draggable={false}
          />
        </motion.div>

        {/* Rotating role */}
        <motion.div variants={slideInFromLeft(0.5)} className="flex items-center gap-3">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-muted)",
              letterSpacing: "0.1em",
            }}
          >
            ~/
          </span>
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="typing-cursor"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "var(--neon-purple)",
              textShadow: "0 0 12px var(--neon-purple)",
              letterSpacing: "0.06em",
            }}
          >
            {roles[roleIndex]}
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.7)}
          className="text-base md:text-lg leading-relaxed max-w-[520px]"
          style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
        >
          I&apos;m a{" "}
          <span style={{ color: "var(--neon-cyan)" }}>Full Stack Software Engineer</span>{" "}
          &amp;{" "}
          <span style={{ color: "var(--neon-purple)" }}>UI/UX Designer</span>{" "}
          blending code and creativity to build powerful, user-centric digital experiences.
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={slideInFromLeft(0.85)}
          className="flex items-center gap-6 flex-wrap"
        >
          {[
            { value: "10+", label: "Projects" },
            { value: "2+", label: "Years Exp" },
            { value: "∞", label: "Curiosity" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "var(--neon-cyan)",
                  textShadow: "0 0 16px var(--neon-cyan)",
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                {label}
              </span>
            </div>
          ))}

          {/* Vertical divider */}
          <div
            className="hidden sm:block w-px h-10 mx-2"
            style={{ background: "var(--border-subtle)" }}
          />

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "Node", "Figma"].map((tag) => (
              <span key={tag} className="skill-pill">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={slideInFromLeft(1)} className="flex items-center gap-4 flex-wrap mt-2">
          <MagneticButton href="/aboutme">Learn More</MagneticButton>

          <a
            href="/works"
            className="inline-flex items-center gap-2 text-sm transition-all duration-300 group"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-secondary)",
              letterSpacing: "0.08em",
              textDecoration: "none",
            }}
          >
            <span className="group-hover:underline" style={{ textUnderlineOffset: "4px" }}>
              View Projects
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
        </motion.div>

        {/* Mono tag */}
        <motion.p
          variants={slideInFromLeft(1.1)}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
          }}
        >
          &lt;/code&gt;&nbsp;&nbsp;
          <span style={{ color: "var(--border-glow)" }}>// Kolkata, India 🇮🇳</span>
        </motion.p>
      </div>

      {/* ── RIGHT COLUMN ── */}
      <motion.div
        variants={slideInFromRight(0.6)}
        className="flex flex-col items-center gap-8 w-full lg:w-auto"
      >
        {/* 3D Profile Card */}
        <ProfileCard />

        {/* Hero BG SVG */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="mt-4"
        >
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            height={420}
            width={420}
            draggable={false}
            className="select-none opacity-80"
            style={{ filter: "drop-shadow(0 0 20px rgba(0,245,255,0.2))" }}
          />
        </motion.div>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          className="w-[1px] h-10 relative overflow-hidden"
          style={{ background: "var(--border-subtle)" }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              height: "40%",
              background:
                "linear-gradient(to bottom, transparent, var(--neon-cyan), transparent)",
              boxShadow: "0 0 6px var(--neon-cyan)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};