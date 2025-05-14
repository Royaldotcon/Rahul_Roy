import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
export default function AboutPage() {
  return (
    <main className="p-8 text-white">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4">This is the About page of my space-themed portfolio.</p>
      <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
         <img
  src="/pic.jpg"
  alt="Rahul Roy"
  className="w-44 h-44 rounded-full object-cover mx-300 border-4 border-transparent bg-gradient-to-r from-purple-500 to-cyan-500 p-[2px]" 
/>
          
        </div>
        


        <div
     
          className="flex flex-col gap-6 mt-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[600px] w-full h-auto"
        >
          <span>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-5xl sm:text-4xl md:text-6xl lg:text-6xl">
              Rahul Roy
            </span>{" "}
            <br></br>Web Developer & Graphic Designer
          </span>
        </mdiv>

        <p
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer & UI/UX Designer blending code and creativity to build powerful, user-centric digital experiences.
        </p>
    </main>
  );
}
