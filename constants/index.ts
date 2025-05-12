import { FaYoutube, FaFacebook, FaWhatsapp, FaMobile, FaMailBulk, FaWeebly, FaSitemap, FaAddressCard } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  
  
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
 
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/roy.rahul._",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/roy.rahul1818",
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: "https://wa.me/918250084850",
  },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/rahul-roy-48582b304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "ps.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "ai.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "pr.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "lr.png",
    width: 80,
    height: 80,
  },
  
  {
    skill_name: "React",
    image: "canva.svg",
    width: 80,
    height: 80,
  },
 
  
  
  {
    skill_name: "Next.js 14",
    image: "ae.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "vsc.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "as.png",
    width: 80,
    height: 80,
  },
 
 
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
 
] as const;

export const FULLSTACK_SKILL = [
  
{
    skill_name: "Figma",
    image: "py.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "C.png",
    width: 70,
    height: 70,
  },
  
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 45,
    height: 45,
  },
] as const;

export const PROJECTS = [
  {
    title: "Aitihya: E-Commerce Website",
    description:
      'Aitihya is my entrepreneurial venture — a cultural e-commerce platform designed to showcase Bengal’s heritage by empowering local artisans and selling their handcrafted products globally.',
    image: "/projects/project-1.png",
    link: "https://www.aitihya.co.in",
  },
  {
    title: "Graphic Designing: Texavision 2K25",
    description:
      'As a Graphic Designer at Texavision 2025, I specialized in crafting innovative event branding and seamless UI/UX designs, utilizing tools like Adobe Creative Suite and Figma to ensure a cohesive visual narrative that enhanced user experience and amplified brand impact.',
    image: "/projects/project-2.png",
    link: "https://texavision.in",
  },
  {
    title: "Nextjs Portfolio Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "#",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "Whatsapp",
        icon: FaWhatsapp,
        link: "https://wa.me/918250084850",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/royaldotcon",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/roy.rahul._",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://facebook.com/roy.rahul1818",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/rahul-roy-48582b304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Call Us",
        icon: FaMobile,
        link: "tel:+918250084850",
      },
      {
        name: "Mail",
        icon: FaMailBulk,
        link: "mailto:rr6216009@gmail.com",
      },
      {
        name: "Dasghara, hooghly, West Bengal",
        icon: FaAddressCard,
        link: "https://aitihya.co.in/rahul",
      },
      
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "https://www.aitihya.co.in/rahul",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://aitihya.co.in/rahul",
};
