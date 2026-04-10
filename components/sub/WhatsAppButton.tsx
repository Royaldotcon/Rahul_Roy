"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/918250084850"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      whileTap={{ scale: 0.92 }}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 14px",
        borderRadius: "999px",
        background: "var(--bg-glass)",
        backdropFilter: "blur(16px)",
        border: "1px solid var(--border-subtle)",
        color: "var(--text-primary)",
        textDecoration: "none",
        overflow: "hidden",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 0 20px rgba(0, 255, 159, 0.35), 0 0 40px rgba(0, 255, 159, 0.15)"
          : "0 4px 24px rgba(0,0,0,0.4)",
        borderColor: hovered ? "var(--neon-green)" : "var(--border-subtle)",
      }}
    >
      {/* Animated neon ring ping */}
      <AnimatePresence>
        {!hovered && (
          <motion.span
            key="ping"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1 }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "999px",
              border: "1px solid var(--neon-green)",
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>

      {/* Shimmer sweep */}
      <motion.span
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, transparent, rgba(0,255,159,0.12), transparent)",
          pointerEvents: "none",
          borderRadius: "999px",
        }}
      />

      {/* Corner brackets */}
      <span
        style={{
          position: "absolute",
          top: "4px",
          left: "6px",
          width: "7px",
          height: "7px",
          borderTop: "1.5px solid var(--neon-green)",
          borderLeft: "1.5px solid var(--neon-green)",
          borderRadius: "1px 0 0 0",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.3s",
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: "4px",
          right: "6px",
          width: "7px",
          height: "7px",
          borderBottom: "1.5px solid var(--neon-green)",
          borderRight: "1.5px solid var(--neon-green)",
          borderRadius: "0 0 2px 0",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.3s",
        }}
      />

      {/* Icon */}
      <motion.span
        animate={{ rotate: hovered ? [0, -12, 12, 0] : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <FaWhatsapp
          style={{
            fontSize: "20px",
            color: "var(--neon-green)",
            filter: hovered
              ? "drop-shadow(0 0 8px var(--neon-green))"
              : "drop-shadow(0 0 3px rgba(0,255,159,0.4))",
            transition: "filter 0.3s ease",
          }}
        />
      </motion.span>

      {/* Label — slides in on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            key="label"
            initial={{ opacity: 0, width: 0, marginLeft: 0 }}
            animate={{ opacity: 1, width: "auto", marginLeft: 2 }}
            exit={{ opacity: 0, width: 0, marginLeft: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mono"
            style={{
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "var(--neon-green)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              textTransform: "uppercase",
            }}
          >
            Chat now
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

export default WhatsAppButton;