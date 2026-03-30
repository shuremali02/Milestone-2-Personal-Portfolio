"use client";

import { testimonials } from "@/data";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/4 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute -top-4 right-1/4 sparkle" style={{ animationDelay: '0.5s' }} />
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3 neon-text">
            Client Testimonials
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-lg card-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 left-4 sparkle" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-4 right-4 sparkle" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 right-4 sparkle" style={{ animationDelay: '1s' }} />
            
            <div className="text-primary/20 text-6xl font-serif mb-4 relative z-10 float">&ldquo;</div>

            <p className="text-lg md:text-xl text-textMain mb-8 leading-relaxed relative z-10">
              {testimonials[currentIndex].content}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 relative z-10">
              <div className="flex items-center">
                <Image
                  src={
                    testimonials[currentIndex].avatar ||
                    `https://api.dicebear.com/7.x/initials/png?seed=${testimonials[currentIndex].name}&size=80&backgroundColor=b6e3f4,c0aede,d1d4f9,cffafe,b5b9ff`
                  }
                  alt={testimonials[currentIndex].name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-primary"
                />
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
              <div className="absolute top-2 right-2 sparkle opacity-0 hover:opacity-100" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-2 left-2 sparkle opacity-0 hover:opacity-100" style={{ animationDelay: '0.5s' }} />
              
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
                  <Image
                    src={
                      testimonial.avatar ||
                      `https://api.dicebear.com/7.x/initials/png?seed=${testimonial.name}&size=80`
                    }
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-border hover:border-primary transition-colors"
                  />
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
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 sparkle" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 sparkle" style={{ animationDelay: '0.5s' }} />
          
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
