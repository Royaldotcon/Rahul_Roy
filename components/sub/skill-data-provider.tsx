"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.85 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.07,
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="skill-chip group relative"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        cursor: "default",
      }}
    >
      {/* Hex border frame */}
      <div
        className="skill-icon-wrap"
        style={{
          position: "relative",
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          background: "var(--bg-glass)",
          border: "1px solid var(--border-subtle)",
          backdropFilter: "blur(12px)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          overflow: "hidden",
        }}
      >
        {/* Scan line sweep on hover */}
        <motion.div
          className="scan-sweep"
          initial={{ y: "-100%" }}
          whileHover={{ y: "200%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 0%, var(--neon-cyan) 50%, transparent 100%)",
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Corner accent — top-left */}
        <span
          style={{
            position: "absolute",
            top: "4px",
            left: "4px",
            width: "8px",
            height: "8px",
            borderTop: "1.5px solid var(--neon-cyan)",
            borderLeft: "1.5px solid var(--neon-cyan)",
            borderRadius: "2px 0 0 0",
            opacity: 0.7,
            transition: "opacity 0.3s",
            zIndex: 2,
          }}
        />
        {/* Corner accent — bottom-right */}
        <span
          style={{
            position: "absolute",
            bottom: "4px",
            right: "4px",
            width: "8px",
            height: "8px",
            borderBottom: "1.5px solid var(--neon-cyan)",
            borderRight: "1.5px solid var(--neon-cyan)",
            borderRadius: "0 0 2px 0",
            opacity: 0.7,
            transition: "opacity 0.3s",
            zIndex: 2,
          }}
        />

        {/* Skill icon */}
        <Image
          src={`/skills/${src}`}
          width={width}
          height={height}
          alt={name}
          style={{
            objectFit: "contain",
            maxWidth: "38px",
            maxHeight: "38px",
            position: "relative",
            zIndex: 3,
            transition: "transform 0.3s ease, filter 0.3s ease",
            filter: "drop-shadow(0 0 6px rgba(0, 245, 255, 0.25))",
          }}
        />
      </div>

      {/* Skill name */}
      <span
        className="mono"
        style={{
          fontSize: "10px",
          color: "var(--text-muted)",
          letterSpacing: "0.06em",
          textAlign: "center",
          maxWidth: "64px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          transition: "color 0.3s ease",
        }}
      >
        {name}
      </span>

      {/* Hover glow styles via style tag (scoped via unique class) */}
      <style jsx>{`
        .skill-chip:hover .skill-icon-wrap {
          border-color: var(--neon-cyan) !important;
          box-shadow: 0 0 12px rgba(0, 245, 255, 0.3),
            inset 0 0 8px rgba(0, 245, 255, 0.06);
        }
        .skill-chip:hover span[style*="border-top"] {
          opacity: 1 !important;
        }
        .skill-chip:hover span[style*="border-bottom"] {
          opacity: 1 !important;
        }
        .skill-chip:hover .mono {
          color: var(--neon-cyan) !important;
        }
        .skill-chip:hover img {
          transform: scale(1.12);
          filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.5)) !important;
        }
      `}</style>
    </motion.div>
  );
};