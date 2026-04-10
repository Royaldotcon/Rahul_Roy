"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/lib/motion";

/* ─────────────────────────────────────────────
   ANIMATED DATA STREAM (canvas)
───────────────────────────────────────────── */
function DataStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコABCDEF0123456789</>{}[]";
    const cols  = Math.floor(canvas.width / 18);
    const drops = Array.from({ length: cols }, () => Math.random() * -50);

    // Two accent colours from the theme
    const colors = ["#00f5ff", "#bf5fff", "#ff2d7e", "#00ff9f"];

    let rafId: number;
    const draw = () => {
      ctx.fillStyle = "rgba(2,0,8,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((y, i) => {
        const char  = chars[Math.floor(Math.random() * chars.length)];
        const color = colors[i % colors.length];
        const alpha = Math.random() > 0.9 ? 1 : 0.25;

        ctx.fillStyle = color + Math.round(alpha * 255).toString(16).padStart(2, "0");
        ctx.font      = `${Math.random() > 0.97 ? "bold " : ""}12px 'Space Mono', monospace`;
        ctx.fillText(char, i * 18, y * 18);

        drops[i] = y > canvas.height / 18 + Math.random() * 20 ? -5 : y + 0.5;
      });

      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
    />
  );
}

/* ─────────────────────────────────────────────
   ANIMATED LOCK
───────────────────────────────────────────── */
function AnimatedLock() {
  const ref = useRef(null);
const isInView = useInView(ref, { once: false });
  const isOpen = useRef(false);

  return (
    <div
      className="flex flex-col items-center group cursor-pointer select-none"
      onMouseEnter={() => { isOpen.current = true; }}
      onMouseLeave={() => { isOpen.current = false; }}
    >
      {/* Lock shackle */}
      <motion.div
        whileHover={{ y: 24, rotate: -8 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="relative z-10"
        style={{ filter: "drop-shadow(0 0 8px var(--neon-cyan))" }}
      >
        <Image
          src="/lock-top.png"
          alt="Lock shackle"
          width={50}
          height={50}
          draggable={false}
        />
      </motion.div>

      {/* Lock body */}
      <motion.div
        className="relative z-20 -mt-1"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        style={{ filter: "drop-shadow(0 0 16px var(--neon-purple))" }}
      >
        <Image
          src="/lock-main.png"
          alt="Lock body"
          width={70}
          height={70}
          draggable={false}
        />

        {/* Keyhole glow pulse */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 4px 2px rgba(0,245,255,0.4)",
              "0 0 10px 4px rgba(0,245,255,0.7)",
              "0 0 4px 2px rgba(0,245,255,0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "var(--neon-cyan)", opacity: 0.8 }}
        />
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STAT COUNTER
───────────────────────────────────────────── */
function StatCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const ref   = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return (
    <div className="flex flex-col items-center gap-1">
      <span
        ref={ref}
        className="text-3xl font-bold"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--neon-cyan)",
          textShadow: "0 0 16px var(--neon-cyan)",
        }}
      >
        0{suffix}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          letterSpacing: "0.15em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export const Encryption = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden py-20">

      {/* ── BACKGROUND VIDEO (retained) ── */}
      <div className="absolute inset-0 w-full h-full z-20">
        <video
          loop muted autoPlay playsInline preload="none"
          className="w-full h-full object-cover opacity-20"
          style={{ filter: "hue-rotate(200deg) saturate(1.2)" }}
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
        {/* Dark vignette */}
        
      </div>

      {/* ── MATRIX DATA STREAM ── */}
      <DataStream />

      {/* ── SECTION EYEBROW ── */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3 mb-12 z-10"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, var(--neon-cyan))" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "var(--neon-cyan)",
              textShadow: "0 0 8px var(--neon-cyan)",
              textTransform: "uppercase",
            }}
          >
            Infrastructure
          </span>
          <span className="h-px w-10" style={{ background: "linear-gradient(90deg, var(--neon-cyan), transparent)" }} />
        </div>

        <h2
          className="section-heading text-center"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          <span style={{ color: "var(--text-primary)" }}>Performance</span>{" "}
          <span className="gradient-text">&amp;</span>{" "}
          <span style={{ color: "var(--text-primary)" }}>Security.</span>
        </h2>

        <p
          className="max-w-[440px] text-center text-sm"
          style={{ color: "var(--text-muted)", lineHeight: "1.7", fontFamily: "var(--font-body)" }}
        >
          Every app I build is engineered for speed, resilience, and end-to-end security.
        </p>
      </motion.div>

      {/* ── LOCK + BADGE ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center gap-5 z-10 mb-12"
      >
        {/* Glow halo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(191,95,255,0.25), transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        <AnimatedLock />

        {/* Badge */}
        <div
          className="Welcome-box px-5 py-2 flex items-center gap-2"
          style={{ border: "1px solid var(--border-glow)" }}
        >
          {/* Pulse dot */}
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "var(--neon-green)",
              boxShadow: "0 0 6px var(--neon-green)",
              animation: "blink 2s ease-in-out infinite",
            }}
          />
          <span
            className="Welcome-text"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em" }}
          >
            ENCRYPTION ACTIVE
          </span>
        </div>

        {/* Animated ring */}
        <motion.div
          className="absolute w-52 h-52 rounded-full pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{
            border: "1px dashed rgba(0,245,255,0.2)",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
          }}
        />
        <motion.div
          className="absolute w-36 h-36 rounded-full pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            border: "1px dashed rgba(191,95,255,0.2)",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
          }}
        />
      </motion.div>

      {/* ── STATS ROW ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex items-center gap-10 flex-wrap justify-center z-10 mb-12"
      >
        {[
          { value: 100, label: "Secure by default", suffix: "%" },
          { value: 256, label: "Bit encryption",    suffix: "-bit" },
          { value: 99,  label: "Uptime",            suffix: "%" },
        ].map((s) => (
          <StatCounter key={s.label} {...s} />
        ))}
      </motion.div>

      {/* ── FEATURE CARDS ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full px-6 z-10"
      >
        {[
          { icon: "🔐", title: "End-to-End Encryption",  desc: "All data is encrypted in transit and at rest."         },
          { icon: "⚡", title: "Edge Performance",        desc: "Deployed globally via CDN for <50ms response times."  },
          { icon: "🛡️", title: "Zero-Trust Security",    desc: "Auth, RBAC, and input validation on every layer."     },
        ].map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="glass flex flex-col gap-2 p-4 rounded-xl group card-hover"
          >
            <span className="text-2xl">{f.icon}</span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              {f.title}
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "var(--text-muted)",
                lineHeight: "1.6",
              }}
            >
              {f.desc}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};