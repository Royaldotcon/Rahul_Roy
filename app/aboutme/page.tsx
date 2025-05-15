"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { FaYoutube, FaFacebook, FaWhatsapp, FaMobile, FaMailBulk, FaWeebly, FaSitemap, FaAddressCard, FaInstagram, FaGithub, FaFirefoxBrowser, FaSearchengin } from "react-icons/fa";import { FaLinkedin } from "react-icons/fa6";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import Link from "next/link";





import {  slideInFromLeft,
  slideInFromRight,
  slideInFromTop } from "@/lib/motion";

export default function AboutPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-0 mt-20 w-full z-[20]"
    >
     
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Rahul Roy – About</title>
      </Head>
     
    
    <main className="p-8 text-white">
      {/* Title and Introduction Section */}
     
     
     

      <motion.div
      variants={slideInFromTop}
       className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
        <img
          src="/pic.jpg"
          alt="Rahul Roy"
          className="w-44 h-44 rounded-full object-cover mx-300 border-4 border-transparent bg-gradient-to-r from-purple-500 to-cyan-500 p-[2px]"
        />
      </motion.div>

      {/* Profile Information */}
      <motion.div
      variants={slideInFromLeft(0.5)}
       className="flex flex-col gap-6 mt-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full w-full h-auto">
        <span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-5xl sm:text-4xl md:text-6xl lg:text-6xl">
            Rahul Roy
          </span>
          <br />
          
        </span>
        Web Developer & Graphic Designer
      </motion.div>

      {/* Professional Overview */}
      <motion.p
      variants={slideInFromLeft(0.8)}
       className="text-justify text-lg text-gray-400 my-5 max-w-[600px]">
        I&apos;m a Full Stack Software Engineer & UI/UX Designer blending code and creativity to build powerful, user-centric digital experiences.
      </motion.p>

      {/* Detailed Professional Profile */}
      <motion.h1
      variants={slideInFromTop}
       className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
        I’m Rahul Roy – Founder, Technologist, Designer, and Cultural Entrepreneur
      </motion.h1>

      <motion.p
      variants={slideInFromLeft(1)}
       className="text-justify text-lg text-gray-400 mb-4">
        My name is Rahul Roy, and I am a multidisciplinary professional with a mission to integrate creativity, technology, and cultural heritage into impactful, forward-thinking solutions. I currently serve as the{" "}
        <strong>Founder & CEO of Aitihya</strong>, an e-commerce platform dedicated to promoting Bengal’s traditional craftsmanship and empowering artisans across India.
      </motion.p>
      <motion.p
      variants={slideInFromLeft(1)}
       className="text-justify text-lg text-gray-400 mb-6">
        With a robust background in <strong>software development</strong>, <strong>digital design</strong>, and <strong>entrepreneurship</strong>, I bridge the gap between functionality and artistic expression. My expertise spans across full-stack development, automation, brand building, and UI/UX design, all rooted in a vision of innovation and inclusivity.
      </motion.p>

      {/* Technical Skills Section */}
      <motion.h2
      variants={slideInFromTop}
       className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
        Technical & Creative Skill Set
      </motion.h2>
      <motion.p
      variants={slideInFromLeft(1)}
       className="text-justify text-lg text-gray-400 mb-4">
        I work fluently across both front-end and back-end environments, with proficiency in:
      </motion.p>
      <motion.ul
      variants={slideInFromLeft(1)}
       className="list-disc pl-6 text-lg text-gray-400 text-justify mb-6">
        <li>Programming Languages: C, Python, JavaScript, PHP, SQL</li>
        <li>Frameworks & Libraries: React.js, Next.js, Node.js, Express.js</li>
        <li>Styling Tools: Tailwind CSS, Bootstrap</li>
        <li>Database Systems: MongoDB, MySQL</li>
        <li>Cloud & Integration: Google Drive API, Firebase, AWS (basic)</li>
        <li>Design & Visual Tools: Adobe Photoshop, Illustrator, Figma, Canva</li>
        <li>Image/Media Processing: OpenCV, PIL, Adobe After Effects (basic)</li>
        <li>CMS & Builders: WordPress (with Code Snippets plugin, custom HTML/CSS/JS integration)</li>
      </motion.ul>

      {/* What I Build Section */}
      <motion.h2
      variants={slideInFromTop}
       className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
        What I Build
      </motion.h2>
      <motion.p
      variants={slideInFromLeft(1)} className="text-lg text-gray-400 text-justify mb-4">
        My work is rooted in utility, creativity, and scalability. I have developed:
      </motion.p>
      <motion.ul
      variants={slideInFromLeft(1.2)}
       className="list-disc pl-6 text-lg text-gray-400 text-justify mb-6">
        <li>Automated platforms for users to generate personal portfolio pages</li>
        <li>Cloud-integrated file upload and management systems</li>
        <li>Visual blog generators powered by user-submitted content</li>
        <li>Aesthetic and responsive user interfaces for seamless web interaction</li>
      </motion.ul>

      {/* Aitihya Section */}
      <motion.h2
      variants={slideInFromTop}
       className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
        Aitihya – My Mission, My Legacy
      </motion.h2>
      <motion.p
      variants={slideInFromLeft(1)}
       className="text-lg text-gray-400 text-justify mb-4">
        Aitihya is more than a business—it is a cultural movement. Through this platform, I aim to preserve and promote India’s traditional arts, especially focusing on artisans without GST registration or digital visibility. Aitihya provides them with a professional marketplace, combining storytelling, virtual product previews, and ethical commerce.
      </motion.p>
      <motion.p
      variants={slideInFromLeft(1)}
       className="text-lg text-gray-400 text-justify mb-6">
        Our long-term vision is to become a national platform that not only drives sales but also tells the stories behind the products—keeping heritage alive in the modern world.
      </motion.p>

      {/* Other Ventures Section */}
      <motion.h2
      variants={slideInFromTop}
       className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
        Other Ventures & Projects
      </motion.h2>
      <motion.ul
      variants={slideInFromLeft(1)}
       className="list-disc pl-6 text-lg text-gray-400 text-justify mb-6">
        <li>
          <strong>Hathat</strong> is my personal portfolio website, crafted entirely in raw HTML. It’s a representation of my minimalist design philosophy and technical fundamentals—a space where I showcase my digital works and experiments.
        </li>
        <li>
          I’m the <strong>Co-founder of Attiray & Co.</strong>, a fashion-forward brand delivering custom-printed apparel, including anime-inspired T-shirts, reflecting a youthful, expressive, and culturally-influenced identity.
        </li>
        <li>
          As a <strong>freelance professional graphic designer and web developer</strong>, I’ve collaborated with a variety of clients and institutions, blending creative strategy with technical execution.
        </li>
        <li>
          I had the opportunity to design the complete <strong>visual branding and graphics for Texavision 2025</strong>, one of our college’s premier tech-cultural festivals. The designs were showcased across digital banners, posters, merchandise, and event backdrops, contributing to the fest’s dynamic identity.
        </li>
      </motion.ul>

      {/* Values & Vision Section */}
      <motion.h2
      variants={slideInFromTop}
       className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
        My Values and Vision
      </motion.h2>
      <motion.p
      variants={slideInFromLeft(1)}
       className="text-lg text-gray-400 text-justify mb-4">
        I believe in building with purpose. Inspired by the values of <strong>Mahatma Gandhi</strong>, I strive to lead with simplicity, truth, and service. Through ventures like <strong>Tech Mechanic</strong>, my independent tech repair service, and my day-to-day creative pursuits, I remain committed to solving real-world problems while staying connected to people and purpose.
      </motion.p>
      <motion.p
      variants={slideInFromLeft(1)}
       className="text-lg text-gray-400 text-justify mb-6">
        I am deeply passionate about storytelling, design, and technology. Whether it's launching a brand, coding a system, mentoring peers, or promoting grassroots artisans, I work to make every action meaningful.
      </motion.p>

      {/* Looking Ahead Section */}
      <motion.h2
      variants={slideInFromTop}
       className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
        Looking Ahead
      </motion.h2>
      <motion.p
      variants={slideInFromLeft(1)}
       className="text-lg text-gray-400 text-justify mb-4">
        I envision a future where <strong>Aitihya becomes a globally recognized platform</strong> for Indian artisans, where my designs influence brands and experiences, and where my work uplifts communities and preserves culture. I aim to keep growing as a leader, technologist, and creator—constantly learning, evolving, and contributing.
      </motion.p>

      {/* Signature Section */}
      
     <motion.p
      variants={slideInFromTop}
       className="text-lg text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
        I am Rahul Roy. I build with purpose, design with passion, and lead with vision—committed to transforming ideas into lasting impact.
  </motion.p>
        <br />
  <motion.h2
     id="contact"
      variants={slideInFromTop}
       className="text-4xl font-semibold text-cyan-400 mb-4">
        Contact Me
      </motion.h2>
    <motion.div
    variants={slideInFromLeft(1)}
    className="flex gap-4 mt-6 text-2xl text-gray-300">
  <Link href="tel:+918250084850" target="_blank">
    <span className="flex items-center gap-2 text-[20px]">
      <FaMobile />
      +91 8250084850
    </span>
  </Link>
</motion.div>
<motion.div
variants={slideInFromLeft(1)}
className="flex gap-4 mt-6 text-2xl text-gray-300">
  <Link href="mailto:rr6216009@gmail.com" target="_blank">
    <span className="flex items-center gap-2 text-[20px]">
      <FaMailBulk />
      rr6216009@gmail.com
    </span>
  </Link>
</motion.div>
<motion.div
variants={slideInFromLeft(1)}
className="flex gap-4 mt-6 text-2xl text-gray-300">
  <Link href="/" target="_blank">
    <span className="flex items-center gap-2 text-[20px]">
      <FaAddressCard />
      Srikrishnapur, Dasghara, Dhaniakhali,
    </span>  Hooghly, West Bengal - 712402<br />India
  </Link>
</motion.div>
<motion.div
variants={slideInFromLeft(1)}
className="flex gap-4 mt-6 text-2xl text-gray-300">
  <Link href="https://facebook.com/roy.rahul1818" target="_blank">
   
      <FaFacebook />
     
  </Link>
<Link href="https://wa.me/918250084850" target="_blank">
   
      <FaWhatsapp />
     
  </Link>
  <Link href="https://instagram.com/roy.rahul._" target="_blank">
   
      <FaInstagram />
     
  </Link>
  <Link href="https://github.com/royaldotcon" target="_blank">
   
      <FaGithub />
     
  </Link>
  <Link href="https://www.linkedin.com/in/rahul-roy-48582b304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
   
      <FaLinkedin />
     
  </Link>
  <Link href="https://www.aitihya.co.in/">
   
      <FaFirefoxBrowser />
     
  </Link>
  </motion.div>
    </main>
    
    
  </motion.div>

  );
}
