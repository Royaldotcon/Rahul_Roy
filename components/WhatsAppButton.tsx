"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/918250084850"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-800 to-cyan-400 hover:from-green-600 hover:to-purple-600  text-white p-2 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-100"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppButton;
