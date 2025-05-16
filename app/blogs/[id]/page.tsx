"use client";
import { motion } from "framer-motion";
import {  slideInFromLeft,
  slideInFromRight,
  slideInFromTop } from "@/lib/motion";

import { blogs } from '@/lib/blogsData'
import { notFound } from 'next/navigation'

type Params = {
  params: {
    id: string
  }
}

export default function BlogPage({ params }: Params) {
  const blog = blogs.find((b) => b.id === params.id)

  if (!blog) return notFound()

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-0 mt-20 w-full z-[20]"
    >
    <main className="max-w-full mx-auto p-20"><br />
      <motion.h1 
      variants={slideInFromTop}
      className="text-3xl text-white font-bold mb-2">{blog.title}</motion.h1>
      <motion.p 
      variants={slideInFromLeft(0.6)}
      className="text-gray-300 mb-4"><i>By <strong>{blog.author}</strong></i></motion.p>
      <motion.p
      variants={slideInFromLeft(0.8)}
      className="text-lg text-justify text-gray-400">{blog.content}</motion.p>
    </main>
    </motion.div>
  )
}
