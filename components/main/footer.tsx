"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden z-30">

      {/* ── TOP NEON DIVIDER ── */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--neon-cyan) 30%, var(--neon-purple) 70%, transparent 100%)",
          boxShadow: "0 0 12px var(--neon-cyan)",
          opacity: 0.6,
        }}
      />

      {/* ── BACKGROUND GLOW ── */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,245,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div
        className="w-full py-16 px-6 md:px-12"
        style={{ background: "var(--bg-glass) transparent 10%", backdropFilter: "blur(5px)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">

          {/* ── MAIN FOOTER GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_repeat(3,1fr)] gap-10">

            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              {/* Logo + name */}
              <Link href="/" className="flex items-center gap-3 w-fit" style={{ textDecoration: "none" }}>
                <Image src="/logo.png" alt="Logo" width={40} height={40} style={{ borderRadius: "50%" }} />
                <div className="flex flex-col leading-none">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "15px",
                      color: "var(--text-primary)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    RAHUL
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.3em",
                      color: "var(--neon-cyan)",
                      textShadow: "0 0 6px var(--neon-cyan)",
                    }}
                  >
                    ROY
                  </span>
                </div>
              </Link>

              {/* Bio */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  lineHeight: "1.75",
                  maxWidth: "240px",
                }}
              >
                Fullstack Developer &amp; UI/UX Designer blending code and creativity from Kolkata, India.
              </p>

              {/* Status badge */}
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit"
                style={{
                  background: "rgba(0,255,159,0.06)",
                  border: "1px solid rgba(0,255,159,0.2)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "var(--neon-green)",
                    boxShadow: "0 0 6px var(--neon-green)",
                    animation: "blink 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    color: "var(--neon-green)",
                    letterSpacing: "0.12em",
                  }}
                >
                  AVAILABLE FOR WORK
                </span>
              </div>

              {/* Mail CTA */}
              <a
                href="mailto:rr6216009@gmail.com"
                className="group flex items-center gap-2 w-fit transition-all duration-300"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                }}
              >
                <span
                  className="group-hover:underline"
                  style={{
                    textUnderlineOffset: "3px",
                    textDecorationColor: "var(--neon-cyan)",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon-cyan)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  rr6216009@gmail.com
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </motion.div>

            {/* Link columns */}
            {FOOTER_DATA.map((column, ci) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + ci * 0.08 }}
                className="flex flex-col gap-4"
              >
                {/* Column heading */}
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-4 h-px"
                    style={{ background: "var(--neon-cyan)", boxShadow: "0 0 4px var(--neon-cyan)" }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "var(--neon-cyan)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {column.title}
                  </h3>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3">
                  {column.data.map(({ icon: Icon, name, link }) => (
                    <Link
                      key={`${column.title}-${name}`}
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center gap-2 transition-all duration-300 w-fit"
                      style={{ textDecoration: "none" }}
                    >
                      {Icon && (
                        <span
                          className="transition-all duration-300"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                      )}
                      <span
                        className="text-sm transition-all duration-300"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "13px",
                          color: "var(--text-secondary)",
                          letterSpacing: "0.01em",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--text-primary)";
                          e.currentTarget.style.textShadow = "0 0 8px rgba(255,255,255,0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--text-secondary)";
                          e.currentTarget.style.textShadow = "none";
                        }}
                      >
                        {name}
                      </span>
                      <span
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                        style={{ color: "var(--text-muted)", fontSize: "10px" }}
                      >
                        ↗
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── BOTTOM BAR ── */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
            style={{ borderTop: "1px solid var(--border-subtle)" }}
          >
            {/* Copyright */}
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
              }}
            >
              &copy; {year} Rahul Roy Inc. All rights reserved.
            </p>

            {/* Center — tech stack tag */}
            <div className="flex items-center gap-2">
              {["Next.js", "Tailwind", "TypeScript"].map((t, i) => (
                <span key={t}>
                  <span
                    className="skill-pill"
                    style={{ fontSize: "9px", padding: "2px 8px" }}
                  >
                    {t}
                  </span>
                  {i < 2 && (
                    <span style={{ color: "var(--border-glow)", fontSize: "10px", margin: "0 2px" }}>·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Mono signature */}
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
              }}
            >
              &lt;made with&nbsp;
              <span style={{ color: "var(--neon-pink)", textShadow: "0 0 6px var(--neon-pink)" }}>
                ♥
              </span>
              &nbsp;by rahul/&gt;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};