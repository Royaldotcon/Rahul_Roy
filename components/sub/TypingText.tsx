"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  /** Neon color for the cursor. Defaults to var(--neon-cyan) */
  accentColor?: string;
  /** Show the `> ` prompt prefix */
  showPrompt?: boolean;
}

const TypingText = ({
  text,
  speed = 150,
  delay = 1000,
  className = "",
  accentColor,
  showPrompt = false,
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing / deleting logic — unchanged from original
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, delay]);

  // Cursor blink — independent interval
  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  const cursor = accentColor
    ? `var(${accentColor})`
    : "var(--neon-cyan)";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`mono whitespace-pre text-left ${className}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "1px" }}
    >
      {/* Optional terminal prompt prefix */}
      {showPrompt && (
        <span style={{ color: cursor, opacity: 0.7, marginRight: "6px", userSelect: "none" }}>
          &gt;
        </span>
      )}

      {/* The typed text */}
      <span style={{ color: "var(--text-primary)" }}>{displayedText}</span>

      {/* Neon block cursor */}
      <span
        style={{
          display: "inline-block",
          width: "9px",
          height: "1.1em",
          background: cursor,
          marginLeft: "2px",
          borderRadius: "1px",
          opacity: cursorVisible ? 1 : 0,
          boxShadow: cursorVisible ? `0 0 8px ${cursor}` : "none",
          transition: "opacity 0.08s ease, box-shadow 0.08s ease",
          verticalAlign: "text-bottom",
        }}
      />
    </motion.div>
  );
};

export default TypingText;