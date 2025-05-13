import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-280px] inset-0 w-full h-full object-cover -z-20 max-h-screen sm:top-[-340px] md:top-[-240px] lg:top-[-340px]"

      >
        <source src="/videos/blackhole.mp4" type="video/mp4" />
      </video>

      <HeroContent />
    </div>
  );
};
