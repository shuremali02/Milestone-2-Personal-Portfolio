"use client";
import { testimonials } from "@/data";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-background py-16 text-textMuted" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Testimonials
          </h2>
          <p className="text-textMuted">What people say about working with me</p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          {/* Testimonial Card */}
          <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-lg mx-4 md:mx-12">
            {/* Quote Icon */}
            <div className="text-primary/20 text-6xl font-serif mb-4">&ldquo;</div>

            {/* Content */}
            <p className="text-lg md:text-xl text-textMain mb-8 leading-relaxed">
              {testimonials[currentTestimonial].content}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <div className="relative">
                  <Image
                    src={testimonials[currentTestimonial].avatar || `https://api.dicebear.com/7.x/initials/png?seed=${testimonials[currentTestimonial].name}&size=80&backgroundColor=b6e3f4,c0aede,d1d4f9,cffafe,b5b9ff`}
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-primary"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-primary">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-textMuted text-sm">
                    {testimonials[currentTestimonial].role}
                    {testimonials[currentTestimonial].company && (
                      <span className="text-primary"> @ {testimonials[currentTestimonial].company}</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < testimonials[currentTestimonial].rating
                        ? "text-yellow-400"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Now outside card and responsive */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-background w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primaryHover transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-background w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primaryHover transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
