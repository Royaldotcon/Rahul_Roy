import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute left-0 item-center top-[-36vh] w-full h-full object-cover -z-20 max-h-[85vh] sm:top-[-340px] md:top-[-350px] lg:top-[-340px]"

      >
        <source src="/videos/blackhole.mp4" type="video/mp4" />
      </video>

      <HeroContent />
    </div>
  );
};
