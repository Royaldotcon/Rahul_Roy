import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="p-8 text-white">
      {/* Title and Introduction Section */}
      <br /><br />
     
     

      <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
        {/*<img
          src="/pic.jpg"
          alt="Rahul Roy"
          className="w-44 h-44 rounded-full object-cover mx-300 border-4 border-transparent bg-gradient-to-r from-purple-500 to-cyan-500 p-[2px]"
        />*/}
      </div>

      {/* Profile Information */}
      <div className="flex flex-col gap-6 mt-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full w-full h-auto">
        <span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-5xl sm:text-4xl md:text-6xl lg:text-6xl">
            Comming Soon!!
          </span>
          <br />
          
        </span>
      </div>

  
    </main>
  );
}
