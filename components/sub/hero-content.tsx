"use client";
import TypingText from './TypingText';
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-7 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer & Graphics Designer
          </h1>
          
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
         <img
  src="/pic.jpg"
  alt="Rahul Roy"
  className="w-44 h-44 rounded-full object-cover mx-300 border-4 border-transparent bg-gradient-to-r from-purple-500 to-cyan-500 p-[2px]" 
/>
          
        </motion.div>
        


        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[600px] w-full h-auto"
        >
            <span className="flex flex-col">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-5xl sm:text-4xl md:text-6xl lg:text-6xl">
  <TypingText text="Rahul Roy"
  speed={70}
  delay={1000}
  />
</span>
  <img
    src="/hero-title.gif"
    alt="Web Developer & Graphic Designer"
    className="w-[600px] relative -left-4 h-auto mt-2"
  />
</span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer & UI/UX Designer blending code and creativity to build powerful, user-centric digital experiences.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="/aboutme"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
