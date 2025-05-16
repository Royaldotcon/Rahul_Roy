"use client";
import { motion } from "framer-motion";
import {  slideInFromLeft,
  slideInFromRight,
  slideInFromTop } from "@/lib/motion";
import Link from 'next/link'
import { blogs } from '@/lib/blogsData'

export default function BlogsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-0 mt-20 w-full z-[20]"
    >
    <main className="max-w-full mx-auto p-20">
      <br />
      <motion.div
      variants={slideInFromTop}
      className="flex items-center justify-between mb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">All Blogs</h1>
        
      </motion.div>

      <ul className="space-y-6">
        {blogs.map((blog) => (
          <li key={blog.id} className="border p-4 rounded shadow">
            <motion.Link
            variants={slideInFromLeft(0.7)} 
              href={`/blogs/${blog.id}`} 
              className="text-xl font-semibold text-gray-200 hover:underline"
            >
              {blog.title}
            </motion.Link>
            <motion.p
            variants={slideInFromLeft(0.9)}
            className="text-gray-300">
              <i>By <strong>{blog.author}</strong></i>
            </motion.p>
            <motion.p 
            variants={slideInFromLeft(1)}
            className="text-gray-400 text-justify mt-2">{blog.description}</motion.p>
          </li>
        ))}
      </ul>
    </main>
    </motion.div>
  )
}
