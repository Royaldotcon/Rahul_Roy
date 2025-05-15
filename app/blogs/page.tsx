import Link from 'next/link'
import { blogs } from '@/lib/blogsData'

export default function BlogsPage() {
  return (
    <main className="max-w-3xl mx-auto p-20">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl text-cyan-400 font-bold">All Blogs</h1>
        <Link
          href="/blogs/message"
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition"
        >
          + New Blog
        </Link>
      </div>

      <ul className="space-y-6">
        {blogs.map((blog) => (
          <li key={blog.id} className="border p-4 rounded shadow">
            <Link 
              href={`/blogs/${blog.id}`} 
              className="text-xl font-semibold text-gray-200 hover:underline"
            >
              {blog.title}
            </Link>
            <p className="text-gray-300">
              <i>By <strong>{blog.author}</strong></i>
            </p>
            <p className="text-gray-400 mt-2">{blog.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
