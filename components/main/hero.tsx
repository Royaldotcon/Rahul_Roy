import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
  autoPlay
  muted
  loop
  playsInline
  className="rotate-180 absolute left-0 top-[-36vh] w-full h-full object-cover z-10 max-h-[85vh] sm:top-[-340px] md:top-[-350px] lg:top-[-300px]"
  style={{
    filter: "hue-rotate(20deg) saturate(1.4) brightness(0.9)",
    zIndex: 10 }}
>
  <source src="/videos/blackhole.mp4" type="video/mp4" />
</video>

      <HeroContent classname="relative z-20" />
    </div>
  );
};
