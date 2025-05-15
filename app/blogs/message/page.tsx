"use client";
import React, { useState } from "react";

export default function MessagePage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });

    if (res.ok) {
      setSubmitted(true);
      setName("");
      setMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 shadow-md rounded-xl">
      <h2 className="text-2xl text-white font-bold mb-4 text-center">Leave a Message</h2>
      {submitted ? (
        <p className="text-green-600 text-center">Thanks for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
