"use client";
import { testimonials } from "@/data";
import { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-background py-16 text-textMuted" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="flex items-center justify-center p-8 text-4xl font-bold text-primary">
          Testimonials
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-surface border border-border rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="relative">
                <Image
                  src={testimonials[currentTestimonial].avatar || `https://api.dicebear.com/7.x/initials/png?seed=${testimonials[currentTestimonial].name}&size=80&backgroundColor=b6e3f4,c0aede,d1d4f9,cffafe,b5b9ff`}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-primary"
                />
                <div className="absolute -bottom-1 -right-1 bg-primary text-background rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {testimonials[currentTestimonial].rating}
                  <span className="ml-1">★</span>
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-primary">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-textMuted">
                  {testimonials[currentTestimonial].role}
                  {testimonials[currentTestimonial].company && (
                    <span> at {testimonials[currentTestimonial].company}</span>
                  )}
                </p>
              </div>
            </div>

            <p className="text-lg italic text-textMain">
              "{testimonials[currentTestimonial].content}"
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentTestimonial ? "bg-primary" : "bg-border"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-primary text-background w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primaryHover transition-colors"
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-primary text-background w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primaryHover transition-colors"
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}