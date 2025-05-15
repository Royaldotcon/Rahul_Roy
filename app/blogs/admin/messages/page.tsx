"use client";
import React, { useEffect, useState } from "react";

interface Message {
  name: string;
  message: string;
  date: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/api/message")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Visitor Messages</h2>
      {messages.length === 0 ? (
        <p className="text-center text-gray-500">No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg, i) => (
            <li key={i} className="border-b pb-2">
              <p className="font-semibold">{msg.name}</p>
              <p className="text-sm text-gray-600">{msg.message}</p>
              <p className="text-xs text-gray-400 mt-1">{new Date(msg.date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
