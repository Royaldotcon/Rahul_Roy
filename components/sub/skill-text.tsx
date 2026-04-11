"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">

      {/* Badge pill */}
      <motion.div
        variants={slideInFromTop}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 16px",
          borderRadius: "999px",
          background: "var(--bg-glass)",
          border: "1px solid var(--border-glow)",
          backdropFilter: "blur(12px)",
          marginBottom: "20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Shimmer sweep */}
        <motion.span
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.12), transparent)",
            pointerEvents: "none",
          }}
        />

        <SparklesIcon style={{ width: "14px", height: "14px", color: "var(--neon-cyan)", flexShrink: 0 }} />

        <span
          className="mono"
          style={{
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: "var(--text-secondary)",
            textTransform: "uppercase",
          }}
        >
          Graphic Design &amp; Web Solutions
        </span>
      </motion.div>

      {/* Primary heading */}
      <motion.h2
        variants={slideInFromLeft(0.5)}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: "16px",
          maxWidth: "640px",
        }}
      >
        <span className="gradient-text">Technologies</span>{" "}
        <span style={{ color: "var(--text-primary)" }}>used</span>{" "}
        
      </motion.h2>

      {/* Sub-line */}
      <motion.p
        variants={slideInFromRight(0.5)}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
          color: "var(--text-muted)",
          textAlign: "center",
          letterSpacing: "0.04em",
          marginBottom: "48px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Blinking cursor dot */}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--neon-cyan)",
            flexShrink: 0,
            boxShadow: "0 0 6px var(--neon-cyan)",
          }}
        />
        Stay on top of every task, deadline, and idea.
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--neon-cyan)",
            flexShrink: 0,
            boxShadow: "0 0 6px var(--neon-cyan)",
          }}
        />
      </motion.p>

    </div>
  );
};