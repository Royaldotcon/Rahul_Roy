'use client'

import { useEffect, useState } from 'react'

export default function MessagesPage() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch('/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    })

    if (res.ok) {
      setName('')
      setMessage('')
      const updated = await fetch('/api/messages').then((r) => r.json())
      setMessages(updated)
    }
  }

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Guest Messages</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          className="border px-4 py-2 w-full"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="border px-4 py-2 w-full"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"
        >
          Submit
        </button>
      </form>

      <ul className="space-y-4">
        {messages.map((msg: any, index: number) => (
          <li key={index} className="border p-4 rounded">
            <p><strong>{msg.name}</strong> said:</p>
            <p>{msg.message}</p>
            <p className="text-xs text-gray-400">{new Date(msg.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
