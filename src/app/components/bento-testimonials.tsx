"use client";

import { testimonials } from "@/data";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Reveal from "./reveal";

/** Gradient initials avatar — honest and clean, no stock photos. */
function InitialsAvatar({ name, size = 48 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className="rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold flex-shrink-0 border-2 border-primary/30"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export default function BentoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-background py-16 text-textMuted relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12 relative">

          <h2 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
            Client Testimonials
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </Reveal>

        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-lg card-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <div className="text-primary/20 text-6xl font-serif mb-4 relative z-10 float">&ldquo;</div>

            <p className="text-lg md:text-xl text-textMain mb-8 leading-relaxed relative z-10">
              {testimonials[currentIndex].content}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 relative z-10">
              <div className="flex items-center">
                <InitialsAvatar name={testimonials[currentIndex].name} size={60} />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-textMuted text-sm">
                    {testimonials[currentIndex].role}
                    {testimonials[currentIndex].company && (
                      <span className="text-primary"> @ {testimonials[currentIndex].company}</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < testimonials[currentIndex].rating
                        ? "text-yellow-400"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-background w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primaryHover transition-all hover:scale-110 ai-glow z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-background w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primaryHover transition-all hover:scale-110 ai-glow z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`bg-surface border border-border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/50 card-glow relative overflow-hidden ${
                index === currentIndex ? 'border-primary ring-2 ring-primary/20' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < testimonial.rating ? "text-yellow-400" : "text-border"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-textMain text-sm leading-relaxed mb-4 line-clamp-3">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <InitialsAvatar name={testimonial.name} size={48} />
                  <div>
                    <h4 className="text-primary font-semibold text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-textMuted text-xs">
                      {testimonial.role}
                      {testimonial.company && (
                        <span className="text-primary"> @ {testimonial.company}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 relative">
          
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primaryHover text-background rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all ai-glow"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
