"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { blogs } from "@/lib/blogsData";

/* ─── helpers ───────────────────────────────────────────────── */

/** Pull first ~160 chars from description for the excerpt */
const excerpt = (text: string, max = 160) =>
  text.length <= max ? text : text.slice(0, max).trimEnd() + "…";

/** Generate a stable accent from the blog id */
const ACCENTS = [
  "var(--neon-cyan)",
  "var(--neon-purple)",
  "var(--neon-pink)",
  "var(--neon-green)",
];
const accent = (id: number | string) =>
  ACCENTS[Number(id) % ACCENTS.length];

/* ─── blog card ─────────────────────────────────────────────── */
const BlogCard = ({
  blog,
  index,
}: {
  blog: (typeof blogs)[number];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const color = accent(blog.id);

  return (
    <motion.li
      variants={slideInFromLeft(0.4 + index * 0.08)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ listStyle: "none" }}
    >
      <Link href={`/blogs/${blog.id}`} style={{ textDecoration: "none" }}>
        <div
          style={{
            position: "relative",
            padding: "24px 28px",
            borderRadius: "12px",
            background: "var(--bg-glass)",
            backdropFilter: "blur(14px)",
            border: `1px solid ${hovered ? color : "var(--border-subtle)"}`,
            borderLeft: `3px solid ${color}`,
            boxShadow: hovered
              ? `0 0 24px ${color}28, inset 0 0 12px ${color}08`
              : "none",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {/* shimmer sweep */}
          <motion.div
            animate={hovered ? { x: ["-100%", "200%"] } : { x: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(90deg, transparent, ${color}0f, transparent)`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* index badge */}
          <span
            className="mono"
            style={{
              position: "absolute",
              top: "14px",
              right: "20px",
              fontSize: "10px",
              color: color,
              opacity: 0.5,
              letterSpacing: "0.1em",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* corner brackets */}
          <span style={{
            position: "absolute", top: 8, left: 8,
            width: 10, height: 10,
            borderTop: `1.5px solid ${color}`,
            borderLeft: `1.5px solid ${color}`,
            borderRadius: "2px 0 0 0",
            opacity: hovered ? 0.9 : 0.3,
            transition: "opacity 0.3s",
            zIndex: 1,
          }} />
          <span style={{
            position: "absolute", bottom: 8, right: 8,
            width: 10, height: 10,
            borderBottom: `1.5px solid ${color}`,
            borderRight: `1.5px solid ${color}`,
            borderRadius: "0 0 2px 0",
            opacity: hovered ? 0.9 : 0.3,
            transition: "opacity 0.3s",
            zIndex: 1,
          }} />

          {/* content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* title */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: hovered ? color : "var(--text-primary)",
                marginBottom: "8px",
                lineHeight: 1.3,
                transition: "color 0.25s ease",
                paddingRight: "32px",
              }}
            >
              {blog.title}
            </h2>

            {/* author */}
            <p
              className="mono"
              style={{
                fontSize: "11px",
                letterSpacing: "0.07em",
                color: "var(--text-muted)",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: color,
                  boxShadow: `0 0 5px ${color}`,
                  flexShrink: 0,
                }}
              />
              {blog.author}
            </p>

            {/* description */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                lineHeight: 1.75,
              }}
            >
              {excerpt(blog.description)}
            </p>

            {/* read more caret */}
            <motion.div
              animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="mono"
              style={{
                marginTop: "14px",
                fontSize: "11px",
                color: color,
                letterSpacing: "0.1em",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>READ_MORE</span>
              <span style={{ fontSize: "14px" }}>→</span>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

/* ─── page ──────────────────────────────────────────────────── */
export default function BlogsPage() {
  const [query, setQuery] = useState("");

  const filtered = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase()) ||
      b.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{ minHeight: "100vh", paddingTop: "96px", paddingBottom: "80px", position: "relative" }}
    >
      {/* ambient orbs */}
      <div className="orb orb-cyan"   style={{ top: "8%",   left: "-12%", width: "420px", height: "420px", opacity: 0.1 }} />
      <div className="orb orb-purple" style={{ bottom: "15%", right: "-10%", width: "380px", height: "380px", opacity: 0.09 }} />

      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 30 }}>

        {/* ── Header ──────────────────────────────────────────── */}
        <motion.div variants={slideInFromTop} style={{ marginBottom: "40px" }}>
          <span
            className="mono"
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "var(--neon-cyan)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px",
            }}
          >
            // terminal.blogs
          </span>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <h1
              className="gradient-text"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                lineHeight: 1.05,
              }}
            >
              All Blogs
            </h1>

            {/* post count pill */}
            <span
              className="mono glass"
              style={{
                fontSize: "11px",
                padding: "5px 14px",
                borderRadius: "999px",
                color: "var(--neon-cyan)",
                border: "1px solid var(--border-glow)",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
              }}
            >
              {filtered.length} / {blogs.length} posts
            </span>
          </div>

          {/* neon rule */}
          <div style={{
            height: "1px",
            marginTop: "20px",
            background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), transparent)",
            opacity: 0.4,
          }} />
        </motion.div>

        {/* ── Search bar ──────────────────────────────────────── */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          style={{ position: "relative", marginBottom: "40px" }}
        >
          {/* search icon */}
          <span
            className="mono"
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--neon-cyan)",
              fontSize: "13px",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            &gt;_
          </span>
          <input
            type="text"
            placeholder="Search posts…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px 12px 48px",
              background: "var(--bg-glass)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "8px",
              color: "var(--text-primary)",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              outline: "none",
              backdropFilter: "blur(12px)",
              transition: "border-color 0.2s, box-shadow 0.2s",
              boxSizing: "border-box",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "var(--neon-cyan)";
              e.target.style.boxShadow = "0 0 14px rgba(0,245,255,0.18)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "var(--border-subtle)";
              e.target.style.boxShadow = "none";
            }}
          />
        </motion.div>

        {/* ── Blog list ───────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <motion.ul
            style={{ display: "flex", flexDirection: "column", gap: "16px", padding: 0, margin: 0 }}
          >
            {filtered.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={i} />
            ))}
          </motion.ul>
        ) : (
          <motion.div
            variants={slideInFromTop}
            style={{
              textAlign: "center",
              padding: "60px 0",
            }}
          >
            <span className="mono" style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
              // no_posts_found — try a different query
            </span>
          </motion.div>
        )}

        {/* ── Footer note ─────────────────────────────────────── */}
        <motion.div
          variants={slideInFromTop}
          style={{ textAlign: "center", marginTop: "56px" }}
        >
          <span className="mono" style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", opacity: 0.6 }}>
            // {blogs.length} entries · rahulroy.in/blogs
          </span>
        </motion.div>

      </div>
    </motion.div>
  );
}