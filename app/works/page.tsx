"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS, PROJECTS2 } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import Image from "next/image";

/* ─── graphic design images ────────────────────────────────── */
const GRAPHICS_PORTRAIT = [
  { src: "graphics/thinkfast.png",     alt: "ThinkFast" },
  { src: "graphics/texa1.png",         alt: "Texavision 01" },
  { src: "graphics/innova.png",        alt: "Innova" },
  { src: "/graphics/unscripted.png",   alt: "Unscripted" },
  
];

const GRAPHICS_LANDSCAPE = [
  { src: "/graphics/TEXTRIVIA.png",         alt: "TexTrivia" },
  { src: "/graphics/RANGBAHAR.png",         alt: "Rangbahar" },
  { src: "/graphics/TEXATECH 4BY3.png",     alt: "TexaTech" },
];

/* ─── lightbox ──────────────────────────────────────────────── */
const Lightbox = ({
  src, alt, onClose,
}: { src: string; alt: string; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(0,0,0,0.88)",
      backdropFilter: "blur(12px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "zoom-out",
    }}
  >
    <motion.div
      initial={{ scale: 0.82, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.82, opacity: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 26 }}
      onClick={(e) => e.stopPropagation()}
      style={{
        position: "relative",
        maxWidth: "90vw", maxHeight: "88vh",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid var(--border-glow)",
        boxShadow: "0 0 60px rgba(0,245,255,0.18), 0 0 120px rgba(191,95,255,0.12)",
      }}
    >
      {/* corner brackets */}
      {[
        { top: 8, left: 8, borderTop: "2px solid var(--neon-cyan)", borderLeft: "2px solid var(--neon-cyan)", borderRadius: "3px 0 0 0" },
        { top: 8, right: 8, borderTop: "2px solid var(--neon-cyan)", borderRight: "2px solid var(--neon-cyan)", borderRadius: "0 3px 0 0" },
        { bottom: 8, left: 8, borderBottom: "2px solid var(--neon-cyan)", borderLeft: "2px solid var(--neon-cyan)", borderRadius: "0 0 0 3px" },
        { bottom: 8, right: 8, borderBottom: "2px solid var(--neon-cyan)", borderRight: "2px solid var(--neon-cyan)", borderRadius: "0 0 3px 0" },
      ].map((s, i) => (
        <span key={i} style={{ position: "absolute", width: 16, height: 16, zIndex: 2, ...s }} />
      ))}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ display: "block", maxWidth: "90vw", maxHeight: "88vh", objectFit: "contain" }} />
      <button
        onClick={onClose}
        className="mono"
        style={{
          position: "absolute", top: 12, right: 12,
          background: "rgba(0,0,0,0.7)",
          border: "1px solid var(--border-subtle)",
          color: "var(--text-primary)",
          borderRadius: "6px",
          padding: "4px 10px",
          fontSize: "11px",
          cursor: "pointer",
          zIndex: 3,
        }}
      >
        ESC
      </button>
    </motion.div>
  </motion.div>
);

/* ─── graphic tile ──────────────────────────────────────────── */
const GraphicTile = ({
  src, alt, index,
}: { src: string; alt: string; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setLightbox(true)}
        style={{
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          cursor: "zoom-in",
          border: hovered ? "1px solid var(--neon-cyan)" : "1px solid var(--border-subtle)",
          boxShadow: hovered ? "0 0 20px rgba(0,245,255,0.2)" : "none",
          transition: "border-color 0.3s, box-shadow 0.3s",
          background: "var(--bg-glass)",
        }}
      >
        {/* scan sweep on hover */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={hovered ? { y: "200%" } : { y: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
            background: "linear-gradient(180deg, transparent, rgba(0,245,255,0.1), transparent)",
          }}
        />

        {/* corner brackets */}
        {hovered && (
          <>
            <span style={{ position: "absolute", top: 6, left: 6, width: 10, height: 10, borderTop: "1.5px solid var(--neon-cyan)", borderLeft: "1.5px solid var(--neon-cyan)", zIndex: 3, borderRadius: "2px 0 0 0" }} />
            <span style={{ position: "absolute", bottom: 6, right: 6, width: 10, height: 10, borderBottom: "1.5px solid var(--neon-cyan)", borderRight: "1.5px solid var(--neon-cyan)", zIndex: 3, borderRadius: "0 0 2px 0" }} />
          </>
        )}

        {/* alt label overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            padding: "8px 10px",
            background: "linear-gradient(0deg, rgba(0,0,0,0.8), transparent)",
            zIndex: 3,
          }}
        >
          <span className="mono" style={{ fontSize: "10px", color: "var(--neon-cyan)", letterSpacing: "0.08em" }}>
            {alt}
          </span>
        </motion.div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%", height: "auto",
            display: "block",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.45s ease",
          }}
        />
      </motion.div>

      <AnimatePresence>
        {lightbox && <Lightbox src={src} alt={alt} onClose={() => setLightbox(false)} />}
      </AnimatePresence>
    </>
  );
};

/* ─── section label ─────────────────────────────────────────── */
const SectionLabel = ({ tag, title }: { tag: string; title: string }) => (
  <motion.div
    variants={slideInFromTop}
    style={{ textAlign: "center", marginBottom: "48px" }}
  >
    <span className="mono" style={{
      fontSize: "11px", letterSpacing: "0.14em",
      color: "var(--neon-cyan)", textTransform: "uppercase",
      display: "block", marginBottom: "10px",
    }}>
      // {tag}
    </span>
    <h1
      className="gradient-text"
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: "clamp(2rem, 5vw, 3.2rem)",
        lineHeight: 1.05,
      }}
    >
      {title}
    </h1>
    {/* underline rule */}
    <div style={{
      margin: "16px auto 0",
      width: "60px", height: "2px",
      background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))",
      boxShadow: "0 0 8px var(--neon-cyan)",
      borderRadius: "2px",
    }} />
  </motion.div>
);

/* ─── page ──────────────────────────────────────────────────── */
export default function WorksPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{ minHeight: "100vh", paddingTop: "96px", paddingBottom: "80px", position: "relative" }}
    >
      {/* ambient orbs */}
      <div className="orb orb-cyan"   style={{ top: "5%",  left: "-15%", width: "500px", height: "500px", opacity: 0.1 }} />
      <div className="orb orb-purple" style={{ top: "40%", right: "-12%", width: "420px", height: "420px", opacity: 0.09 }} />
      <div className="orb orb-pink"   style={{ bottom: "10%", left: "20%", width: "300px", height: "300px", opacity: 0.07 }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 30 }}>

        {/* ── PROJECTS section ────────────────────────────────── */}
        <SectionLabel tag="works.projects" title="Projects" />

        <motion.div
          variants={slideInFromLeft(0.6)}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "80px",
          }}
        >
          {PROJECTS2.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </motion.div>

        {/* divider */}
        <motion.div
          variants={slideInFromTop}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-cyan), transparent)",
            opacity: 0.35,
            marginBottom: "80px",
          }}
        />

        {/* ── GRAPHIC DESIGN section ──────────────────────────── */}
        <SectionLabel tag="works.design" title="Graphic Designs" />

        {/* portrait grid */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          {GRAPHICS_PORTRAIT.map((g, i) => (
            <GraphicTile key={g.alt} src={g.src} alt={g.alt} index={i} />
          ))}
        </motion.div>

        {/* landscape grid */}
        <motion.div
          variants={slideInFromLeft(1)}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          {GRAPHICS_LANDSCAPE.map((g, i) => (
            <GraphicTile key={g.alt} src={g.src} alt={g.alt} index={i + GRAPHICS_PORTRAIT.length} />
          ))}
        </motion.div>

        {/* footer note */}
        <motion.div
          variants={slideInFromTop}
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <span className="mono" style={{
            fontSize: "11px",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
          }}>
            // click any image to expand — designed for Texavision 2025
          </span>
        </motion.div>

      </div>
    </motion.div>
  );
}