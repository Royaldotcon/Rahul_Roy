"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────
   CONTACT INFO CARD
───────────────────────────────────────────── */
const contactMethods = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: "Email",
    value: "rr6216009@gmail.com",
    href: "mailto:rr6216009@gmail.com",
    accent: "#00f5ff",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 82500 84850",
    href: "tel:+918250084850",
    accent: "#bf5fff",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "rahul-roy-48582b304",
    href: "https://www.linkedin.com/in/rahul-roy-48582b304",
    accent: "#ff2d7e",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
    label: "GitHub",
    value: "royaldotcon",
    href: "https://github.com/royaldotcon",
    accent: "#00ff9f",
  },
];

/* ─────────────────────────────────────────────
   MAGNETIC CONTACT CARD
───────────────────────────────────────────── */
function ContactMethodCard({ method, index }: { method: typeof contactMethods[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.15);
    y.set((e.clientY - r.top - r.height / 2) * 0.15);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={method.href}
      target={method.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer noopener"
      onMouseMove={onMove}
      
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
      style={{
         x: sx, y: sy, textDecoration: "none",
        background: "var(--bg-glass)",
        border: "1px solid var(--border-subtle)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = method.accent + "66";
        el.style.boxShadow = `0 0 20px ${method.accent}22, 0 8px 32px rgba(0,0,0,0.3)`;
        el.style.background = `${method.accent}08`;
      }}
      onMouseLeave={(e) => {
        onLeave();
        const el = e.currentTarget;
        el.style.borderColor = "var(--border-subtle)";
        el.style.boxShadow = "none";
        el.style.background = "var(--bg-glass)";
      } }
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          background: method.accent + "15",
          border: `1px solid ${method.accent}33`,
          color: method.accent,
        }}
      >
        {method.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col min-w-0">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", color: "var(--text-muted)", textTransform: "uppercase" }}>
          {method.label}
        </span>
        <span
          className="truncate text-sm font-medium transition-colors duration-300"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", fontSize: "13px" }}
        >
          {method.value}
        </span>
      </div>

      {/* Arrow */}
      <span
        className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 flex-shrink-0"
        style={{ color: method.accent, fontSize: "14px" }}
      >
        ↗
      </span>
    </motion.a>
  );
}

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const inputStyle = (field: string) => ({
    width: "100%",
    background: focused === field ? "rgba(0,245,255,0.04)" : "rgba(0,0,0,0.3)",
    border: `1px solid ${focused === field ? "rgba(0,245,255,0.4)" : "var(--border-subtle)"}`,
    borderRadius: "10px",
    padding: "12px 16px",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: focused === field ? "0 0 0 3px rgba(0,245,255,0.08)" : "none",
  } as React.CSSProperties);

  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.18em",
    color: "var(--text-muted)",
    textTransform: "uppercase" as const,
    marginBottom: "6px",
    display: "block",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center gap-5 py-16 text-center"
      >
        {/* Success icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(0,255,159,0.1)",
            border: "1px solid rgba(0,255,159,0.3)",
            boxShadow: "0 0 30px rgba(0,255,159,0.15)",
          }}
        >
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="#00ff9f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <motion.polyline
              points="20 6 9 17 4 12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.svg>
        </div>

        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>
            Message Sent!
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.7" }}>
            Thanks for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
          className="px-6 py-2 rounded-lg text-sm transition-all duration-300"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "var(--neon-cyan)",
            border: "1px solid rgba(0,245,255,0.3)",
            background: "rgba(0,245,255,0.06)",
          }}
        >
          SEND ANOTHER
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            required
            placeholder="Rahul Roy"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            style={inputStyle("name")}
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            required
            placeholder="hello@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            style={inputStyle("email")}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label style={labelStyle}>Subject</label>
        <input
          type="text"
          required
          placeholder="Project collaboration / Freelance inquiry"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          onFocus={() => setFocused("subject")}
          onBlur={() => setFocused(null)}
          style={inputStyle("subject")}
        />
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          required
          rows={5}
          placeholder="Tell me about your project, idea, or just say hi..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          style={{ ...inputStyle("message"), resize: "none", lineHeight: "1.7" }}
        />
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", marginTop: "4px", textAlign: "right", letterSpacing: "0.08em" }}>
          {form.message.length} chars
        </div>
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full py-3.5 rounded-xl overflow-hidden group transition-all duration-300"
        style={{
          background: status === "sending"
            ? "rgba(0,245,255,0.05)"
            : "linear-gradient(135deg, rgba(0,245,255,0.1), rgba(191,95,255,0.1))",
          border: "1px solid rgba(0,245,255,0.35)",
          boxShadow: status === "sending" ? "none" : "0 0 20px rgba(0,245,255,0.1)",
          cursor: status === "sending" ? "not-allowed" : "pointer",
        }}
      >
        {/* Shine sweep */}
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.08), transparent)" }}
        />

        <span
          className="relative z-10 flex items-center justify-center gap-2"
          style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.18em", color: "var(--neon-cyan)", textShadow: "0 0 10px var(--neon-cyan)", textTransform: "uppercase" }}
        >
          {status === "sending" ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block w-4 h-4 rounded-full"
                style={{ border: "2px solid rgba(0,245,255,0.3)", borderTopColor: "var(--neon-cyan)" }}
              />
              Sending...
            </>
          ) : (
            <>Send Message ↗</>
          )}
        </span>
      </motion.button>
    </form>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-24 pb-20 z-30">

      {/* ── BACKGROUND ORBS ── */}
      <div className="orb orb-cyan absolute pointer-events-none" style={{ width: "500px", height: "500px", top: "-10%", left: "-15%", opacity: 0.5 }} />
      <div className="orb orb-purple absolute pointer-events-none" style={{ width: "400px", height: "400px", bottom: "0%", right: "-10%", opacity: 0.4, animationDelay: "3s" }} />

      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col gap-16">

        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, var(--neon-cyan))" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.25em", color: "var(--neon-cyan)", textShadow: "0 0 8px var(--neon-cyan)", textTransform: "uppercase" }}>
              Get In Touch
            </span>
          </div>

          <h1
            className="section-heading gradient-text"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Let&apos;s Build<br />Something Great.
          </h1>

          <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.8", maxWidth: "480px" }}>
            Have a project in mind, a collaboration idea, or just want to say hi?
            I&apos;m always open to interesting conversations and opportunities.
          </p>

          {/* Response time badge */}
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--neon-green)", boxShadow: "0 0 6px var(--neon-green)", animation: "blink 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
              Typically responds within 24 hours
            </span>
          </div>
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">

          {/* LEFT — Contact methods */}
          <div className="flex flex-col gap-4">
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "4px" }}>
              Contact Methods
            </p>

            {contactMethods.map((m, i) => (
              <ContactMethodCard key={m.label} method={m} index={i} />
            ))}

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 p-4 rounded-xl flex items-center gap-4"
              style={{ background: "var(--bg-glass)", border: "1px solid var(--border-subtle)", backdropFilter: "blur(12px)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(255,230,0,0.1)", border: "1px solid rgba(255,230,0,0.2)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffe600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase", display: "block" }}>Location</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-secondary)" }}>Kolkata, West Bengal, India 🇮🇳</span>
              </div>
              <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--neon-green)", letterSpacing: "0.08em" }}>IST +5:30</span>
            </motion.div>
          </div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "var(--bg-glass)",
              border: "1px solid var(--border-glow)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px var(--border-subtle)",
            }}
          >
            {/* Form header */}
            <div className="flex items-center gap-3 mb-6 pb-5" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.2)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 3 1.664 9.136a2 2 0 0 0 2.0.864H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H9.272a2 2 0 0 0-1.961 1.608L6.5 11"/>
                  <path d="M3 3h18M9 3v4"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>Send a Message</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em", marginTop: "3px" }}>All fields required</p>
              </div>
            </div>

            <ContactForm />
          </motion.div>
        </div>

        {/* ── BOTTOM — OPEN TO WORK BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(0,245,255,0.06) 0%, rgba(191,95,255,0.06) 100%)",
            border: "1px solid var(--border-glow)",
          }}
        >
          {/* Glow streak */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-purple), transparent)" }} />

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--neon-green)", boxShadow: "0 0 6px var(--neon-green)", animation: "blink 2s ease-in-out infinite" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--neon-green)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Open to Work
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>
              Available for freelance &amp; full-time roles.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6" }}>
              Frontend, Fullstack, UI/UX Design — remote or hybrid, Kolkata-based.
            </p>
          </div>

          <a
            href="mailto:rr6216009@gmail.com"
            className="flex-shrink-0 group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300"
            style={{
              background: "rgba(0,245,255,0.08)",
              border: "1px solid rgba(0,245,255,0.35)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(0,245,255,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", color: "var(--neon-cyan)", textShadow: "0 0 8px var(--neon-cyan)", textTransform: "uppercase" }}>
              Hire Me
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: "var(--neon-cyan)" }}>↗</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}