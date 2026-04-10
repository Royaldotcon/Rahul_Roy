// app/layout.tsx

import "./globals.css";
import type { Metadata, Viewport } from "next";
import ClientLayout from "@/components/layout/ClientLayout";

const siteUrl = "https://www.rahulroy.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Rahul Roy | Full Stack Developer & UI/UX Designer",
    template: "%s | Rahul Roy",
  },

  description:
    "Rahul Roy is a Full Stack Developer and UI/UX Designer from India, founder of Aitihya. Explore projects, skills, and modern web experiences.",

  keywords: [
  "Rahul Roy",
  "Rahul Roy developer",
  "Rahul Roy designer",

  // Core Roles
  "Software Engineer",
  "Computer Engineer",
  "Software Developer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "Web Application Developer",
  "Application Developer",

  // Mobile + Platform
  "Android Developer",
  "Mobile App Developer",
  "Cross Platform Developer",

  // Modern Tech Roles
  "React Developer",
  "Next.js Developer",
  "JavaScript Developer",
  "TypeScript Developer",
  "Node.js Developer",
  "MongoDB Developer",
  "Full Stack Engineer",
  "Frontend Engineer",
  "Backend Engineer",

  // Design Roles
  "UI UX Designer",
  "UI Designer",
  "UX Designer",
  "Product Designer",
  "Creative Developer",
  "Digital Designer",

  // Skills + Specialization
  "Responsive Web Design",
  "Modern Web Development",
  "Interactive UI Developer",
  "Framer Motion Developer",
  "Tailwind CSS Developer",
  "Performance Optimized Web Developer",

  // Freelance + Career
  "Freelance Developer",
  "Freelance Designer",
  "Portfolio Website Developer",
  "Startup Developer",
  "Startup Engineer",

  // Location SEO
  "Web Developer India",
  "Software Engineer India",
  "Developer Kolkata",
  "Software Developer Kolkata",
  "Freelancer India",

  // Personal Branding
  "Aitihya Founder",
  "Rahul Roy Portfolio",
  "Best Developer Portfolio India",
],

  authors: [{ name: "Rahul Roy", url: siteUrl }],
  creator: "Rahul Roy",
  publisher: "Rahul Roy",

  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Rahul Roy Portfolio",
    description:
      "Explore Rahul Roy's portfolio – projects, UI/UX designs, and modern web applications.",
    url: siteUrl,
    siteName: "Rahul Roy",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rahul Roy Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rahul Roy Portfolio",
    description:
      "Full Stack Developer & UI/UX Designer | Founder of Aitihya",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020008" },
    { media: "(prefers-color-scheme: light)", color: "#f4f0ff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}