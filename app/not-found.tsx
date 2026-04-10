// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      
      {/* Glowing 404 */}
      <h1
        className="text-7xl md:text-9xl font-bold"
        style={{
          color: "var(--neon-cyan)",
          textShadow: "0 0 20px var(--neon-cyan)",
        }}
      >
        404
      </h1>

      {/* Message */}
      <h2
        className="mt-4 text-xl md:text-2xl"
        style={{ color: "var(--text-primary)" }}
      >
        Page Not Found
      </h2>

      <p
        className="mt-2 max-w-md text-sm md:text-base"
        style={{ color: "var(--text-muted)" }}
      >
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* CTA Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-xl transition-all duration-300"
        style={{
          border: "1px solid var(--neon-cyan)",
          color: "var(--neon-cyan)",
          textShadow: "0 0 8px var(--neon-cyan)",
          background: "rgba(0,245,255,0.05)",
        }}
      >
        Go Back Home ↗
      </Link>
    </div>
  );
}