'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS, SOCIALS } from "@/constants";

/* ─────────────────────────────────────────────
   THEME TOGGLE BUTTON
───────────────────────────────────────────── */
function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light") setTheme("light");
  }, []);

  const toggle = () => {
    const fn = (window as any).__toggleTheme;
    if (fn) fn();
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-[52px] h-[26px] rounded-full transition-all duration-500 focus:outline-none"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(191,95,255,0.15))"
            : "linear-gradient(135deg, rgba(100,32,214,0.15), rgba(192,38,211,0.15))",
        border: "1px solid var(--border-glow)",
        boxShadow: theme === "dark" ? "var(--glow-cyan)" : "var(--glow-purple)",
      }}
    >
      {/* Track icons */}
      <span
        className="absolute inset-0 flex items-center justify-between px-[6px] text-[11px] pointer-events-none select-none"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span style={{ opacity: theme === "light" ? 1 : 0.3, transition: "opacity 0.3s" }}>☀</span>
        <span style={{ opacity: theme === "dark" ? 1 : 0.3, transition: "opacity 0.3s" }}>☾</span>
      </span>
      {/* Thumb */}
      <span
        className="absolute top-[3px] w-[20px] h-[20px] rounded-full transition-all duration-500"
        style={{
          left: theme === "dark" ? "calc(100% - 23px)" : "3px",
          background:
            theme === "dark"
              ? "var(--neon-cyan)"
              : "var(--accent-primary)",
          boxShadow:
            theme === "dark"
              ? "0 0 8px var(--neon-cyan)"
              : "0 0 8px var(--accent-primary)",
        }}
      />
    </button>
  );
}

/* ─────────────────────────────────────────────
   MAIN NAVBAR
───────────────────────────────────────────── */
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled]                 = useState(false);
  const [activeLink, setActiveLink]             = useState<string | null>(null);
  const pathname                                = usePathname();
  const mobileMenuRef                           = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className="w-full h-[65px] fixed top-0 z-50 transition-all duration-500"
        style={{
          background:  "var(--bg-glass)",
          backdropFilter:  "blur(20px) saturate(180%)",
          WebkitBackdropFilter:  "blur(20px) saturate(180%)" ,
          borderBottom: 
            "1px solid var(--border-subtle)"
            ,
          boxShadow: 
            "0 4px 40px rgba(0,0,0,0.4), 0 1px 0 var(--border-subtle)"
            ,
        }}
      >
        {/* Neon top line (visible when scrolled) */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] transition-all duration-500"
          style={{
            background: "linear-gradient(90deg, transparent 0%, var(--neon-cyan) 30%, var(--neon-purple) 70%, transparent 100%)"
             ,
            boxShadow: "0 0 8px var(--neon-cyan)",
            opacity: 0.7,
          }}
        />

        <div className="w-full h-full flex items-center justify-between px-6 md:px-10 max-w-7xl mx-auto">

          {/* ── LOGO ── */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            style={{ textDecoration: "none" }}
          >
            <div className="relative">
              {/* Glow ring around logo */}
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle, rgba(0,245,255,0.2), transparent 70%)",
                  filter: "blur(8px)",
                  transform: "scale(1.4)",
                }}
              />
              <Image
                src="/logo.png"
                alt="Rahul Roy Logo"
                width={44}
                height={44}
                draggable={false}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                style={{ borderRadius: "50%" }}
              />
            </div>

            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-[15px] tracking-wider transition-all duration-300"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                  letterSpacing: "0.08em",
                }}
              >
                RAHUL
              </span>
              <span
                className="text-[10px] tracking-[0.3em] transition-all duration-300"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--neon-cyan)",
                  textShadow: "0 0 8px var(--neon-cyan)",
                }}
              >
                ROY
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV LINKS ── */}
          <div className="hidden md:flex items-center gap-1">
            <div
              className="flex items-center gap-1 px-3 py-2 rounded-full"
              style={{
                background: "rgba(0,0,0,0.2)",
                border: "1px solid var(--border-subtle)",
                backdropFilter: "blur(10px)",
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.link ||
                  (link.link !== "/" && pathname.startsWith(link.link));

                return (
                  <Link
                    key={link.title}
                    href={link.link}
                    onMouseEnter={() => setActiveLink(link.title)}
                    onMouseLeave={() => setActiveLink(null)}
                    className="relative px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: isActive
                        ? "var(--neon-cyan)"
                        : activeLink === link.title
                        ? "var(--text-primary)"
                        : "var(--text-secondary)",
                      textDecoration: "none",
                      letterSpacing: "0.04em",
                      textShadow: isActive ? "0 0 12px var(--neon-cyan)" : "none",
                    }}
                  >
                    {/* Active / hover background */}
                    {(isActive || activeLink === link.title) && (
                      <span
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: isActive
                            ? "rgba(0,245,255,0.08)"
                            : "rgba(255,255,255,0.04)",
                          border: isActive
                            ? "1px solid rgba(0,245,255,0.25)"
                            : "1px solid transparent",
                          transition: "all 0.3s ease",
                        }}
                      />
                    )}
                    {/* Active dot */}
                    {isActive && (
                      <span
                        className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full"
                        style={{
                          background: "var(--neon-cyan)",
                          boxShadow: "0 0 6px var(--neon-cyan)",
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: SOCIALS + THEME TOGGLE ── */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/contact">
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
                  HIRE ME
                </span>
              </div>
              </a>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                  aria-label={name}
                  className="group relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
                  style={{
                    border: "1px solid var(--border-subtle)",
                    background: "rgba(0,0,0,0.2)",
                  }}
                >
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,245,255,0.08)" }}
                  />
                  <Icon
                    className="h-4 w-4 relative z-10 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: "var(--text-secondary)",
                    }}
                  />
                  {/* Tooltip */}
                  <span
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Theme toggle */}
            
            
          </div>

          {/* ── HAMBURGER ── */}
          <div className="md:hidden flex items-center gap-3">
              <a href="/contact">
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
                  HIRE ME
                </span>
              </div>
              </a>
            
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg transition-all duration-300"
              style={{
                border: "1px solid var(--border-subtle)",
                background: isMobileMenuOpen ? "rgba(0,245,255,0.08)" : "rgba(0,0,0,0.2)",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-[1.5px] rounded-full transition-all duration-400"
                  style={{
                    width:
                      i === 1
                        ? isMobileMenuOpen ? "0px" : "14px"
                        : "20px",
                    background: "var(--neon-cyan)",
                    boxShadow: "0 0 4px var(--neon-cyan)",
                    transform:
                      i === 0 && isMobileMenuOpen
                        ? "translateY(6.5px) rotate(45deg)"
                        : i === 2 && isMobileMenuOpen
                        ? "translateY(-6.5px) rotate(-45deg)"
                        : "none",
                    opacity: i === 1 && isMobileMenuOpen ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 md:hidden transition-all duration-500"
        style={{
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
          opacity: isMobileMenuOpen ? 1 : 0,
          transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-16px)",
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(2,0,8,0.92)",
            backdropFilter: "blur(20px)",
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className="absolute top-[65px] left-4 right-4 rounded-2xl overflow-hidden"
          style={{
            background: "var(--bg-glass)",
            border: "1px solid var(--border-glow)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6), var(--glow-purple)",
          }}
        >
          {/* Top neon line */}
          <div
            className="h-[2px] w-full"
            style={{
              background:
                "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink))",
            }}
          />

          <div className="p-6 flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => {
              const isActive =
                pathname === link.link ||
                (link.link !== "/" && pathname.startsWith(link.link));

              return (
                <Link
                  key={link.title}
                  href={link.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: isActive ? "var(--neon-cyan)" : "var(--text-secondary)",
                    background: isActive ? "rgba(0,245,255,0.06)" : "transparent",
                    border: isActive
                      ? "1px solid rgba(0,245,255,0.2)"
                      : "1px solid transparent",
                    textDecoration: "none",
                    textShadow: isActive ? "0 0 12px var(--neon-cyan)" : "none",
                    animationDelay: `${i * 60}ms`,
                    letterSpacing: "0.04em",
                  }}
                >
                  {/* Index number */}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                    }}
                  >
                    0{i + 1}
                  </span>
                  {link.title}
                  {isActive && (
                    <span
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{
                        background: "var(--neon-cyan)",
                        boxShadow: "0 0 6px var(--neon-cyan)",
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Divider */}
            <div
              className="my-2 h-px"
              style={{ background: "var(--border-subtle)" }}
            />

            {/* Socials */}
            <div className="flex justify-center gap-4 pt-1">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                  aria-label={name}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300"
                  style={{
                    border: "1px solid var(--border-subtle)",
                    background: "rgba(0,0,0,0.3)",
                  }}
                >
                  <Icon
                    className="h-4 w-4"
                    style={{ color: "var(--text-secondary)" }}
                  />
                </Link>
              ))}
            </div>

            {/* Footer tag */}
            <p
              className="text-center mt-3"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
              }}
            >
              &lt;/RAHUL_ROY&gt;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};