"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook, FaWhatsapp, FaMobile,
  FaMailBulk, FaAddressCard, FaInstagram, FaGithub,
  FaFirefoxBrowser,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { FRONTEND_SKILL, BACKEND_SKILL, FULLSTACK_SKILL } from "@/constants";

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */

const SectionHeading = ({
  children,
  accent = "var(--neon-cyan)",
}: {
  children: React.ReactNode;
  accent?: string;
}) => (
  <motion.h2
    variants={slideInFromTop}
    style={{
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "clamp(1.15rem, 2.4vw, 1.55rem)",
      marginBottom: "16px",
      marginTop: "44px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    }}
  >
    <span
      style={{
        display: "inline-block",
        width: "28px",
        height: "2px",
        background: accent,
        boxShadow: `0 0 8px ${accent}`,
        flexShrink: 0,
        borderRadius: "2px",
      }}
    />
    <span
      style={{
        background: `linear-gradient(90deg, ${accent}, var(--neon-purple))`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </span>
  </motion.h2>
);

const BodyText = ({
  children,
  delay = 1,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.p
    variants={slideInFromLeft(delay)}
    style={{
      fontFamily: "var(--font-body)",
      fontSize: "clamp(0.88rem, 1.4vw, 0.98rem)",
      color: "var(--text-secondary)",
      lineHeight: 1.85,
      textAlign: "justify",
      marginBottom: "14px",
    }}
  >
    {children}
  </motion.p>
);

const GlassListItem = ({
  children,
  index,
  accent = "var(--neon-cyan)",
}: {
  children: React.ReactNode;
  index: number;
  accent?: string;
}) => (
  <motion.div
    variants={slideInFromLeft(0.8 + index * 0.08)}
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      padding: "12px 16px",
      background: "var(--bg-glass)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "8px",
      backdropFilter: "blur(8px)",
      marginBottom: "10px",
    }}
  >
    <span
      style={{
        flexShrink: 0,
        marginTop: "7px",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: accent,
        boxShadow: `0 0 6px ${accent}`,
      }}
    />
    <span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.93rem",
        color: "var(--text-secondary)",
        lineHeight: 1.7,
        zIndex: 30,
      }}
    >
      {children}
    </span>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const ventures = [
  {
    title: "Hathat",
    desc: "Personal portfolio crafted in raw HTML — minimalist design philosophy and technical fundamentals.",
    accent: "var(--neon-cyan)",
  },
  {
    title: "Co-founder, Attiray & Co.",
    desc: "Fashion-forward brand delivering custom-printed apparel including anime-inspired T-shirts.",
    accent: "var(--neon-purple)",
  },
  {
    title: "Freelance Designer & Developer",
    desc: "Collaborated with diverse clients blending creative strategy with technical execution.",
    accent: "var(--neon-pink)",
  },
  {
    title: "Texavision 2025 — Brand Designer",
    desc: "Complete visual branding: digital banners, posters, merchandise, and event backdrops for our college's premier tech-cultural fest.",
    accent: "var(--neon-green)",
  },
];

const socials = [
  { icon: <FaFacebook />,       href: "https://facebook.com/roy.rahul1818",                           label: "Facebook"  },
  { icon: <FaWhatsapp />,       href: "https://wa.me/918250084850",                                   label: "WhatsApp"  },
  { icon: <FaInstagram />,      href: "https://instagram.com/roy.rahul._",                            label: "Instagram" },
  { icon: <FaGithub />,         href: "https://github.com/royaldotcon",                               label: "GitHub"    },
  { icon: <FaLinkedin />,       href: "https://www.linkedin.com/in/rahul-roy-48582b304",              label: "LinkedIn"  },
  { icon: <FaFirefoxBrowser />, href: "https://www.aitihya.co.in/",                                   label: "Aitihya"   },
];

const contactItems = [
  { icon: <FaMobile />,      href: "tel:+918250084850",          label: "+91 8250084850",                                               accent: "var(--neon-cyan)"   },
  { icon: <FaMailBulk />,    href: "mailto:rr6216009@gmail.com", label: "rr6216009@gmail.com",                                          accent: "var(--neon-purple)" },
  { icon: <FaAddressCard />, href: "/",                          label: "Srikrishnapur, Dasghara, Dhaniakhali, Hooghly, WB – 712402",   accent: "var(--neon-pink)"   },
];

const skillRows = [
  { label: "// skills", key: "front", data: FRONTEND_SKILL, accent: "var(--neon-cyan)"   },
  { label: "// skills",  key: "back",  data: BACKEND_SKILL,  accent: "var(--neon-purple)" },
  { label: "// skills",    key: "other", data: FULLSTACK_SKILL, accent: "var(--neon-pink)"  },
];

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{
        minHeight: "100vh",
        paddingTop: "96px",
        paddingBottom: "80px",
        position: "relative",
      }}
    >
      {/* ambient orbs */}
      <div className="orb orb-cyan"   style={{ top: "6%",    left: "-12%", width: "500px", height: "500px", opacity: 0.11 }} />
      <div className="orb orb-purple" style={{ top: "38%",   right: "-10%",width: "420px", height: "420px", opacity: 0.09 }} />
      <div className="orb orb-pink"   style={{ bottom: "8%", left: "15%",  width: "320px", height: "320px", opacity: 0.07 }} />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 30,
        }}
      >

        {/* ══════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "clamp(24px, 5vw, 48px)",
            alignItems: "center",
            marginBottom: "52px",
          }}
        >
          {/* rotating ring + photo */}
          <motion.div variants={slideInFromTop} style={{ position: "relative", flexShrink: 0 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: "-5px",
                borderRadius: "50%",
                background:
                  "conic-gradient(var(--neon-cyan), var(--neon-purple), var(--neon-pink), var(--neon-green), var(--neon-cyan))",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "50%",
                padding: "3px",
                background: "var(--bg-primary)",
              }}
            >
              <Image
                src="/pic.jpg"
                alt="Rahul Roy"
                width={156}
                height={156}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                  width: "156px",
                  height: "156px",
                }}
              />
            </div>
            {/* online dot */}
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                width: "13px",
                height: "13px",
                borderRadius: "50%",
                background: "var(--neon-green)",
                border: "2px solid var(--bg-primary)",
                boxShadow: "0 0 8px var(--neon-green)",
                zIndex: 2,
              }}
            />
          </motion.div>

          {/* name */}
          <div>
            <motion.div
              variants={slideInFromTop}
              className="mono"
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                color: "var(--neon-cyan)",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              // identity.profile
            </motion.div>

            <motion.h1
              variants={slideInFromLeft(0.3)}
              className="glitch gradient-text"
              data-text="Rahul Roy"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
                lineHeight: 1.05,
                marginBottom: "8px",
              }}
            >
              Rahul Roy
            </motion.h1>

            <motion.p
              variants={slideInFromLeft(0.45)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                color: "var(--text-secondary)",
                marginBottom: "14px",
              }}
            >
              Web Developer &amp; Graphic Designer
            </motion.p>

            <motion.p
              variants={slideInFromLeft(0.6)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.93rem",
                color: "var(--text-muted)",
                maxWidth: "460px",
                lineHeight: 1.75,
              }}
            >
              Full Stack Engineer &amp; UI/UX Designer — blending code and
              creativity to build powerful, user-centric digital experiences.
            </motion.p>
          </div>
        </div>

        {/* divider */}
        <motion.div
          variants={slideInFromLeft(0.4)}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), transparent)",
            marginBottom: "8px",
            opacity: 0.35,
          }}
        />

        {/* ══════════════════════════════════════════════════════
            BIO
        ══════════════════════════════════════════════════════ */}
        <SectionHeading accent="var(--neon-cyan)">
          Founder · Technologist · Designer · Cultural Entrepreneur
        </SectionHeading>

        <BodyText delay={0.8}>
          My name is Rahul Roy — a multidisciplinary professional with a mission
          to integrate creativity, technology, and cultural heritage into
          impactful, forward-thinking solutions. I currently serve as the{" "}
          <strong style={{ color: "var(--text-primary)" }}>Founder &amp; CEO of Aitihya</strong>,
          an e-commerce platform dedicated to promoting Bengal&apos;s traditional
          craftsmanship and empowering artisans across India.
        </BodyText>

        <BodyText delay={0.95}>
          With a robust background in{" "}
          <strong style={{ color: "var(--text-primary)" }}>software development</strong>,{" "}
          <strong style={{ color: "var(--text-primary)" }}>digital design</strong>, and{" "}
          <strong style={{ color: "var(--text-primary)" }}>entrepreneurship</strong>,
          I bridge the gap between functionality and artistic expression — spanning
          full-stack development, automation, brand building, and UI/UX design, all
          rooted in a vision of innovation and inclusivity.
        </BodyText>

        {/* ══════════════════════════════════════════════════════
            SKILLS — SkillText + SkillDataProvider
        ══════════════════════════════════════════════════════ */}
        <motion.div variants={slideInFromTop} style={{ marginTop: "56px" }}>
          <SkillText />
        </motion.div>

        {skillRows.map(({ label, key, data, accent }) => (
          <motion.div
            key={key}
            variants={slideInFromLeft(1)}
            style={{ marginBottom: "24px" }}
          >
            <span
              className="mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: accent,
                textTransform: "uppercase",
                display: "block",
                marginBottom: "10px",
                opacity: 0.75,
              }}
            >
              {label}
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                padding: "20px",
                background: "var(--bg-glass)",
                border: "1px solid var(--border-subtle)",
                borderLeft: `3px solid ${accent}`,
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
              }}
            >
              {data.map(
                (
                  skill: { skill_name: string; image: string; width: number; height: number },
                  i: number
                ) => (
                  <SkillDataProvider
                    key={skill.skill_name}
                    src={skill.image}
                    name={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                    index={i}
                  />
                )
              )}
            </div>
          </motion.div>
        ))}

        {/* ══════════════════════════════════════════════════════
            WHAT I BUILD
        ══════════════════════════════════════════════════════ */}
        <SectionHeading accent="var(--neon-purple)">What I Build</SectionHeading>

        <BodyText delay={1}>
          My work is rooted in utility, creativity, and scalability. I have developed:
        </BodyText>

        {[
          "Automated platforms for users to generate personal portfolio pages",
          "Cloud-integrated file upload and management systems",
          "Visual blog generators powered by user-submitted content",
          "Aesthetic and responsive user interfaces for seamless web interaction",
        ].map((item, i) => (
          <GlassListItem key={i} index={i} accent="var(--neon-purple)">
            {item}
          </GlassListItem>
        ))}

        {/* ══════════════════════════════════════════════════════
            AITIHYA
        ══════════════════════════════════════════════════════ */}
        <SectionHeading accent="var(--neon-pink)">
          Aitihya — My Mission, My Legacy
        </SectionHeading>

        <motion.div
          variants={slideInFromRight(0.8)}
          style={{
            padding: "24px 28px",
            borderRadius: "12px",
            background: "var(--bg-glass)",
            backdropFilter: "blur(14px)",
            border: "1px solid var(--border-subtle)",
            borderLeft: "3px solid var(--neon-pink)",
            marginBottom: "32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, transparent, rgba(255,45,126,0.06), transparent)",
              pointerEvents: "none",
            }}
          />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "12px" }}>
            Aitihya is more than a business — it is a cultural movement. Through
            this platform, I aim to preserve and promote India&apos;s traditional arts,
            especially for artisans without GST registration or digital visibility.
            Aitihya provides them a professional marketplace combining storytelling,
            virtual product previews, and ethical commerce.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Our long-term vision: a national platform that drives sales{" "}
            <em>and</em> tells the stories behind the products — keeping heritage
            alive in the modern world.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            VENTURES
        ══════════════════════════════════════════════════════ */}
        <SectionHeading accent="var(--neon-green)">
          Other Ventures &amp; Projects
        </SectionHeading>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {ventures.map((v, i) => (
            <motion.div
              key={i}
              variants={slideInFromLeft(0.7 + i * 0.1)}
              className="glass card-hover"
              style={{
                padding: "20px 22px",
                borderRadius: "10px",
                borderTop: `2px solid ${v.accent}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span className="mono" style={{
                position: "absolute", top: "10px", right: "12px",
                fontSize: "10px", color: "var(--text-muted)", opacity: 0.4,
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "0.98rem",
                color: "var(--text-primary)",
                marginBottom: "8px",
                paddingRight: "28px",
              }}>
                {v.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.855rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}>
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════
            VALUES
        ══════════════════════════════════════════════════════ */}
        <SectionHeading accent="var(--neon-cyan)">My Values &amp; Vision</SectionHeading>

        <BodyText delay={1}>
          I believe in building with purpose. Inspired by the values of{" "}
          <strong style={{ color: "var(--text-primary)" }}>Mahatma Gandhi</strong>,
          I strive to lead with simplicity, truth, and service. Through{" "}
          <strong style={{ color: "var(--text-primary)" }}>Tech Mechanic</strong>,
          my independent tech repair service, and my creative pursuits, I remain
          committed to solving real-world problems while staying connected to people.
        </BodyText>

        <BodyText delay={1.1}>
          I am deeply passionate about storytelling, design, and technology.
          Whether launching a brand, coding a system, mentoring peers, or promoting
          grassroots artisans — I work to make every action meaningful.
        </BodyText>

        {/* ══════════════════════════════════════════════════════
            LOOKING AHEAD
        ══════════════════════════════════════════════════════ */}
        <SectionHeading accent="var(--neon-purple)">Looking Ahead</SectionHeading>

        <BodyText delay={1}>
          I envision a future where{" "}
          <strong style={{ color: "var(--text-primary)" }}>
            Aitihya becomes a globally recognized platform
          </strong>{" "}
          for Indian artisans, where my designs influence brands and experiences,
          and where my work uplifts communities and preserves culture. I aim to
          keep growing as a leader, technologist, and creator — constantly learning,
          evolving, and contributing.
        </BodyText>

        {/* ══════════════════════════════════════════════════════
            SIGNATURE
        ══════════════════════════════════════════════════════ */}
        <motion.div
          variants={slideInFromTop}
          style={{
            margin: "44px 0 60px",
            padding: "24px 28px",
            background: "var(--bg-glass)",
            border: "1px solid var(--border-glow)",
            borderRadius: "12px",
            backdropFilter: "blur(16px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.07), transparent)",
              pointerEvents: "none",
            }}
          />
          <span style={{
            position: "absolute", top: "10px", left: "16px",
            fontFamily: "var(--font-display)", fontSize: "52px", lineHeight: 1,
            color: "var(--neon-cyan)", opacity: 0.13, userSelect: "none",
          }}>
            "
          </span>
          <p
            className="gradient-text"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(0.98rem, 1.8vw, 1.15rem)",
              lineHeight: 1.6,
              position: "relative",
              zIndex: 1,
              paddingLeft: "8px",
            }}
          >
            I am Rahul Roy. I build with purpose, design with passion, and lead
            with vision — committed to transforming ideas into lasting impact.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════════════════ */}
        <div id="contact" style={{ scrollMarginTop: "100px" }}>
          <div style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-purple), transparent)",
            marginBottom: "44px",
            opacity: 0.35,
          }} />

          <motion.div variants={slideInFromTop} style={{ marginBottom: "32px" }}>
            <span className="mono" style={{
              fontSize: "11px", letterSpacing: "0.14em",
              color: "var(--neon-cyan)", textTransform: "uppercase",
              display: "block", marginBottom: "10px",
            }}>
              // contact.init
            </span>
            <h2
              className="gradient-text"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                lineHeight: 1.05,
              }}
            >
              Contact Me
            </h2>
          </motion.div>

          {/* contact rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
            {contactItems.map(({ icon, href, label, accent }, i) => (
              <motion.div key={i} variants={slideInFromLeft(0.7 + i * 0.12)}>
                <Link href={href} target="_blank" style={{ textDecoration: "none" }}>
                  <div
                    className="glass"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "13px 20px",
                      borderRadius: "10px",
                      borderLeft: `3px solid ${accent}`,
                      cursor: "pointer",
                      transition: "box-shadow 0.25s ease",
                      boxSizing: "border-box",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 18px ${accent}35`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <span style={{ color: accent, fontSize: "17px", flexShrink: 0 }}>{icon}</span>
                    <span className="mono" style={{ fontSize: "12px", color: "var(--text-secondary)", letterSpacing: "0.04em" }}>
                      {label}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* socials */}
          <motion.div
            variants={slideInFromLeft(1.1)}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          >
            {socials.map(({ icon, href, label }) => (
              <Link key={label} href={href} target="_blank" aria-label={label} style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass"
                  style={{
                    width: "44px", height: "44px",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "18px",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-subtle)",
                    transition: "color 0.2s, border-color 0.2s, box-shadow 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.color = "var(--neon-cyan)";
                    el.style.borderColor = "var(--neon-cyan)";
                    el.style.boxShadow = "0 0 12px rgba(0,245,255,0.28)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.color = "var(--text-secondary)";
                    el.style.borderColor = "var(--border-subtle)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {icon}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}