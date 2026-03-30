"use client";
import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-5" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-lg relative z-10">
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-8xl font-bold text-primary animate-pulse neon-text">
              404
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/4 right-1/4 sparkle" style={{ animationDelay: '0.5s' }} />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-textMain mb-4 neon-text">
          Oops! Page Not Found
        </h2>
        <p className="text-textMuted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <button className="bg-primary text-background hover:bg-primaryHover py-3 px-8 rounded-full transition-all shadow-lg font-medium flex items-center gap-2 hover:scale-105 ai-glow">
              <FaHome /> Go Home
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-surface border border-border text-textMain hover:border-primary py-3 px-8 rounded-full transition-all shadow-md font-medium flex items-center gap-2 hover:scale-105 card-glow"
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
}
