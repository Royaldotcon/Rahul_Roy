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
    <main className="max-w-2xl mx-auto p-20"><br />
      <h1 className="text-3xl text-white font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-300 mb-4"><i>By <strong>{blog.author}</strong></i></p>
      <p className="text-lg text-gray-400">{blog.content}</p>
    </main>
  )
}
