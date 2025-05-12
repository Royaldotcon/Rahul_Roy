import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Rahul Roy | Designer & Developer ",
  description: "Welcome to my full stack Next.js 14 portfolio.",
  openGraph: {
    title: "Rahul Roy | Designer & Developer",
    description: "Welcome to my full stack Next.js 14 portfolio.",
    url: "https://rahul-royal.vercel.app", // or your custom domain
    images: [
      {
        url: "https://aitihya.co.in/wp-content/uploads/2025/04/pic-2048x1365.jpg", // or full URL like https://yourdomain.com/og-image.png
        width: 1200,
        height: 630,
        alt: "Rahul Roy Portfolio Preview",
      },
    ],
  },
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "space-portfolio",
    "portfolio",
    "react-icons",
    "cn",
    "clsx",
    "3d-portfolio",
    "3d-website",
    "sonner",
    "framer-motion",
    "motion",
    "animation",
    "heroicons",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "Rahul Roy",
    url: "https://github.com/royaldotcon",
  },
} as const;
