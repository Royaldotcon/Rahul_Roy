"use client";


import { ProjectCard } from "@//components/sub/project-card";
import { PROJECTS } from "@//constants";
import { motion } from "framer-motion";

import {  slideInFromLeft,
  slideInFromRight,
  slideInFromTop } from "@/lib/motion";

const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-0 mt-20 w-full z-[20]"
    >
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-10"
    >
      <motion.h1
      variants={slideInFromTop} 
      className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        Projects
      </motion.h1>
      <motion.div
      variants={slideInFromLeft(0.8)}  
      className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </motion.div>
      <motion.h1
      variants={slideInFromTop}  
      className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Graphic Designs
      </motion.h1>
      <motion.div
      variants={slideInFromLeft(1)}  
      className="grid grid-cols-2 md:grid-cols-5 gap-5 px-3 max-w-6xl mx-auto">
 
  
<img
    src="graphics/thinkfast.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  /><img
    src="graphics/texa1.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
 <img
    src="graphics/innova.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
 <img
    src="/graphics/unscripted.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  /><img
    src="https://www.texavision.in/_next/image?url=%2Fdj.png&w=1080&q=75"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  /> <img
    src="https://www.texavision.in/_next/image?url=%2Fbohur.png&w=1080&q=75"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
  
  <img
    src="https://www.texavision.in/_next/image?url=%2Freunion.png&w=1080&q=75"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
  <img
    src="https://www.texavision.in/_next/image?url=%2FTEXAWALK.png&w=1080&q=75"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
  <img
    src="https://www.texavision.in/_next/image?url=%2Ffresh.png&w=1080&q=75"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
  <img
    src="https://www.texavision.in/_next/image?url=%2Ffarewell.png&w=1080&q=75"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
  </motion.div><br />
{/* Landscape Images */}
<motion.div
variants={slideInFromLeft(1)}  
className="grid grid-cols-1 md:grid-cols-2 gap-5 px-3 max-w-6xl mx-auto">
  <img
    src="/graphics/TEXTRIVIA.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
<img
    src="/graphics/RANGBAHAR.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  /><img
    src="/graphics/TEXATECH 4BY3.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
  </motion.div>


    </section>
    </motion.div>
  );
};

export default Projects;
