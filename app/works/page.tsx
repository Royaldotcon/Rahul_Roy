import { ProjectCard } from "@//components/sub/project-card";
import { PROJECTS } from "@//constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Graphic Designs
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5 px-3 max-w-6xl mx-auto">
 
  <img
    src="https://www.texavision.in/_next/image?url=%2Fdj.png&w=1080&q=75"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
<img
    src="graphics/THINKFAST.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  /><img
    src="graphics/texa1.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
 <img
    src="/graphicS/innova.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
 <img
    src="/graphics/unscripted.png"
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
   

  </div><br />
{/* Landscape Images */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-3 max-w-6xl mx-auto">
  <img
    src="/graphics/textrivia.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
<img
    src="/graphics/rangbahar.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  /><img
    src="/graphics/TEXATECH 4BY3.png"
    alt="Rahul Roy"
    className="w-full h-auto object-cover border-4 border-transparent bg-gray-900 p-[2px]"
  />
  </div>

    </section>
  );
};

export default Projects;
