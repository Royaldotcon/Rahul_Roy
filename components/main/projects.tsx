"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS, PROJECTS2 } from "@/constants";

/* ─────────────────────────────────────────────
   SECTION HEADING
───────────────────────────────────────────── */
function SectionHeading() {
  return (
    <div className="flex flex-col items-center gap-4 text-center mb-16">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <span
          className="h-px w-12"
          style={{ background: "linear-gradient(90deg, transparent, var(--neon-cyan))" }}
        />
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
          Selected Works
        </span>
        <span
          className="h-px w-12"
          style={{ background: "linear-gradient(90deg, var(--neon-cyan), transparent)" }}
        />
      </motion.div>

      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="section-heading gradient-text"
        style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
      >
        My Projects
      </motion.h2>

      {/* Sub-line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-[480px] text-sm"
        style={{
          color: "var(--text-muted)",
          fontFamily: "var(--font-body)",
          lineHeight: "1.7",
        }}
      >
        A collection of web apps, design systems, and creative experiments —
        built with passion and precision.
      </motion.p>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-px w-40"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-cyan), transparent)",
          boxShadow: "0 0 8px var(--neon-cyan)",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROJECTS GRID
───────────────────────────────────────────── */
function ProjectGrid({
  projects,
  startIndex = 0,
}: {
  projects: { image: string; title: string; description: string; link: string }[];
  startIndex?: number;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          src={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
          index={startIndex + i}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export const Projects = () => {
  const allProjects = [...PROJECTS, ...PROJECTS2];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-24 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Background glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
        style={{
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(191,95,255,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <SectionHeading />

      {/* First row */}
      <ProjectGrid projects={PROJECTS} startIndex={0} />

      {/* Row divider */}
      <div className="flex items-center gap-4 w-full my-10">
        <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--text-muted)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          More Works
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
      </div>

      {/* Second row */}
      <ProjectGrid projects={PROJECTS2} startIndex={PROJECTS.length} />

      {/* View all CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14"
      >
        <a
          href="/works"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl overflow-hidden transition-all duration-300"
          style={{
            border: "1px solid var(--border-glow)",
            background: "rgba(0,245,255,0.04)",
            textDecoration: "none",
          }}
        >
          {/* Shine */}
          <span
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,245,255,0.08), transparent)",
            }}
          />

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--neon-cyan)",
              textShadow: "0 0 8px var(--neon-cyan)",
            }}
          >
            View All Projects
          </span>
          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: "var(--neon-cyan)" }}
          >
            ↗
          </span>
        </a>
      </motion.div>

      {/* Bottom count */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-6"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--text-muted)",
          letterSpacing: "0.15em",
        }}
      >
        {allProjects.length} projects shipped &amp; counting
      </motion.p>
    </section>
  );
};