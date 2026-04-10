import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

/* ─────────────────────────────────────────────
   Triangle row — forces items onto ONE line,
   scales the whole triangle down on small screens
   via a CSS container that uses transform: scale()
───────────────────────────────────────────── */
function TriangleRow({
  skills,
  index,
}: {
  skills: typeof SKILL_DATA;
  index: number;
}) {
  return (
    <div className="flex flex-row justify-center items-center gap-3 md:gap-5 w-full">
      {skills.map((skill, i) => (
        <SkillDataProvider
          key={skill.skill_name}
          src={skill.image}
          name={skill.skill_name}
          width={skill.width}
          height={skill.height}
          index={index + i}
        />
      ))}
    </div>
  );
}

export const Skills = () => {
  // Build rows — each array is one row of the triangle.
  // Adjust slices to match your actual data counts so the
  // triangle shape (fewest items top → most items bottom) is preserved.
  const rows = [
    SKILL_DATA,
    FRONTEND_SKILL,
    BACKEND_SKILL,
    FULLSTACK_SKILL,
    OTHER_SKILL,
  ];

  // Running index for staggered animation across all rows
  let globalIndex = 0;

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/*
        Outer wrapper: on mobile we scale the whole triangle down
        so the shape is preserved but fits the screen.
        - xs/sm: scale(0.52)  — very small screens
        - md:    scale(0.75)  — tablets
        - lg:    scale(0.9)   — desktop (original)
        Adjust the scale values to taste.
      */}
      <div
        className="
          mt-6 flex flex-col items-center gap-3 md:gap-4
          origin-top
          scale-[0.52] sm:scale-[0.65] md:scale-[0.78] lg:scale-[0.9]
          w-[192%] sm:w-[154%] md:w-[128%] lg:w-full
        "
        /*
          Because scale() shrinks visually but keeps the layout box
          the same size, we counteract with an inverse width so the
          container doesn't push horizontal scroll.
          192% ≈ 1 / 0.52, 154% ≈ 1 / 0.65, etc.
        */
      >
        {rows.map((rowSkills, ri) => {
          const startIndex = globalIndex;
          globalIndex += rowSkills.length;
          return (
            <TriangleRow
              key={ri}
              skills={rowSkills}
              index={startIndex}
            />
          );
        })}
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            style={{ filter: "hue-rotate(20deg) saturate(1.4) brightness(0.5)" }}
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};